import { Engine } from '../Engine'
import { IOperator } from './IOperator'

export class MultiplyOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    let ret = 1
    args.forEach(arg => {
      let v: Object = engine.eval(arg)
      ret *= Number(v)
    })
    return ret
  }
}
