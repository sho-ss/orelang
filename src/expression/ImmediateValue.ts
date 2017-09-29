import { Engine } from '../Engine'
import { IExpression } from './IExpression'

/**
 * 即値を返すクラス
 */
export class ImmediateValue implements IExpression {
  private value: Object

  constructor(value: Object) {
    this.value = value
  }

  public eval(engine: Engine): Object {
    return this.value
  }
}
