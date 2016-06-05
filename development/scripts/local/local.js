/**
 * This script manages the connection to the server from the local machine.
 */
pc.script.create('local', function(app) {
    var LocalMachine = function(entity) {
        this,entity = entity;
        this.isReady = false;
        this.serverConnection = null;

        this._loginHandler = null;
        this._logOutHandler = null;
    };

    LocalMachine.prototype = {
        initialize: function() {
            this.isReady = false;

            var self = this;
            app.on('fb:init', function() {
                this.isReady = true;
                FB.getLoginStatus(self.onLoginChanged);
            }, this);

            this.onLoginChanged = this.onLoginChanged.bind(this);

            var servers = {
                'local': 'http://127.0.0.1:9000/socket',
                'default': 'http://ec2-54-171-242-80.eu-west-1.compute.amazonaws.com:9000/socket'
            };

            //var selectedServer = 'default';
            var selectedServer = 'local';

            this.serverConnection = new ServerConnection(servers[selectedServer]);
        },

        /**
         * Invoked by the facebook API when our log-in status has changed.
         * @param response
         */
        onLoginChanged: function(response) {
            if (response.status === 'connected') {
                this.showLogout();
                this.hideLogin();
                app.fire('app:fblogin');
            } else {
                this.showLogin();
                this.hideLogout();
                app.fire('app:fblogout');
            }
        },

        showLogin: function() {
            var self = this;

            var login = document.querySelector('.fb-login');
            if (login) {
                login.style.display = 'block';
                if (!this._loginHandler) {
                    this._loginHandler = function() {
                        FB.login(self.onLoginChanged, {
                            scope: 'public_profile, user_photos'
                        });
                    };

                    var button = login.querySelector('.fb-button');
                    button.addEventListener('click', this._loginHandler);
                }
            }
        },

        //
        hideLogin: function() {
            var login = document.querySelector('.fb-login');
            if (login) {
                login.style.display = 'none';
            }
        },

        showLogout: function() {
            var self = this;

            var logout = document.querySelector('.fb-logout');
            if (logout) {
                logout.style.display = 'block';

                if (!this._logOutHandler) {
                    this._logoutHandler = function() {
                        FB.logout(self.onLoginChanged);
                    };

                    var button = logout.querySelector('.fb-button');
                    button.addEventListener('click', this._logoutHandler);
                }
            }
        },

        hideLogout: function() {
            var logout = document.querySelector('.fb-logout');
            if (logout) {
                logout.style.display = 'none';
            }
        }
    };

    return LocalMachine;
});
