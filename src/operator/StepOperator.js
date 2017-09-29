"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StepOperator {
    call(engine, args) {
        let ret;
        args.forEach(arg => {
            ret = engine.eval(arg);
        });
        return ret;
    }
}
exports.StepOperator = StepOperator;
