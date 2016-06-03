'use strict';

const Entity = require('../entity');
const Parameter = require('../../parameter');

const DEFAULT_HEALTH = 100;

/**
 * A tower stands on the map and takes damage. The first player to lose all their towers, loses the game.
 */
class Tower extends Entity {
    constructor(desc) {
        super(desc);

        this.health = Parameter.createFloat32(desc.health || DEFAULT_HEALTH);
    }

    replicate(serializer) {
        super.replicate(serializer);

        this.health.replicate(serializer);
    }
}

module.exports = Tower;
