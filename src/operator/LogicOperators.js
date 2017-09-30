"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotOperator {
    call(engine, args) {
        if (args.length != 1) {
            throw new Error(`("!", cond)\n引数は、1つです。`);
        }
        let ret = null;
        if (engine.eval(args[0])) {
            ret = false;
        }
        else {
            ret = true;
        }
        return ret;
    }
}
exports.NotOperator = NotOperator;
class OrOperator {
    call(engine, args) {
        if (args.length != 2) {
            throw new Error(`('||', cond1, cond2)\n引数は、2つです。`);
        }
        let ret = null;
        if (engine.eval(args[0])) {
            ret = true;
        }
        else {
            if (engine.eval(args[1])) {
                ret = true;
            }
            else {
                ret = false;
            }
        }
        return ret;
    }
}
exports.OrOperator = OrOperator;
class AndOperator {
    call(engine, args) {
        if (args.length != 2) {
            throw new Error(`('||', cond1, cond2)\n引数は、2つです。`);
        }
        let ret = null;
        if (engine.eval(args[0])) {
            if (engine.eval(args[1])) {
                ret = true;
            }
            else {
                ret = false;
            }
        }
        else {
            ret = false;
        }
        return ret;
    }
}
exports.AndOperator = AndOperator;
