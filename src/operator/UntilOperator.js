"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UntilOperator {
    call(engine, args) {
        let ret;
        while (!engine.eval(args[0])) {
            ret = engine.eval(args[1]);
        }
        return ret;
    }
}
exports.UntilOperator = UntilOperator;
