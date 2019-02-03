<!SLIDE >
# Example Encrypted Secret
## Deferring the function

    @@@ Puppet
    file { '/etc/payroll/credentials3.conf':
      ensure  => file,
      owner   => 'root',
      group   => 'root',
      mode    => '0600',
      content => Deferred("node_decrypt",
                    [node_encrypt('some fake secret for cfgmgmtcamp')]
                 ),
    }

.break

    @@@ Shell execute code_wrap
    bolt command run "cat /etc/payroll/credentials3.conf"  --node agent

.break

    @@@ Shell execute code_wrap
    bolt command run "jq '.resources[] | select(.type == \"File\" and .title == \"/etc/payroll/credentials3.conf\").parameters' /opt/puppetlabs/puppet/cache/client_data/catalog/agent.json" --node agent


~~~SECTION:notes~~~

* Now you can run that function agent-side by just declaring it with a Deferred data type.
* I pass the name of the decrypt function and use the encrypted ciphertext as the argument.
* Now you can see that instead of plain text, the catalog contains a Deferred object and some ciphertext.
* Again, all you need to defer a function and run it on the agent is a Puppet 4.x function that doesn't do any funny stuff.
* It's even relatively straightforward to use.
* Use `node_encrypt` to encrypt on the master, then defer `node_decrypt` to the agent
* .....but that's a lot of typing, yeah?
* We can do better

Now the `content` is a Deferred object with the name of the function and a list
of arguments to run. This will be resolved to a value at runtime.

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
              "-----BEGIN PKCS7-----\n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\nf8NVxWr9NKVPa8jbm4i8eIpXDw==\n-----END PKCS7-----\n"
            ]
          },
          "backup": false
        }
    Successful on 1 node: agent
    Ran on 1 node in 4.29 seconds

~~~ENDSECTION~~~
