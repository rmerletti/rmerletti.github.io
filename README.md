# Roberto Merletti website

Built with Jekyll

## Setup environment for running jekyll 

### Windows 10 with WSL

* open command prompt (Win+R then ```cmd```)
* run ```bash```
* run ```sudo apt-get update -y && sudo apt-get upgrade -y```
* run ```sudo apt-add-repository ppa:brightbox/ruby-ng```
* run ```sudo apt-get update```
* run ```sudo apt-get install ruby2.3 ruby2.3-dev build-essential```
* run ```sudo gem update```
* run ```sudo gem install jekyll bundler```
* check jekyll is installed with ```jekyll -v```

### OSX with rbenv

See [Jekyll site](https://jekyllrb.com/docs/installation/macos/)

## Setup on other platforms

See [Jekyll site](https://jekyllrb.com/docs/windows/)

## Run locally for testing

* cd to directory
* run ```bundle install```
* run ```bundle exec jekyll serve```

## Deploy via FTP

Run ```bundle exec jekyll build``` and then copy the contents of the _site folder to the ftp location

## Deploy to github pages

The master branch will automatically be rendered to https://rmerletti.github.io

## Note about onedrive links

See this post about getting permanent links to download files from onedrive: https://bydik.com/onedrive-direct-link/
