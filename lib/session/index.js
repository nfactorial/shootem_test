'use strict';

const Team = require('./team');
const Replicator = require('../replicator');

const DEFAULT_TEAMS = require('./team_data.json');

/**
 * Manages a single running game session.
 */
class Session {
    constructor() {
        this.teams = [];
        this.scene = null;
        this.timeout = null;
        this.replicator = new Replicator();
        this.updateArgs = null;

        for (const e of DEFAULT_TEAMS) {
            this.teams.push(new Team(e));
        }
    }

    /**
     * Called by the framework when the session is about to begin processing.
     * @param initArgs
     */
    onInitialize(initArgs) {
        if (this.scene) {
            this.scene.onInitialize(initArgs);
        }

        for (const team of this.teams) {
            team.onInitialize(initArgs);
        }

        this.timeout = setTimeout(() => {
            this.onUpdate(this.updateArgs);
        })
    }

    /**
     * Called by the framework when the session is about to be terminated.
     */
    onDestroy() {
        if (this.scene) {
            this.scene.onDestroy();
        }

        for (const team of this.teams) {
            team.onDestroy();
        }

        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }
    
    /**
     * Called each time step to allow the game session to progress.
     * @param updateArgs
     */
    onUpdate(updateArgs) {
        if (this.scene) {
            this.scene.onUpdate(updateArgs);
        }

        for (const e of this.teams) {
            e.onUpdate(updateArgs);
        }
    }

    /**
     * Performs all network serialization necessary for the current session.
     * @param replicator {Replicator} - The replication object to be used for the serialization.
     */
    replicate(replicator) {

        if (this.scene) {
            this.scene.replicate(replicator);
        }
    }
}

module.exports = Session;
