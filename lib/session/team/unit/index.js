const Entity = require('../entity');

const MAX_HEALTH = 100;

/**
 * A unit is an entity in the game world that can move around and attack.
 *
 * When a unit is considered 'dead' it will emit a 'death' event. This event
 * will only fire once, any further damage applied to a 'dead' unit will be
 * ignored.
 */
class Unit extends Entity {
    constructor(desc) {
        super(desc);

        this.health = MAX_HEALTH;
    }

    /**
     * Called each frame to allow any necessary processing to occur.
     * This method should be overridden to perform custom processing.
     *
     * @param updateArgs
     */
    onUpdate(updateArgs) {
        //
    }

    /**
     * Attempts to apply an amount of damage to the unit, if the units health
     * is reduced to zero the unit will die.
     *
     * @param damage
     */
    applyDamage(damage) {
        if (this.health > 0) {
            this.health = Math.max( this.health - damage, 0 );
            if (this.health === 0) {
                // TODO: Raise 'unit dead' event
            }
        }
    }
}

module.exports = Unit;
