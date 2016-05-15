pc.script.attribute('range', 'number', 1, {
    min: 1,
    max: 5,
    displayName: 'Range',
    description: 'Maximum distance the tank can fire.'
});

pc.script.attribute('maxHealth', 'number', 100, {
    min: 1,
    max: 100,
    displayName: 'Maximum Health',
    description: 'The maximum health value for this unit.'
});

pc.script.create('tank_controller', function (app) {
    var TankController = function (entity) {
        this.entity = entity;
        this.opponent = null;
        this.attackTarget = null;
        this.health = 0;
        this.team = null;
    };

    TankController.prototype = {
        /**
         * Called once all resources are loaded and before the first update.
         */
        initialize: function () {
            this.health = this.maxHealth;
        },

        /**
         * Called every frame.
         * @param dt {Number} The time (in seconds) sicne the last update.
         */
        update: function(dt) {
        },

        /**
         * Searches the opponents units for the nearest suitable target.
         */
        findNearestTarget: function() {
            if (this.opponent) {
                var self = this;
                var nearest = null;
                this.opponent.minions.forEach(function(e) {
                    // Compute distance to object
                    // If it's closer than 'nearest' set it as nearest
                });

                // If nearest is further than our maximum range, return null
                // otherwise return object
            }
        }
    };

    return TankController;
});
