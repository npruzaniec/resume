module Haml::Helpers
	def render(filename)
		path = File.join(File.dirname(caller[0].split(":")[0]), "_#{filename}.haml")
		Haml::Engine.new(File.read(path)).render
	end
end
