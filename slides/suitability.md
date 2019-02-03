<!SLIDE >
# Deferring functions is easy
## But let's talk about when you *should* do it

![You were so preoccupied...](/_images/preoccupied.jpg)

~~~SECTION:notes~~~

* Remember that I said this was going to be a lot about guardrails
* And that we weren't going to be talking about how to use Puppet as
  a fancy shell script engine
* This is when we come back to the other point I mentioned earlier.
* The only functions it makes sense to defer are those which return a value.
    * This framework does not allow you to defer logic
* You cannot make decisions based on an agent side function
* All it allows you to do is resolve a value as the catalog is enforced.
    * That's it; **resolve a value**.
* And there's reason for this.

~~~ENDSECTION~~~
