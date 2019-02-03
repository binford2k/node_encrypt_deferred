<!SLIDE >
# User friendly function
## Deferred secret wrapped by a function call

Just tag the string:

    @@@ Puppet
    file { '/etc/payroll/credentials4.conf':
      ensure  => file,
      owner   => 'root',
      group   => 'root',
      mode    => '0600',
      content => 'some fake secret for cfgmgmtcamp'.node_encrypt::secret,
    }
  
.break

    @@@ Shell execute code_wrap
    bolt command run "cat /etc/payroll/credentials4.conf"  --node agent

.break

    @@@ Shell execute code_wrap
    bolt command run "jq '.resources[] | select(.type == \"File\" and .title == \"/etc/payroll/credentials4.conf\").parameters' /opt/puppetlabs/puppet/cache/client_data/catalog/agent.json" --node agent

~~~SECTION:notes~~~

* And now we have a user friendly function that allows you to encrypt any secret in the catalog.
* You can tag any string in the codebase and it's cast immediately to an
  encrypted blob of ciphertext that's automatically decrypted on the agent at runtime.
* And yes, that's it.
* It only took a few minutes to read the docs and do the port.
* I think that's pretty rad and it was shockingly easy to do.

This is exactly the same as the last example and just demonstrates the value of the wrapper function.

    @@@
    Started on agent...
    Finished on agent:
      STDOUT:
        {
          "ensure": "file",
          "owner": "root",
          "group": "root",
          "mode": "0600",
          "content": {
            "__ptype": "Deferred",
            "name": "node_decrypt",
            "arguments": [
              "-----BEGIN PKCS7-----\n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\nks0KNLoWS6zXZarIMoF7k3vBWQ==\n-----END PKCS7-----\n"
            ]
          },
          "backup": false
        }
    Successful on 1 node: agent
    Ran on 1 node in 4.25 seconds


~~~ENDSECTION~~~
