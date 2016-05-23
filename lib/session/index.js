'use strict';

var Team = require('./team');

const TEAMS = [
    {
        direction: { x: 1, y: 1, z: 1 }
    },
    {
        direction: { x: 1, y: 1, z: -1 }
    }
];

/**
 * Manages a single running game session.
 */
class Session {
    constructor() {
        this.teams = [];

        for (const e of TEAMS) {
            this.teams.push(new Team(e));
        }
    }

    /**
     * Called each time step to allow the game session to progress.
     * @param updateArgs
     */
    onUpdate(updateArgs) {
        for (const e of this.teams) {
            e.onUpdate(updateArgs);
        }
    }
}

module.exports = Session;
