'use strict';

const Entity = require('../entity');

const DEFAULT_HEALTH = 100;

/**
 * A tower stands on the map and takes damage. The first player to lose all their towers, loses the game.
 */
class Tower extends Entity {
    constructor(desc) {
        super(desc);

        this.maxHealth = desc.health || DEFAULT_HEALTH;
        this.health = this.maxHealth;
    }
}

module.exports = Tower;
