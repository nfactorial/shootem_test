/**
 * This script manages the connection to the server from the local machine.
 */
pc.script.create('local', function(app) {
    var LocalMachine = function(entity) {
        this,entity = entity;
        this.server = null;
    };

    LocalMachine.prototype = {
        initialize: function() {
            var servers = {
                'local': 'http://ec2-54-171-242-80.eu-west-1.compute.amazonaws.com:9000/socket',
                'default': 'http://ec2-54-171-242-80.eu-west-1.compute.amazonaws.com:9000/socket'
            };

            var selectedServer = 'default';

            this.server = new ServerConnection(servers[selectedServer]);
        },

        update: function(dt) {
            //
        }
    };

    return LocalMachine;
});
