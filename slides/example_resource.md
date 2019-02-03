<!SLIDE >
# Example Catalog Resource

    @@@ Json
    {
      "type": "File",
      "title": "/etc/payroll/credentials.conf",
      "tags": [ "file", "node", "default", "class" ],
      "file": "/etc/puppetlabs/code/environments/production/manifests/site.pp",
      "line": 32,
      "exported": false,
      "parameters": {
        "ensure": "file",
        "owner": "root",
        "group": "root",
        "mode": "0600",
        "content": "some fake secret for cfgmgmtcamp",
        "backup": false
      }
    },

.break

* Puppet iterates the catalong and invokes each provider with this data

.callout.warning Which means that *only a provider* can run code to decrypt the ciphertext

~~~SECTION:notes~~~

* Let's look again at that resource in the catalog.
* This time I'll show you the complete definition with all the properties.
* This is a resource of type File with a title and other parameters.
* You can see all the parameters, like I showed you before.
* The agent simply iterates through the catalog and invokes the proper provider for each resource
    * with only the data you see here.
* Which means that *only a provider* can run code to tranform the content and decrypt ciphertext

Use `jq` to extract this data from the catalog:

    @@@ shell code_wrap
    jq '.resources[] | select(.type == "File" and .title == "/etc/payroll/credentials.conf")' \
    /opt/puppetlabs/puppet/cache/client_data/catalog/agent.json


~~~ENDSECTION~~~
