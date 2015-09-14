# city-search

This single page application is created using AngularJS and laravel/lumen framework, before we set up our development environment, we have to copy this repo to local machine. Now we have to configure tow parts of this application, front-end part and back-end part


## Front-end

For setting up the development environment for front-end part, we need some tools, [node js with npm](https://nodejs.org/en/), [bower](http://bower.io/), [grunt](http://gruntjs.com/)

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

## Back-end

Back-end part is written on php and uses mysql for cache storage, so we should at least install mysql and php itself.

I personally use [xampp](https://www.apachefriends.org/index.html), this is very simple to download and install, just a few steps

Then we should install [composer](https://getcomposer.org/), package manage for php

After all tools are installed we go to back/lumen directory of our repo and run 

```
composer install
```

Now we have to configure our back-end application, for this we should rename `.env.example` to `.env`

Then we will create necessary mysql data base and put configuration data into following fields in `.env` file

```
DB_DATABASE=[your data base name]
DB_USERNAME=[your user name, probably root]
DB_PASSWORD=[your password, probably empty for development purposes]
```

Note that `TWEETS_CACHE_LIFETIME_MINUTES` and `TWEETS_SEARCH_RADIUS_KM` configuration options are also in `.env` file,
they define cache lifetime for tweets of certain city and radius in km for searching tweets

After that we run

```
php artisan migrate
```

to build necessary schemas and then we start our back-end api using

```
php artisan serve
```

if everything is ok, head to [http://localhost:8000/](http://localhost:8000/) and you will see `Welcome To CitySearch backend API`

Now go back to front-end page and enjoy application
