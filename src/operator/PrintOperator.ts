import { Engine } from '../Engine'
import { IOperator } from './IOperator'

export class PrintOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    args.forEach(arg => {
      process.stdout.write(<string> engine.eval(arg))
    })
    process.stdout.write('\n')
    return 0
  }
}
