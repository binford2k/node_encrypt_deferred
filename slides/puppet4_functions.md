<!SLIDE>
# Porting the module
## From custom providers to deferred functions

.callout.meh After all that buildup, I'm afraid this might be a little anticlimactic.

* Do you remember what's needed to defer a function?

<!SLIDE>
# Porting the module
## From custom providers to deferred functions

.callout.grin After all that buildup, I'm afraid this might be a little anticlimactic.

* Do you remember what's needed to defer a function?
* Just expose the decrypt half as a Puppet 4.x function:

.break

    @@@ Ruby
    Puppet::Functions.create_function(:node_decrypt) do
      dispatch :decrypt do
        param 'String', :content
      end

      def decrypt(content)
        Puppet::Pops::Types::PSensitiveType::Sensitive.new(
          Puppet_X::Binford2k::NodeEncrypt.decrypt(content)
        )
      end
    end

~~~SECTION:notes~~~

* I just needed to put the code needed to decrypt a secret into a Puppet 4.x
  function that ***returns a value***.
* And.... and well, that's it.

~~~ENDSECTION~~~
