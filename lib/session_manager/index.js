'use strict';

const Session = require('../session');

const DEFAULT_MAXIMUM_SESSIONS  =   1;

class SessionManager {
    constructor() {
        this.maximumSessions = DEFAULT_MAXIMUM_SESSIONS;
        this.sessions = [];
    }

    createSession() {
        if (this.sessions.length < this.maximumSessions) {
            const newSession = new Session();

            this.sessions.push(newSession);

            newSession.onInitialize({});
            return newSession;
        }

        return null;
    }
}

module.exports = SessionManager;
