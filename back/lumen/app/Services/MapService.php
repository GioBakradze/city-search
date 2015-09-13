<?php

namespace App\Services;
use Cache;

class MapService {

    private static $apiKey = 'AIzaSyD3IdidDe-OwnZAP4EHXzTK8EPIpI3-A30';

    /**
     * Returns city lattitude and longitude
     * using google maps api
     *
     * @param  string  $cityName
     * @return JSON
     */
    public function getCityCoordinates($cityName, $token) {
        $cacheKey = 'user_history_'.$token;
        $cachedData = Cache::get($cacheKey);

        // create cache for the first time
        if ($cachedData == null) { 
            $data = [$cityName];
            
            // store history for
            Cache::put($cacheKey, serialize($data), 60*24*30);
        } else {
            // update existing cache
            $data = unserialize($cachedData);
            
            // remove any element that matches
            // the name of current city
            $data = array_filter($data, function ($v) use ($cityName) {
                return strtolower($v) != strtolower($cityName);
            });


            // add new city name in front of array
            array_unshift($data, $cityName);

            // update cache
            Cache::put($cacheKey, serialize($data), 60*24*30);
        }


        return file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?key='.self::$apiKey.'&address='.$cityName);
    }

    /**
     * Returns search history for given user
     * if such history is not found returns empty array
     *
     * @param  string  $token
     * @return JSON
     */
    public function history($token) {
        $data = Cache::get('user_history_'.$token);
        
        if ($data == null)
            return [];

        return unserialize($data);
    }

}
