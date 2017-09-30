import { Engine } from '../Engine'
import { IOperator } from './IOperator'


export class QuotOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if(args.length != 2) {
      throw new Error (`('/', num1, num2)\n 引数は2つ。`)
    }
    let ret: number = null,
    x: number = Number(engine.eval(args[0])),
    y: number = Number(engine.eval(args[1]))

    ret = (x - x % y) / y
    return ret
  }
}

export class ModOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if(args.length != 2) {
      throw new Error (`('/', num1, num2)\n 引数は2つ。`)
    }
    let ret: number = null
    ret = Number(engine.eval(args[0])) % Number(engine.eval(args[1]))
    return ret
  }
}
