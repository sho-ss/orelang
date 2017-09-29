"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetOperator {
    call(engine, args) {
        return engine.variables[engine.eval(args[0])];
    }
}
exports.GetOperator = GetOperator;
