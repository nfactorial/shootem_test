'use strict';

const GameState = require('@nfactorial/game_state_js');

/**
 * This game system manages all the teams in the currently running session.
 */
class TeamManager extends GameState.GameSystem {
    constructor() {
        super();

        this.teams = [];
    }
}

module.exports = TeamManager;
