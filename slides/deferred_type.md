<!SLIDE >
# Puppet 6 introduces *Deferred Functions*
## Evaluated by agent during enforcement

Building a template on the agent:

    @@@ Puppet
    $variables = {
      'password' => Deferred('vault_lookup::lookup',
                      ["secret/test", 'https://vault.docker:8200']),
    }
    
    # compile the template source into the catalog
    file { '/etc/secrets.conf':
      ensure  => file,
      content => Deferred('inline_epp',
                   [file('mymodule/secrets.conf.epp'), $variables]),
    }

.callout.info Any Puppet 4.x function that returns a value can be deferred except
for those using scope variables or interacting with the catalog.

~~~SECTION:notes~~~

* Secret value is resolved on agent
* Template is rendered on agent
* Declare an instance of the `Deferred` data type
* Give it the name of the function you want to call and an array of arguments
* Use **`inline_template()`** and **`file()`** to include template source in catalog
* You can defer most Puppet 4.x functions
* Note: only `.epp` style templates can be deferred due to how ERB uses scope.

~~~ENDSECTION~~~
