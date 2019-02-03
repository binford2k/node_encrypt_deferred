<!SLIDE >
# Artist's Rendition of Puppet Catalogs

![secrets everywhere](/_images/secrets_everywhere.jpg)

~~~SECTION:notes~~~

* Let's level set first, because I don't actually want to scare you
* Once Puppet's completed the initial certificate handshake, everything is encrypted via SSL
* So it's not like we're squirting secrets around Zune style
* But the catalog itself **does have** plain text secrets in it.
* And there are reports, and diffs, and cached state files too.
* The files are all protected by `root` filesystem permissions.
* But that's a lot of eggs to put in one basket.
* If an attacker gets ahold of the catalog somehow, they've got the keys to everything that Puppet's managing.

~~~ENDSECTION~~~
