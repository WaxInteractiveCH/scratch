Scratch
================
### A Sample Static-Site Project Architecture

**Scratch** is a functional reference project for the front-end architecture of a static-site web project.  It's built by and for for [SQLI Agency Switzerland](https://github.com/sqliagencych), but if you find it useful, feel free to clone, fork or report issues.  

Scratch is *not* intended to serve as a boilerplate or starting point for a project.  However, a secondary goal of Scratch is to serve as a potential end-point for a custom yeoman-generator which we will develop later. 

## Getting Started

Clone this repo locally:

`git clone git@github.com:SQLIagencych/scratch.git`

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/scratch` directory, then run `npm install`. npm will look at [package.json](package.json) and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.


### Grunt Commands
#### Test & Build - `grunt`
TBD

#### Local Server - `grunt server`
`grunt server` will fire up a local server automatically and refresh the page whenever you save your files. It's pretty cool.  

#### Just Test - `grunt test`
Runs [JSHint](http://jshint.com) and [QUnit](http://qunitjs.com/) tests headlessly in [PhantomJS](http://phantomjs.org/) (used for CI).

## On the Inside...

### Origins

This project was originally initialized with Yeoman using the webapp generator including Twitter Bootstrap for Sass, RequireJS, and Modernizr.  `yo webapp`