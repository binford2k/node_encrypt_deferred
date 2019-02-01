<!SLIDE >
# Example Catalog Resource

    @@@ Json
    {
      "type": "File",
      "title": "/etc/puppetlabs/mcollective/server.cfg",
    [...]
      "parameters": {
        "content": "plugin.activemq.pool.1.password = TekjzYZubjJG3WgSOkq4...",
        "owner": "root",
        "group": "wheel",
        "mode": "0660",
        "notify": "Service[mcollective]",
        "backup": false
      },
      "sensitive_parameters": ["content"]
    },
    
.break

* For each resource
    * Puppet chooses the best provider for that type
    * Invokes the provider with the data you see here
    
.callout.warning Which means that *only a provider* can run code to decrypt the ciphertext