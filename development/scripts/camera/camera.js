/**
 * This script manages the connection to the server from the local machine.
 */
pc.script.create('camera_video', function(app) {
    let getUserMedia =     navigator.getUserMedia
                        || navigator.webkitGetUserMedia
                        || navigator.mozGetUserMedia
                        || navigator.msGetUserMedia;

    function hasGetUserMedia() {
        return (getUserMedia !== undefined);
    }

    var CameraVideo = function(entity) {
        this.entity = entity;
        this.videoToggleHandler = null;
    };

    CameraVideo.prototype = {
        initialize: function() {
            var self = this;

            app.on('fb:init', function() {
                // Enable video it is available
                var videoElement = document.querySelector('#localVideo');
                if (videoElement && hasGetUserMedia()) {
                    app.on('app:fblogin', function() {
                        console.log('CameraView.initialize - app:fblogin');

                        getUserMedia({
                            video: true,
                            audio: false
                        }, function(stream) {
                            videoElement.src = window.URL.createObjectURL(stream);
                        });
                    });

                    app.on('app:fblogout', function() {
                        console.log('CameraView.initialize - app:fblogout');

                        // TODO: Disable video if it was previously enabled
                    });
                }
            });
        }
    };

    return CameraVideo;
});
