import { Engine } from '../Engine'
import { IOperator } from './IOperator'


/**
 * (if cond trueExpr falseExpr)
 */
export class IfOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if(args.length !== 3) {
      throw new Error('引数は、3つじゃないといけない')
    }
    let ret: Object = null
    if(<boolean> engine.eval(args[0])) {
      ret = engine.eval(args[1])
    } else {
      ret = engine.eval(args[2])
    }
    return ret
  }
}
