<!SLIDE >
# Example Secret with Stub File
## Wrapper type encrypts *content*

    @@@ Puppet
    node_encrypt::file { '/etc/payroll/credentials2.conf':
      ensure  => file,
      owner   => 'root',
      group   => 'root',
      mode    => '0600',
      content => 'some fake secret for cfgmgmtcamp',
    }

.break

    @@@ Shell execute code_wrap
    bolt command run "cat /etc/payroll/credentials2.conf"  --node agent

.break

    @@@ Shell execute code_wrap
    bolt command run "jq '.resources[] | select(.type == \"File\" and .title == \"/etc/payroll/credentials2.conf\").parameters' /opt/puppetlabs/puppet/cache/client_data/catalog/agent.json" --node agent

.break

    @@@ Shell execute code_wrap
    bolt command run "jq '.resources[] | select(.type == \"Node_encrypted_file\" and .title == \"/etc/payroll/credentials2.conf\").parameters' /opt/puppetlabs/puppet/cache/client_data/catalog/agent.json" --node agent


~~~SECTION:notes~~~

* Managing secrets using my module was pretty simple for the end user
    * As long as you wanted to encrypt a complete file, that is.
* All you needed to do was prefix each file you wanted encrypted with the
  `node_encrypt` namespace.
* As you can see, the file resource doesn't even have a content parameter in the catalog.
* Instead, that content is managed by the `node_encrypted_file` resource as a blob of ciphertext.

Note the lack of the `content` parameter

    @@@
    Started on agent...
    Finished on agent:
      STDOUT:
        {
          "ensure": "file",
          "group": "root",
          "mode": "0600",
          "owner": "root"
        }
    Successful on 1 node: agent
    Ran on 1 node in 3.63 seconds

Instead, the content of that file is managed by this other resource.

    @@@
    Started on agent...
    Finished on agent:
      STDOUT:
        {
          "content": "-----BEGIN PKCS7-----\n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\nyQb4LJvu9phVurWinfvL+JatSw==\n-----END PKCS7-----\n",
          "before": "File[/etc/payroll/credentials2.conf]"
        }
    Successful on 1 node: agent
    Ran on 1 node in 3.09 seconds


~~~ENDSECTION~~~
