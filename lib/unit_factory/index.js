'use strict';

/**
 * Factory object for created units in the game world.
 */
class UnitFactory {
    constructor() {
        this.map = new Map();
        this.direction = { x: 1, y: 1, z: 1};
    }

    /**
     * Registers a new unit type with the factory.
     * @param unitType {String} Name to be associated with the unit.
     * @param ctor {Function} The constructor function for the unit being registered.
     * @returns {boolean} True if the unit type was registered successfully otherwise false.
     */
    register(unitType, ctor) {
        if (unitType && ctor) {
            if ( !this.map.has( unitType ) ) {
                this.map.set( unitType, ctor );
                return true;
            }
        }

        return false;
    }

    /**
     * Removes a previously registered unit type from the factory object.
     * @param unitType {String} Name of the unit type to be removed.
     * @returns {boolean} True if the unit type was removed successfully otherwise false.
     */
    unregister(unitType) {
        if (this.map.has(unitType)) {
            this.map.delete(unitType);
            return true;
        }

        return false;
    }

    /**
     * Creates a unit of the specified type, at the specified world position.
     * @param unitType {String} Name of the unit type to be created.
     * @param position {Object=} World position where the unit is to be located.
     * @returns {Unit} The newly created unit, if the unit type could not be found this method returns null.
     */
    create(unitType, position) {
        if (this.map.has(unitType)) {
            const ctor = this.map.get(unitType);
            const unit = new ctor();

            if (position) {
                unit.position.x = position.x * this.direction.x;
                unit.position.y = position.y * this.direction.y;
                unit.position.z = position.z * this.direction.z;
            }

            return unit;
        }

        return null;
    }
}

module.exports = UnitFactory;
