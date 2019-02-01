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
