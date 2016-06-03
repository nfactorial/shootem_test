'use strict';

const Entity = require('../entity');
const Parameter = require('../../parameter');

const DEFAULT_HEALTH = 100;

/**
 * A tank is a unit in the game that may move around and shoot other entities in the world.
 */
class Tank extends Entity {
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
