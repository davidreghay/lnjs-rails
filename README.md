# lnjs-rails 
### excruciatingly lightweight logging for your RoR app's JS

ln.js is a teensy tool I made for nicely formatted level-cognizant logging in JavaScript.  Lover of RoR that I am, I gemified it for easy inclusion in rails apps!

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'lnjs-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install lnjs-rails

## Usage

Simply require ln.js from your application.js

```javascript
//= require ln
```

After this it's easy peasy to instantiate a logger and start logging away like a code-flinging woodsman of sorts!  For example:

```javascript
var logger = new Logger('debug');
logger.log('If I knew a woodchuck who could chuck wood, would you, Chuck, chuck me a smattering of wood?');
```

It's really just that simple.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

