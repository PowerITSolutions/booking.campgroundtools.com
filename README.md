# booking.campgroundtools.com

to run you need node and bower installed, there are 100's of references on the internet, but here is a quick overview:


## Install Node.js
you need Node.js to run bower (package manager) and gulp (task runner), so to install it easiest to just follow instructions from node @ https://nodejs.org/en/

## Install Bower (Package Manager)
now you have node installed it is easy to install bower using nodes package manage NPM, make sure you are in your project directory and run:

npm install -g bower


## Install Gulp (Task Runner)

npm install -g gulp


## Setting up the project
You now have to set up the project, really bring in the packages to run it since they don't make since to manage in source control.

First bring in the local runner tasks, mostly gulp libraries by running

npm install

this looks in the project.json and installs all dependencies from there

then run:

bower install

this looks in the bower.json and installs any dependencies from there

## building and running the project
The gulpfile.js has several tasks in it, but you can run simply by on the command line:

gulp


This will build the scss files and serve up the index.html page @ http://localhost:8081  (if a port conflict on your machine you can change it easily in the gulpfile

note that as you change ans save the html, js or scss inthe project the running gulp will automatically compile changes and reload your browser... nice and easy!

ctrl+c in your command window will stop the webserver



