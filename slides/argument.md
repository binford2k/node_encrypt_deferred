<!SLIDE >
# Friendly disagreement
## Is Puppet's CA sufficient for secret management?

![Duty Calls -- someone is wrong](/_images/duty_calls.jpg)

~~~SECTION:notes~~~

* No surprise, in that loaded environment, I ended up debating secrets
* The question was whether Puppet's existing CA and distribution mechanisms were
  more-or-less sufficient for basic secret management.
* I thought that the agent could encrypt text using its certificate and the agent
  could then decrypt it using its own certificate
* It would use the built in Puppet CA and meant that each agent could only decrypt
  its own secrets
* Sure there were challenges, but I knew it would work conceptually.
* But as often happens with strongly opinionated folk, neither of us changed position much.

~~~ENDSECTION~~~
