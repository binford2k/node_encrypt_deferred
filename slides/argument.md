<!SLIDE >
# Friendly disagreement
## Is Puppet's CA sufficient for secret management?

![Duty Calls -- someone is wrong](/_images/duty_calls.jpg)

~~~SECTION:notes~~~

* No surprise, in that loaded environment, I ended up in a little friendly
  conversation about secret management
* The question at hand was whether Puppet's existing CA and distribution mechanisms
  were more-or-less sufficient for basic secret management.
* I thought that given the existing certificates, the master could encrypt text
  using its certificate and the agent could then decrypt it using its own
* It would use the built in Puppet CA and meant that each agent could only decrypt
  its own secrets
* Sure there were challenges, but I knew conceptually that it would work.
* But as often happens with strongly opinionated folk, neither of us changed position much.

~~~ENDSECTION~~~
