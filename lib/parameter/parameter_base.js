'use strict';

class ParameterBase {
    consructor(type) {
        this.type = type;
        this.isDirty = false;
    }
}

module.exports = ParameterBase;
