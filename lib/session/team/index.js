'use strict';

const TOWERS = [
    {
        health: 100,
        offset: { x: 0, y: 0, z: 2.5 }
    },
    {
        health: 200,
        offset: { x: 0, y: 0, z: 2.5 }
    },
    {
        health: 100,
        offset: { x: 0, y: 0, z: 3.5 }
    }
];

/**
 * The Team class manages all the units and towers that belong to a particular
 * team in the game world.
 */
class Team {
    /**
     * Prepares the team for use by the running session.
     * @param desc {Object} Specifies the direction along the z axis of the teams units.
     */
    constructor(desc) {
        this.spawnTime = Date.now();    // Used to determine if a team can spawn a new unit
        this.direction = desc.direction;
        this.towers = [];
        this.units = [];
    }

    /**
     * Called when the session is about to begin running.
     * @param initArgs
     */
    onInitialize(initArgs) {
        for (const e of TOWERS) {
            const tower = initArgs.scene.createEntity('TOWER');

            tower.position.x = e.offset.x * this.direction.x;
            tower.position.y = e.offset.y * this.direction.y;
            tower.position.z = e.offset.z * this.direction.z;

            this.towers.push(tower);
        }
    }

    /**
     * Called by the framework when the session is being terminated.
     */
    onDestroy() {
        //
    }

    /**
     * Called each frame to allow the game state to progress.
     * @param updateArgs
     */
    onUpdate(updateArgs) {
    }

    spawnUnit() {
        // TODO: Check this.spawnTime to ensure the player is allowed to spawn a unit
    }
}

module.exports = Team;
