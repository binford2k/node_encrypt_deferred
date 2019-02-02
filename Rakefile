desc "Preview a presentation with a Docker presenter"
task :preview do
  raise "Please install Docker first: https://www.docker.com/community-edition" unless system('docker --version')

  puts "Open your web browser to http://localhost:9090 if it doesn't happen automatically."
  Thread.new do
    sleep 3
    system("open http://localhost:9090")
  end

  system("docker run -p 9090:9090 -v #{Dir.pwd}:/var/cache/showoff binford2k/showoff showoff serve")
end
