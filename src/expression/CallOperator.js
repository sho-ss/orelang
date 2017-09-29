"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CallOperator {
    constructor(operator, args) {
        this.operator = operator;
        this.args = args;
    }
    eval(engine) {
        return this.operator.call(engine, this.args);
    }
}
exports.CallOperator = CallOperator;
