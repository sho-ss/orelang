import { Engine } from '../Engine'
import { IOperator } from './IOperator'

export class SubtractionOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    let ret: number = Number(engine.eval(args[0]))

    args.slice(1).forEach(arg => {
      let v: Object = engine.eval(arg)
      ret -= Number(v)
    })
    return ret
  }
}
