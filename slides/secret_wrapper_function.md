<!SLIDE center>
# *Deferred* is a Data Type
## A ***value expression***

* Returns a callable object
* Wraps a function call and its arguments
* Assign to variable like any other value expression
* ... or return it from a function:

~~~SECTION:notes~~~

* Remember how I said that *Deferred* is a data type?
* This is why that's important.
* The thing it returns is just an object that you can do things to like any other object.
* In our very first example, with the agent side template, we assigned it to a variable.
* But we can also return it from a function.

~~~ENDSECTION~~~

<!SLIDE center>
# *Deferred* is a Data Type
## A ***value expression***

* Returns a callable object
* Wraps a function call and its arguments
* Assign to variable like any other value expression
* ... or return it from a function:

.break

    @@@ Puppet
    function node_encrypt::secret(String $data) >> Deferred {
      Deferred("node_decrypt", [node_encrypt($data)])
    }

~~~SECTION:notes~~~

* So this is a Puppet language function
* Which means that I can basically just cut & paste the code from the last slide in

~~~ENDSECTION~~~
