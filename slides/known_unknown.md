<!SLIDE >
# Known Unknowns
## aka, resolving values at runtime

* We already do this all the time!
* Items where the specific value is less important than what it ***is***.
    * The latest version of PostgreSQL
    * Whatever address `mongo.example.com` resolves to
    * The `master` branch of the git repo
    * Admin user accounts from LDAP
    * Admin password from Vault
* Things where a placeholder that resolves at runtime is an acceptable risk.

.callout.warning To be sure, these often do cause problems themselves, but that's
outweighed by the development velocity they enable and the internal consistency
they can provide (when they're not broken),

~~~SECTION:notes~~~

* But the computing world has a long history of using the known unknowns--like variables.
* Facter facts are such variables, but they are resolved early in the compilation
    * So we can just use their values and make the catalog itself declarative.
* We only put late bound variables in the catalog when being resolved at runtime is preferable.
* I like to think of these late-bound variables as ***labels***, because they're really just a named placeholder for data
* And importantly, the name describes ***what they are***, which is often more important than what their value is
* for example, that `mongodb.example.com` address is actually more specific than if we put the IP address
    * because when we update DNS, all the hosts talking to it just use that new address.
    * so the domain name has specific meaning as *"whatever address this currently resolves to"*
    * instead of just some IP that was correct at some point in time.

~~~ENDSECTION~~~
