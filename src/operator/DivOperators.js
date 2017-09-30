"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuotOperator {
    call(engine, args) {
        if (args.length != 2) {
            throw new Error(`('/', num1, num2)\n 引数は2つ。`);
        }
        let ret = null, x = Number(engine.eval(args[0])), y = Number(engine.eval(args[1]));
        ret = (x - x % y) / y;
        return ret;
    }
}
exports.QuotOperator = QuotOperator;
class ModOperator {
    call(engine, args) {
        if (args.length != 2) {
            throw new Error(`('/', num1, num2)\n 引数は2つ。`);
        }
        let ret = null;
        ret = Number(engine.eval(args[0])) % Number(engine.eval(args[1]));
        return ret;
    }
}
exports.ModOperator = ModOperator;
