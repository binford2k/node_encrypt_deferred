desc "Preview a presentation with a Docker presenter"
task :preview do
  raise "Please install Docker first: https://www.docker.com/community-edition" unless system('docker --version')
  content = Dir.pwd
  shared  = File.dirname content

  puts "Open your web browser to http://localhost:9090 if it doesn't happen automatically."
  Thread.new do
    sleep 2
    system("open http://localhost:9090")
  end

  system("docker run -p 9090:9090 -v #{content}:/var/cache/showoff -v #{shared}:/var/cache binford2k/showoff showoff serve")
end
