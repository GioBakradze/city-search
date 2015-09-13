<?php

namespace App\Http\Controllers;

use App\Services\MapService as MapService;
use App\Services\TwitterService as TwitterService;

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
     * @param  TwitterService  $twitter
     * @param  string  $cityName
     * @return Response
     */
    public function city($cityName, MapService $map, TwitterService $twitter) {

        $data = array();

        $data['map'] = json_decode($map->getCityCoordinates($cityName));

        if ($data['map']->status == 'ZERO_RESULTS') {
            return 'CITY_NOT_FOUND';
        }

        $data['tweets'] = json_decode($twitter->getTweetsAboutCity(
                $cityName, 
                $data['map']->results[0]->geometry->location->lat,
                $data['map']->results[0]->geometry->location->lng
            ));

        return json_encode($data);
    }
}
