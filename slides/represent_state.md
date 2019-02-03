<!SLIDE >
# Catalogs represent state
## Describe all configuration you care about

* Determinate
* Repeatable
* Disposable

![toss test](/_images/toss_test.gif)

.callout.info If you cannot dispose of any given server and rebuild it trivially,
then your configuration is insufficient.


~~~SECTION:notes~~~

* Because catalogs represent state
* I probably don't need to say this in 2019, but your catalog should describe
  everything that matters about this server.
* The platform that the configuration runs on shouldn't actually matter
* The server--hardware, VM, container, whatever--is just the executable form of that configuration model
    * And it should be utterly replaceable.
* Which means that your model should be simple and descriptive
* Not a fragile shell script that makes it hard to visualize or predict the final outcome.

~~~ENDSECTION~~~
