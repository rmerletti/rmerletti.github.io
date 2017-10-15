# Roberto Merletti website

Built with Jekyll

## Setup environment for running jekyll on windows 10 anniversary edition

* open command prompt (Win+R then ```cmd```)
* run ```bash```
* run ```sudo apt-get update -y && sudo apt-get upgrade -y```
* run ```sudo apt-add-repository ppa:brightbox/ruby-ng```
* run ```sudo apt-get update```
* run ```sudo apt-get install ruby2.3 ruby2.3-dev build-essential```
* run ```sudo gem update```
* run ```sudo gem install jekyll bundler```
* check jekyll is installed with ```jekyll -v```

## Setup on other platforms

See [Jekyll site](https://jekyllrb.com/docs/windows/)

## Run locally for testing

* cd to directory
* run ```bundler install ```
* run ```bundle exec jekyll serve```

## TODO

[x] Install and run jekyll locally on win
[x] Add local jquery dep
[ ] Find easy jekyll wysiyg editor
[ ] Fix running on windows
[x] Remove lorem-ipsum and add under construction
[ ] Pages
    [x] cv-it
    [ ] cv-it-extended
    [ ] cv-en
    [ ] cv-en-extended
[ ] Point domain to GH