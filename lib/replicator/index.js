'use strict';

const Network = require('../network');
const Serializer = require('./serializer');

/**
 * Provides an API for replicating objects across the network.
 *
 * We currently serialize data as straight up, raw JSON data.
 * This is both non-performant as well as insecure, however
 * it gets us up and running quickly and we can change to
 * another format in the future.
 *
 * We currently replicate the entire state of the game
 * to all clients which is also non-performant. Again this
 * will be improved once we have a working system.
 *
 * The replicator can send two types of data, entity state and
 * remote procedure calls (RCP). RCP's cause a method to be
 * invoked on the connected machines.
 *
 * Each entity within the scene is assigned a unique identifier.
 * When an entity is replicated, its id is supplied so the target
 * machines know which entity the data belongs to.
 */
class Replicator {
    consructor() {
        this.serializer = new Serializer();
        this.data = {
            'metaData': {
                'name': 'shootem',
                'version': '0.0.1'
            },
            'entity': [],
            'rcp': []
        };
    }

    begin() {
        this.serializer.reset();
    }

    /**
     * Called when the replication stage has completed, sends replicated data to a specified list of clients.
     * @param clientList List of clients to receive the data.
     */
    end(clientList) {
        // Stringifying the json data is an overhead we don't really want.
        // Once we have updated to use binary data this should no longer be an issue.
        const jsonData = JSON.stringify(this.data);
        for (const client of clientList) {
            client.send(jsonData);
        }
    }

    /**
     *
     * @param entity {Entity} - The entity to be replicated.
     */
    replicateEntity(entity) {
        if (!entity) {
            throw new Error('A valid entity must be supplied for replication!');
        }

        if (entity.networkDirty && entity.networkRole !== Network.Role.None) {
            entity.replicate(this.serializer);
            entity.networkDirty = false;
        }
    }
}