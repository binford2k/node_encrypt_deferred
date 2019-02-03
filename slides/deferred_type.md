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

* And Puppet 6 now provides that as Deferred functions
* Here I'm using a template with a secret resolved agent side by calling out to Vault
* Declare an instance of the `Deferred` data type
    * Give it the name of the function you want to call and an array of arguments
* Because I don't know the secret until it's resolved, I have to delay template rendering to the agent side too
    * We compile the template source into the catalog
    * Use a Deferred call to **`inline_epp()`** to render it after the secret is resolved.
* You can defer nearly all Puppet 4.x functions this way
* Side note: `.erb` templates cannot be deferred like this due to how they use scope.

~~~ENDSECTION~~~
