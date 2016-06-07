'use strict';

const GameState = require('@nfactorial/game_state_js');
const Scene = require('../../scene');

class Game extends GameState.GameSystem {
    constructor() {
        super();

        this.scene = new Scene();
        this.eventMap = new Map();
    }

}