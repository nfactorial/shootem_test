pc.script.attribute('camera', 'entity', null, {
    displayName: 'Camera',
    description: 'Camera for teams view into the scene.'
});

pc.script.attribute('tankTemplate', 'entity', null, {
    displayName: 'Tank Template',
    description: 'Template object for all tank units.'
});

/**
 * This script describes a team within the running game.
 * There are two teams, the server will let us know which team the local
 * player belongs to.
 */
pc.script.create('team', function (app) {
    var Team = function (entity) {
        this.entity = entity;
        this.units = [];
    };

    Team.prototype = {
        /**
         * Called once after all resources are loaded and before the first update
         */
        initialize: function () {
        },

        /**
         * Called every frame.
         * @param dt {Number} Time (in seconds) since the last update.
         */
        update: function (dt) {
        },

        /**
         *
         */
        findNearestTarget: function() {
            if (this.opponent) {
                var self = this;
                var nearest = null;
                this.opponent.units.forEach(function(e) {
                    // Compute distance to object
                    // If it's closer than 'nearest' set it as nearest
                });

                // If nearest is further than our maximum range, return null
                // otherwise return object
            }
        }
    };

    return Team;
});
