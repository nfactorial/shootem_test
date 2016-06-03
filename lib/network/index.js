
/*
 * The 'Role' variable defines the network role of an entity.
 *
 * none - Means there is no role and the entity makes no contribution to the network layer.
 * local - Means the local machine is considered authority over the entities state.
 * remote - Means the object is simulated locally, but another machine is considered the authority.
 */
module.exports.Role = {
    'None': 'NONE',
    'Local': 'LOCAL',
    'Remote': 'REMOTE'
};
