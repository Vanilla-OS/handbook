---
title: Guide for installing Jekyll & Bundler
description: Learn how to install Jekyll & Bundler in an Ubuntu container 
date: 2023-01-23
layout: article
authors: 
    - gonzoknows
published: true
---

## Introduction

In this document, we will guide you through the process of installing Jekyll and Bundler within an Ubuntu container on a Vanilla operating system. Jekyll, a popular static site generator, is ideal for creating blogs, documentation, and personal websites, while Bundler, a package manager for Ruby, helps manage dependencies within Jekyll projects.

## Installing Jekyll In An Ubuntu Container via Command Line

- Open "Terminal"
- Type or copy & paste the following into Terminal
~~~
apx enter
~~~
- Type or copy & paste the following into Terminal 
    - This will pull the required dependencies to install Jekyll
~~~
sudo apt-get install ruby-full build-essential zlib1g-dev
~~~
- Once Terminal finishes installing the required dependencies, press "Enter" 
- Jekyll is now installed! via command line

## Navigate into your repo 

- Navigate to your repo using the (`cd`) command 
    - Example: (`cd /Documents/GitHub/handbook`)

## Installing Bundler into your repo

- Once you are in your repo's directory
- Type or copy & paste the following into Terminal
    - This will install bundler

~~~
bundler install
~~~ 

(_**Note**_: If your listen is out of date you might have to run `bundle update listen`)

## Serving your site locally

- Once bundler is installed 
- Type or copy & paste the following into Terminal
    - This will build the page to `./_site` 
~~~
bundler exec jekyll build
~~~
- Then run the following to serve your site locally
~~~
bundler exec jekyll serve
~~~
- Now your site can be previewed, located at 
~~~
http://127.0.0.1:4000/ 
or
http://localhost:4000/
~~~

## Conclusion

- Now, you have successfully installed Jekyll & Bundler via command line and successfully served your site on local host!
