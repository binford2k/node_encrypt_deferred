<!SLIDE >
# Encrypting a file in the catalog
## How it works (3.x - 5.x)

A function run on the master during compilation:

    @@@ Ruby
    Puppet::Parser::Functions::newfunction(:node_encrypt, [...]) do |args|
      content  = args.first
      certname = self.lookupvar('clientcert')
      Puppet_X::Binford2k::NodeEncrypt.encrypt(content, certname)
    end

And a provider run on the agent during enforcement:

    @@@ Ruby
    Puppet::Type.type(:node_encrypted_file).provide(:ruby) do
      desc 'Ruby provider for the node_encrypted_file type'
      # ...

      def content
        Puppet_X::Binford2k::NodeEncrypt::Value.new(File.read(resource[:path]))
      end

      def content=(value)
        File.write(resource[:path], resource[:content].decrypted_value)
      end
    end

~~~SECTION:notes~~~

* That was a lot of providers and I'm lazy, so .... I only ever got around to writing one
* But this is how it works
* There was a function to encrypt text during catalog compilation
* And then a type & provider for an encrypted file that would decrypt during enforcement
* the only thing it could manage was file content
    * decrypted using the agent's certificates

~~~ENDSECTION~~~
