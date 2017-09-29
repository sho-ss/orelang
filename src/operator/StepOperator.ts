import { Engine } from '../Engine'
import { IOperator } from './IOperator'

export class StepOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    let ret: Object
    args.forEach(arg => {
      ret = engine.eval(arg)
    })
    return ret
  }
}
