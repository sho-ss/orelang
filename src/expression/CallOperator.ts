import { Engine } from '../engine'
import { IExpression } from './IExpression'
import { IOperator } from '../operator/IOperator'

export class CallOperator implements IExpression {
  private operator: IOperator
  private args: Array<any>

  constructor(operator: IOperator, args: Array<any>) {
    this.operator = operator
    this.args = args
  }

  public eval(engine: Engine): Object {
    return this.operator.call(engine, this.args)
  }
}
