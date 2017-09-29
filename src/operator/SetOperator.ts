import { Engine } from '../Engine'
import { IOperator } from './IOperator'

export class SetOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    let value: Object = engine.eval(args[1])
    engine.variables[<string> engine.eval(args[0])] = value
    return value
  }
}
