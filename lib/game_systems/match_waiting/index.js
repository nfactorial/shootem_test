'use strict';

const GameState = require('@nfactorial/game_state_js');

/**
 * This system controls the behaviour of the session whilst it is
 * waiting for players to fill the available slots.
 */
class MatchWaiting extends GameState.GameSystem {
    constructor() {
        super();

        this.startTime = 0;
        this.duration = 0;
    }

    onInitialize(initArgs) {
        //
    }

    onShutdown() {
        //
    }

    /**
     * Called when the title has entered a branch of the state tree where we are active.
     */
    onEnter() {
        this.startTime = Date.now();

        args.addListener(GAME_EVENTS.JOIN_REQUEST, this.onJoinRequest, this);
    }

    onExit() {
        this.duration = Date.now() - this.startTime;

        args.removeListener(GAME_EVENTS.JOIN_REQUEST, this.onJoinRequest, this);
    }

    onJoinRequest(e) {
        // Alternatively, have denial be the default and we must explicitly accept the join?
        if (e.securityKey === this.securityKey) {
            // TODO: Notify acceptance
        }

        // TODO: Notify denial
    }
}

module.exports = MatchWaiting;
