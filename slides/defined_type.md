<!SLIDE >
# Packaged up in a defined type

    @@@ Puppet
    define node_encrypt::file (
      $ensure                  = 'file',
      $path                    = $title,
      $backup                  = undef,
      $checksum                = undef,
      $content                 = undef, # managed by the custom provider
      $force                   = undef,
      #...
    ) {
      file { $title:
        ensure                => $ensure,
        path                  => $path,
        backup                => $backup,
        checksum              => $checksum,
        force                 => $force,
        #...
      }

      node_encrypted_file { $path:
        content => $content,
        before  => File[$title], # let the File resource do all the work
      }
      Node_encrypt::File<| title == $title |> {content => '<<encrypted>>'}
    }

~~~SECTION:notes~~~

* As you can see, while it worked fine, it was tedious as hell.
* I wrapped up a file resource in this defined type instead of doing it in the
  Ruby provider so that I didn't have to make two providers inheriting from each
  of posix and windows.

~~~ENDSECTION~~~
