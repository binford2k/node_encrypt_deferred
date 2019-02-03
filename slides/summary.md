<!SLIDE center>
# Summary

![.float_right Puppet 6](/_images/puppet6.png)

* Agent side functions are totally a thing now for specific kinds of use cases.
* Any Puppet 4.x function can be deferred
    * Resolve a value
    * Generally avoid side effects
* Use deferred functions as placeholders for late-resolved values
* Should focus on providing intent

