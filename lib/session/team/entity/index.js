/**
 * Base class for all objects in the running session.
 * An entity has a position and rotation in the game world.
 */
class Entity {
    constructor(desc) {
        this.position = { x: 0, y: 0, z: 0 };
    }
}

module.exports = Entity;
