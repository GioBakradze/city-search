app.factory('tokenInterceptor', function($localStorage) {
    function addToken(config) {
        if ($localStorage.hasOwnProperty('token')) {
            config.headers = config.headers || {};
            config.headers.token = $localStorage.token;
        }
        return config;
    }

    return {
        request: addToken
    };
});
