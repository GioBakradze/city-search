app.factory('mapFactory', function () {

	function _cityCoordinates(cityName) {
		// body...
	}

	function _tweets(argument) {
		// body...
	}

	function _recentSearch() {
		return [
			'Tbilisi',
			'London',
			'Moscow',
			'New york'
		];
	}

	return {
		cityCoordinates: _cityCoordinates,
		tweets: _tweets,
		recentSearch: _recentSearch
	};
});
