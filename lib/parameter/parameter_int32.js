'use strict';

const ParameterBase = require('./parameter_base');

class ParameterInt32 extends ParameterBase {
    constructor(type, defaultValue) {
        super(type);

        this.currentValue = defaultValue;
        this.defaultValue = defaultValue;
    }
}

module.exports = ParameterInt32;
