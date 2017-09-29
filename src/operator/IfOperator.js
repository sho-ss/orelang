"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IfOperator {
    call(engine, args) {
        if (args.length !== 3) {
            throw new Error('引数は、3つじゃないといけない');
        }
        let ret = null;
        if (engine.eval(args[0])) {
            ret = engine.eval(args[1]);
        }
        else {
            ret = engine.eval(args[2]);
        }
        return ret;
    }
}
exports.IfOperator = IfOperator;
