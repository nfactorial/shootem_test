(function () {
    var _fb = false;
    var _pc = false;
    var _inst = null;
    var app = null;

    var playcanvasAppId = '193669744362656';
    var awsAppId = '666582873493792';

    window.fbAsyncInit = function() {
        FB.init({
            appId      : playcanvasAppId,
            xfbml      : true,
            version    : 'v2.5'
        });

        _fb = true;

        if (_fb && app) {
            app.fire("fb:init");
        }
    };

    app = pc.Application.getApplication();
    app.on("initialize", function () {
        if (_fb) {
            app.fire("fb:init");
        }
    });

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}());