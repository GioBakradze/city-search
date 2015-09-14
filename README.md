# city-search

This single page application is created using AngularJS and laravel/lumen framework, before we set up our development envirorment, we have to copy this repo to local machine. Now we have to configure tow parts of this application, front-end part and back-end part


## Front-end

For setting up the development envirorment for front-end part, we need some tools, [node js with npm](https://nodejs.org/en/), [bower](http://bower.io/), [grunt](http://gruntjs.com/)

After we install those tools, we head to front directory of repo and run following commands

```
npm install
bower install
```

this will install necessary packages

Now we should run

```
grunt
```

this will create dist folder and start local server on [http://localhost:8001/](http://localhost:8001/)

if you head to this addres in browser, you should see map with search input and two buttons
