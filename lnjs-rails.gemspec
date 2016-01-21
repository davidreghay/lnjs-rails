# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'lnjs-rails/version'

Gem::Specification.new do |spec|
  spec.name          = "lnjs-rails"
  spec.version       = Lnjs::Rails::VERSION
  spec.authors       = ["David Reghay"]
  spec.email         = ["david.reghay@gmail.com"]

  spec.summary       = %q{A gemified version of ln.js, an extremely lightweight, natural logging tool.}
  spec.homepage      = "https://github.com/davidreghay/lnjs-rails"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.11"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "railties", "~> 3.1"
end
