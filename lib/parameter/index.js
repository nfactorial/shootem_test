'use strict';

/*
 * Parameters are used to represent values that may be transmitted across the network.
 * We use parameters rather than raw values to allow serialization for particular data
 * types to be hidden away from the rest of the code. It also allows us to box up value
 * types so that they may be easily passed around by reference. It also allows us to
 * associate some meta-data along with the value, such as whether it has been changed.
 *
 * Parameters are created by requiring this module and then calling the appropriate
 * create* method. For example, to create an integer parameter:
 *
 * ```
 * const Parameter = require('parameter');
 *
 * var myInteger = Parameter.createInt32(0);
 * ```
 */

const ParameterInt32 = require('./parameter_int32');

const PARAMETER_TYPES = {
    'float32': 'FLOAT32',
    'int32': 'INT32',
    'bool': 'BOOL',
    'vec2': 'VEC2',
    'vec3': 'VEC3',
    'vec4': 'VEC4'
};

module.exports.createInt32 = function(defaultValue) {
    return new ParameterInt32(PARAMETER_TYPES.int32, defaultValue);
};

module.exports.createFloat32 = function(defaultValue) {
    return new Parameter(PARAMETER_TYPES.float32, defaultValue);
};

module.exports.createBool = function(defaultValue) {
    return new Parameter(PARAMETER_TYPES.bool, defaultValue);
};

module.exports.createVec2 = function(defaultValue) {
    return new Parameter(PARAMETER_TYPES.vec2, defaultValue);
};

module.exports.createVec3 = function(defaultValue) {
    return new Parameter(PARAMETER_TYPES.vec3, defaultValue);
};

module.exports.createVec4 = function(defaultValue) {
    return new Parameter(PARAMETER_TYPES.vec4, defaultValue);
};

modules.exports.TYPES = PARAMETER_TYPES;
