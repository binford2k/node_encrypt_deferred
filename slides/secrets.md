<!SLIDE center>
# Artist's Rendition of Puppet Catalogs

![secrets everywhere](/_images/secrets_everywhere.jpg)

~~~SECTION:notes~~~

* Let's level set first, because I don't want to scare you
* Once Puppet's completed the initial certificate handshake, everything is SSL
* So it's not like we're squirting secrets around Zune style
* But the catalog itself has plain text secrets in it.
* And there are reports, and diffs, and cached state files too.
* The files are all protected by `root` filesystem permissions.
* But that's a lot of eggs to put in one basket.
* If an attacker gets ahold of the catalog, they've got the keys to everything.

~~~ENDSECTION~~~
