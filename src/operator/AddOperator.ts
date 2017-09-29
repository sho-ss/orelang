import { Engine } from '../Engine'
import { IOperator } from './Ioperator'


/**
 * 加算する
 */
export class AddOperator implements IOperator {
  /**
   * call
   */
  public call(engine: Engine, args: Array<any>): Object {
    let ret = 0
    args.forEach(arg => {
      let v = engine.eval(arg)
      ret += Number(v)
    })
    return ret
  }
}
