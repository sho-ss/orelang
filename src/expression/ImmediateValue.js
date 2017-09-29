"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImmediateValue {
    constructor(value) {
        this.value = value;
    }
    eval(engine) {
        return this.value;
    }
}
exports.ImmediateValue = ImmediateValue;
