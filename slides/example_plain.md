<!SLIDE >
# Example Secret
## Plain text in the catalog

    @@@ Puppet
    file { '/etc/payroll/credentials.conf':
      ensure  => file,
      owner   => 'root',
      group   => 'root',
      mode    => '0600',
      content => 'some fake secret for cfgmgmtcamp',
    }

.break

    @@@ Shell execute code_wrap
    bolt command run "cat /etc/payroll/credentials.conf"  --node agent

.break

    @@@ Shell execute code_wrap
    bolt command run "jq '.resources[] | select(.type == \"File\" and .title == \"/etc/payroll/credentials.conf\").parameters' /opt/puppetlabs/puppet/cache/client_data/catalog/agent.json" --node agent

~~~SECTION:notes~~~

* So let's see what a secret actually looks like in the catalog
* This is just an example file with some obviously very real credentials
* I'm using `jq` to grab the parameters of the resource out of the catalog json.
* As you can see... the content is fully plain text.

.break

    @@@
    Started on agent...
    Finished on agent:
      STDOUT:
        {
          "ensure": "file",
          "owner": "root",
          "group": "root",
          "mode": "0600",
          "content": "some fake secret for cfgmgmtcamp",
          "backup": false
        }
    Successful on 1 node: agent
    Ran on 1 node in 3.64 seconds

~~~ENDSECTION~~~
