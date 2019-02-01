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
