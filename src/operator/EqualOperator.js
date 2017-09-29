"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EqualOperator {
    call(engine, args) {
        return engine.eval(args[0]) === engine.eval(args[1]);
    }
}
exports.EqualOperator = EqualOperator;
