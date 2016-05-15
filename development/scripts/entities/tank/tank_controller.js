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

pc.script.attribute('turret', 'entity', null, {
    displayName: 'Turret',
    description: 'The turret that belongs to our tank entity.'
});

pc.script.attribute('base', 'entity', null, {
    displayName: 'Base',
    description: 'The base of our tank entity.'
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
            this.updateAttack(dt);
            this.updateMovement(dt);
        },

        /**
         * Performs any per-frame processing associated with our attack target.
         * @param dt {Number} Time (in seconds) since the last update.
         */
        updateAttack: function(dt) {
            // If we have an attack target, rotate turret to point at it
            // If we are pointing at our target, fire
            // If we have no attack target, rotate turret to point at movement target
        },

        /**
         * Performs any per-frame processing associated with our movement.
         * @param dt {Number} Time (in seconds) since the last update.
         */
        updateMovement: function(dt) {
            // Rotate base to point at movement target
            // Move along direction vector
        },

        /**
         * Finds the enemy tower that is closest to our entity.
         */
        findMoveTarget: function() {
            if (this.opponent) {
                var self = this;
                var nearest = null;
                this.opponent.towers.forEach(function(e) {
                    // Compute distance to tower
                    // If it's closer than 'nearest' set it as nearest
                });

                // Set selected tower as our movement target.
            }
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
