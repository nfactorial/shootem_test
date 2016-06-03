'use strict';

class Scene {
    constructor() {
        this.entities = [];
    }

    onInitialize(initArgs) {
        //
    }

    onDestroy() {
        for (const entity of this.entities) {
            entity.onDestroy();
        }
    }

    /**
     * Called each frame when it's time to perform processing.
     * @param updateArgs
     */
    onUpdate(updateArgs) {
        for (const entity of this.entities) {
            entity.onUpdate(updateArgs);
        }
    }

    /**
     * Sends network data for the current state of the session across the network.
     * @param replicator {Replicator} Object used to replicate objects across the network.
     */
    replicate(replicator) {
        for (const entity of this.entities) {
            replicator.replicateEntity(entity);
        }
    }
}

module.exports = Scene;
