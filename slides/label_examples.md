<!SLIDE >
# Example Use Cases
## Things that make sense to use Deferred functions for

* Secret management:
    * Retrieving secrets from a secret server
    * Decrypting values agent side ([`binford2k/node_encrypt`](https://github.com/binford2k/binford2k-node_encrypt))
* Service discovery:
    * Consul ([`ploperations/consul_data`](https://github.com/ploperations/ploperations-consul_data))
    * Zookeeper
    * etcd
* Reduce load on the master by offloading a heavy computation:
    * Generate self-signed  SSL certificates for test webservers
* Make an API call:
    * Register in some kind of directory service
    * Trigger completion of a step in your provisioner

~~~SECTION:notes~~~

* See, I'm already violating the rules I jsut gave you.
  * Because the act of making an API call is depending on a side effect.
  * That's important, because intent, clarity, and maintainability take precedence.
* node_encrypt is the module I just ported for you
* consul_data is a newly developed module by our internal ops SRE team for
  declarative agent side service discovery.
* You're invited to try them out, offer feedback, submit PRs, etc.

~~~ENDSECTION~~~
