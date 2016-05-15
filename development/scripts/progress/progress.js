pc.script.attribute('maxTime', 'number', null, {
    min: 1,
    max: 10,
    displayName: 'Maximum Time',
    description: 'Amount of time to pass before the progress bar reaches its limit.'
});

/**
 *
 */
pc.script.create('progress', function (app) {
    var Progress = function (entity) {
        this.timer = 0;
    };

    Progress.prototype = {
        /**
         * Called once after all resources are loaded and before the first update
         */
        initialize: function () {
            this.timer = 0;
        },

        /**
         * Called every frame.
         * @param dt {Number} Time (in seconds) since the last update.
         */
        update: function (dt) {
            this.timer = Math.min(this.timer + dt, this,maxTime);
        }
    };

    return Progress;
});
