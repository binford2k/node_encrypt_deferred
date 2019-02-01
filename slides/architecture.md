<!SLIDE >
# Master-Agent Architecture

![Puppet architecture](/_images/DataFlowNodes.png)


~~~SECTION:notes~~~

* If you've taken one of my classes, you've probably seen this image enough to
  be sick of it.
* The important part about this is that all processing happens on the master
  during compilation.
* The catalog that gets sent back to the agent is just json... [switch]
  
~~~ENDSECTION~~~


<!SLIDE >
# Master-Agent Architecture

![Puppet architecture](/_images/DataFlowNodesJson.png)

~~~SECTION:notes~~~

* And that's important because it's just data.
* It's nothing more that a list of resources and their properties.
* There's nothing executable in there.
    * with the obvious exception of embedded `exec` commands and the like
* And this means that the agent doesn't ***run your code***.
    * All the Puppet code you've ever written has been run on the master.
* Instead, the agent looks at this json state description and decides what tools to use to
  enforce that state.
* This is how we make it declarative and immutable.

~~~ENDSECTION~~~
