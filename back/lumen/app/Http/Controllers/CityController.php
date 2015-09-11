<?php

namespace App\Http\Controllers;

use App\Services\MapService as MapService;

class CityController extends Controller {

    /**
     * Instantiate a new CityController instance.
     * use CORS middleware to allow request
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('cors');
    }

    /**
     * Returns city coordinates by city name
     *
     * @param  MapService  $map
     * @param  string  $cityName
     * @return Response
     */
    public function cityCoordinates($cityName, MapService $map) {
        return $map->getCityCoordinates($cityName);
    }
}
