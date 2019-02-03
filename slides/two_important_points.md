<!SLIDE center>
# But hold up a moment!
## Deferred functions are designed very specifically

.callout.stop There are guardrails in place to ensure that deferred functions
continue to be part of a maintainable and declarative codebase.

Some implementation details that will matter:

1. `Deferred` is a data type, so it returns an `Object`.
1. Deferred functions must *resolve to a value*.

### We will revisit these points [fa-thumbtack]

~~~SECTION:notes~~~

* I know this warning sounds like I'm talking about breakfast cereals and part of a complete breakfast here
* But these are important points for keeping your code and your infrastructure manageable long term.
* I spend a lot of time in Slack rescuing people from bad decisions.
* Selfishly, I don't want you to be one of them.

~~~ENDSECTION~~~
