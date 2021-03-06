<!SLIDE >
# Immutable Configuration
## For all practical purposes

* Puppet converges to a defined state each time it runs
* Long-term, this means configuration is stable at that state
* It's up to you to make that state definition as descriptive as possible
    * Use placeholders for data when that makes sense
    * When a label describes intent more than the value it resolves to
* Your model is more repeatable when you depend on fewer external inputs

.callout.info Ideally you want each node itself to be utterly irrelevant because
you can trivially build a new one configured exactly as needed.

~~~SECTION:notes~~~

* And this gets us to a more-or-less immutable configuration.

~~~ENDSECTION~~~
