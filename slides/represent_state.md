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

* I probably don't need to say this in 2019, but your catalog should describe
  everything that matters about this server.
* The hardware--or virtual hardware, container, etc--it runs on shouldn't matter
* The server is just the executable form of that configuration model
* Which means that your model should be simple and descriptive; not a fragile
  shell script.

~~~ENDSECTION~~~
