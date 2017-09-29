"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddOperator {
    call(engine, args) {
        let ret = 0;
        args.forEach(arg => {
            let v = engine.eval(arg);
            ret += Number(v);
        });
        return ret;
    }
}
exports.AddOperator = AddOperator;
