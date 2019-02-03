<!SLIDE >
# Example Use Cases
## Things that make sense to use Deferred functions for

* Secret management:
    * Retrieving secrets from a secret server ([`puppet/vault_lookup`](https://forge.puppet.com/puppet/vault_lookup))
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

.callout.info Like `exec`, you're responsible for idempotency when you use side effects.

~~~SECTION:notes~~~

* Here's some example use cases and modules
* And see, I'm already violating the rules I just gave you.
    * Because some of these examples do indeed depend on side effects.
    * That's important, because intent, clarity, and maintainability always take precedence.
* For secret management, the first example today used `vault_lookup`
    * And we worked through porting my `node_encrypt` module.
* You can do declarative service discovery agent side with a deferred function.
    * One example is the `consul_data` module under development by our internal SRE team.
* In some specific use cases, you can use side effects of a function
    * but then, just like execs, you become responsible for ensuring idempotence.
* You're invited to try out these modules, offer feedback, submit PRs, etc.

~~~ENDSECTION~~~
