<?php

namespace App\Services;

use App\External\TwitterAPIExchange as TwitterAPI;

class TwitterService {

    /**
     * Returns tweets about city
     * this uses cache to store search results for pre-configured
     * amount of minutes
     *
     * @param  string  $cityName
     * @param integer $lat
     * @param integer $lng
     * @param integer $radius
     * @return JSON
     */
    public function getTweetsAboutCity($cityName, $lat, $lng, $radius) {
        $settings = array(
            'oauth_access_token' => "2711457332-8N9YTUaPii63ekOfquF5kq5HMc1M0tsPzWy0hh5",
            'oauth_access_token_secret' => "i33Png94j28Oz3KJFSvNbKIgHh24c7RFlnOztnhGkIneT",
            'consumer_key' => "P2qMPdpslosu8zSzPuq6CUkwa",
            'consumer_secret' => "p1JSIAnFNtAbfFYoMRrFF9SXw9BenNlZZe5rX5XVSWTU8wJxKI"
        );
        $url = 'https://api.twitter.com/1.1/search/tweets.json';
        $requestMethod = 'GET';
        $getField = '?q='.$cityName.'&geocode='.$lat.','.$lng.','.$radius.'km';

        $twitter = new TwitterAPI($settings);

        return $twitter->setGetfield($getField)->buildOauth($url, $requestMethod)->performRequest();
    }

}
