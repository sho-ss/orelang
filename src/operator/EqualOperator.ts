import { Engine } from '../Engine'
import { IOperator } from './IOperator'

export class EqualOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    return engine.eval(args[0]) === engine.eval(args[1])
  }
}
