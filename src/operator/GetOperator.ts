import { Engine } from '../Engine'
import { IOperator } from './IOperator'

export class GetOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    return engine.variables[<string> engine.eval(args[0])]
  }
}
