<!SLIDE >
# Immutable Configuration
## For all practical purposes

* Puppet converges to a defined state every 30 minutes by default
* Long term, the state you define is the state your node will be in
* It's up to you to make that state definition as descriptive as possible
    * Use placeholders for data when that makes sense
    * Because that label describes intent more than the value it resolves to
* Your model is more repeatable when you depend on fewer external artifacts

.callout.info Ideally you want each node itself to be utterly irrelevant because
you can trivially build a new one configured exactly as needed.

~~~SECTION:notes~~~

* And this gets us to a more-or-less immutable configuration.
* Puppet will converge you to defined state each time it runs
    * So long-term, your configuration is stable at that defined state.

~~~ENDSECTION~~~
