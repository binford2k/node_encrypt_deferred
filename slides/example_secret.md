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

* Yes, that's it.
* It only took a few minutes to read the docs and do the port.
* But now we can tag any string in our codebase and it's cast immediately to an
  encrypted blob of ciphertext that's automatically decrypted on the agent at runtime.
* I think that's pretty rad and it was shockingly easy to do.

~~~ENDSECTION~~~
