<?php

namespace App\Http\Controllers;


class MeController extends Controller {

    /**
     * Instantiate a new MeController instance.
     * use CORS middleware to allow request
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('cors');
    }

    /**
     * Returns city coordinates by city namee
     * @return String
     */
    public function getToken() {
        return uniqid();
    }
}
