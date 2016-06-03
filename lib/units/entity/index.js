'use strict';

const Network = require('lib/network');
const Parameter = require('../../parameter');


/**
 * Base class for all objects in the running session.
 * An entity has a position and rotation in the game world.
 * 
 * Network Transfer
 * Entities within a running game may require transfer across the network
 * to other machines in the running session. Transfer is determined via
 * the networkRole variable, which may be one of the following states:
 * 
 * Network.Role.None
 * The object is never transferred across the network to any other machine.
 * 
 * Network.Role.Local
 * The local machine is considered the authority on the object and will not
 * accept state changes specified by a remote machine.
 *
 * Network.Role.Remote
 * A remote machine is considered the authority, the object will be simulated
 * locally but my be overridden by a state change request from the owning machine.
 *
 * Network transfer will only take place if the 'networkDirty' flag is set to
 * true. Otherwise the object will not be transferred.
 *
 * Network Priority
 * The networkPriority variable determines how relevant the object is to the
 * running session. This is intended for use in a future update.
 */
class Entity {
    constructor(desc) {
        this.position = Parameter.createVec3( { x: 0, y: 0, z: 0 });

        this.networkId = 0;
        this.networkRole = Network.Role.None;
        this.networkDirty = true;
        this.networkPriority = 1.0;
    }

    /**
     * Called when the entity is first ready to be used in the current session.
     * @param initArgs - Support data for object initialization.
     */
    onInitialize(initArgs) {
        //
    }

    /**
     * Called each frame whilst the entity is considered active in the game world.
     * @param updateArgs -
     */
    onUpdate(updateArgs) {
        //
    }

    /**
     * Called when the entity is about to be removed from the session.
     */
    onDestroy() {
        //
    }

    /**
     * Provides serialization of the network data for this entity.
     * @param serializer - The object to be used for data serialization.
     */
    replicate(serializer) {
        this.position.replicate(serializer);
    }
}

module.exports = Entity;
