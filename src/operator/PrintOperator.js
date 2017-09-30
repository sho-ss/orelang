"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrintOperator {
    call(engine, args) {
        args.forEach(arg => {
            process.stdout.write(engine.eval(arg));
        });
        process.stdout.write('\n');
        return 0;
    }
}
exports.PrintOperator = PrintOperator;
