# Personal Website

My personal portfolio/resume website. Built using Jekyll, based on the [Github.dev](http://github.dev) framework.

## Link: [raduvasilescu.com](http://raduvasilescu.com)

## Customizations

I added a customizable system for managing content such as experience items and education, as well as featured repositories,
using objects in the `_config.yml` file. These objects are read and converted to HTML components automatically by the template
engine in the pages, allowing for easy expansion and customization.


## Building

To set up the build system, do the following:

```bash
sudo apt install ruby
sudo apt install ruby-dev
sudo apt install gem

sudo gem install bundler

# In this directory:
sudo bundle install
```

Then, to build the site:

```bash
sudo bundle exec jekyll build
```

or

```bash
sudo ./build.sh
```
