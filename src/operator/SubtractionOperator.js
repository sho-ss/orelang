"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubtractionOperator {
    call(engine, args) {
        let ret = Number(engine.eval(args[0]));
        args.slice(1).forEach(arg => {
            let v = engine.eval(arg);
            ret -= Number(v);
        });
        return ret;
    }
}
exports.SubtractionOperator = SubtractionOperator;
