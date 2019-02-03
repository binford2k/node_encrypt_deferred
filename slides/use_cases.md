<!SLIDE >
# Deferred function use cases
## Only when you need a placeholder for a value

.callout.warning Agent side functions should not make config changes, or have
side effects, or attempt to be conditionals. They should ***only*** resolve a
value at runtime that should only be known by the agent.

* Most system info should continue to be facts
    * Because it makes the catalog more repeatable
    * Exposing their values is generally useful
* Use deferred functions when:
    * Secret values that should not be known by the master
    * Want values to update on each run even when using cached catalogs
    * Agent has access to data master doesn't and you can't mirror
* ...*and maybe a few edge cases*


~~~SECTION:notes~~~

* The Deferred function use case is only when you need a placeholder for a value
  that can only be determined at runtime.

~~~ENDSECTION~~~
