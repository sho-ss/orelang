"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SetOperator {
    call(engine, args) {
        let value = engine.eval(args[1]);
        engine.variables[engine.eval(args[0])] = value;
        return value;
    }
}
exports.SetOperator = SetOperator;
