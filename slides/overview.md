<!SLIDE center>
# Deferred Functions
## people have been asking for them since...
### ...well, forever

* Bits of code that can run ***agent side*** during catalog enforcement
* Told in context of porting my own secret management module
* Caveats, cautions, and guardrails

.callout.cheers You didn't think I was going to tell you how to write
Puppet code like a fancy shell script, did you?

~~~SECTION:notes~~~

* People intuitively think that the Puppet code they write runs on the agent during enforcement.
    * Because that's generally how scripts work
* Most of you know that's not actually the case. I'll talk a bit more about how that works in a moment.
* In Puppet 6 now though, you can package up little bits of code that do.
* I'm going to walk you through how they work by porting a module of my own.
* And then I'm going to explain the limitations, and why those limitations exist.

~~~ENDSECTION~~~
