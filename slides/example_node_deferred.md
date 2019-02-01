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

* There you have it.
* All you need to defer a function to agent enforcement time is a Puppet 4.x
  function that doesn't do any funny stuff.
* It's even relatively straightforward to use.
* Use `node_encrypt` to encrypt on the master, then defer `node_decrypt` to the agent
* .....but that's a lot of typing, yeah?
* We can do better

~~~ENDSECTION~~~
