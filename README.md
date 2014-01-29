Scratch
================
### An example of a static-site project architecture

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
#### JSHint, Test, & Build - `grunt`
The `grunt` command will hint your JS, run mocha tests and build your entire site into a ready-to-deploy `dist/` directory.

#### Local Server - `grunt server`
`grunt server` will fire up a local server automatically and refresh the page whenever you save your files. It's pretty cool.  

#### Just Test - `grunt test`
Runs [JSHint](http://jshint.com) and [QUnit](http://qunitjs.com/) tests headlessly in [PhantomJS](http://phantomjs.org/) (used for CI).


## On the Inside...

### Origins

This project was originally initialized with Yeoman using the webapp generator including Twitter Bootstrap for Sass and Modernizr (RequireJS was omitted for now because this is just a static site so AMD loading seems a bit much, but who knows...).  

`yo webapp` 

### Built with

Scratch is using 
- **GruntJS** to compile, build, and do almost everything
- **Bower** for front-end dependencies
- **[Assemble](http://assemble.io/)** for building HTML templates and PHP-like partial/includes.
- **Font Awesome** for awesome font icons
- **[PrismJS](http://prismjs.com/index.html)** for syntax highlighting
- **Sass** for some awesome pre-processed CSS


## Authors

**Andy McFee**

+ <http://twitter.com/andymcfee>
+ <http://github.com/andymcfee>

## Contributors

**Aldo Ferrari**

+ <http://twitter.com/aldo_ferrari>
+ <http://github.com/AldoFerrari>

## Documenting To Do...
- Using Assemble
- Font-Awesome + Bower + Grunt
- Permalinks for Assemble

## Things To Add
- A "blog"
- Actual JS testing with Mocha
- Deploy to gh-pages
- Creating a yeoman generator

## Copyright and license

Copyright 2013 SQLI Agency CH, Inc under [the MIT license](LICENSE).