import { Engine } from '../Engine'
import { IOperator } from './IOperator'

export class UntilOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    let ret: Object
    while(!<boolean> engine.eval(args[0])) {
      ret = engine.eval(args[1])
    }
    return ret
  }
}
