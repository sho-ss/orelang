"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultiplyOperator {
    call(engine, args) {
        let ret = 1;
        args.forEach(arg => {
            let v = engine.eval(arg);
            ret *= Number(v);
        });
        return ret;
    }
}
exports.MultiplyOperator = MultiplyOperator;
