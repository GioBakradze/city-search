<?php

namespace App\Services;

class MapService {

    private static $apiKey = 'AIzaSyD3IdidDe-OwnZAP4EHXzTK8EPIpI3-A30';

    /**
     * Returns city lattitude and longitude
     * using google maps api
     *
     * @param  string  $cityName
     * @return JSON
     */
    public function getCityCoordinates($cityName) {
        return file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?key='.self::$apiKey.'&address='.$cityName);
    }

}
