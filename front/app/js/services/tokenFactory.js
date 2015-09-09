app.factory('tokenFactory', function ($localStorage, $http, API_URL) {

    function _init() {
        if (!$localStorage.hasOwnProperty('token')) {
            console.log('get token');
            $http.get(API_URL + '/me').then(function (token) {
                $localStorage.token = token.data;
            });
        }
    }

    function _currentToken() {
        if ($localStorage.hasOwnProperty('token'))
            return $localStorage.token;

        return '';
    }

    function _hasToken() {
        return $localStorage.hasOwnProperty('token');
    }

    return {
        init: _init,
        currentToken: _currentToken,
        hasToken: _hasToken
    };
});
