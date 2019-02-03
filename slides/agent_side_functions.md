<!SLIDE >
# What about every other resource type?

![think about](/_images/think_about.jpg)

.callout.warning This would be so much more useful if I could just run a
function on the agent during enforcement...


~~~SECTION:notes~~~

* Sure enough, almost immediately someone wanted to encrypt a user password on Windows
* And then someone else wanted to use concat with a secret
* And I couldn't support either, without writing custom providers for each.
* Clearly I needed something more general.

~~~ENDSECTION~~~
