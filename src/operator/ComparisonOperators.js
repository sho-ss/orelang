"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LtOperator {
    call(engine, args) {
        if (args.length != 2) {
            throw new Error('引数は、2つです。');
        }
        let ret = null;
        if (engine.eval(args[0]) > engine.eval(args[1])) {
            ret = true;
        }
        else {
            ret = false;
        }
        return ret;
    }
}
exports.LtOperator = LtOperator;
class StOperator {
    call(engine, args) {
        if (args.length != 2) {
            throw new Error('引数は、2つです。');
        }
        let ret = null;
        if (engine.eval(args[0]) < engine.eval(args[1])) {
            ret = true;
        }
        else {
            ret = false;
        }
        return ret;
    }
}
exports.StOperator = StOperator;
class LeOperator {
    call(engine, args) {
        if (args.length != 2) {
            throw new Error('引数は、2つです。');
        }
        let ret = null;
        if (engine.eval(args[0]) >= engine.eval(args[1])) {
            ret = true;
        }
        else {
            ret = false;
        }
        return ret;
    }
}
exports.LeOperator = LeOperator;
class SeOperator {
    call(engine, args) {
        if (args.length != 2) {
            throw new Error('引数は、2つです。');
        }
        let ret = null;
        if (engine.eval(args[0]) <= engine.eval(args[1])) {
            ret = true;
        }
        else {
            ret = false;
        }
        return ret;
    }
}
exports.SeOperator = SeOperator;
