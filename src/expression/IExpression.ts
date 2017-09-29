import { Engine } from '../engine'

export interface IExpression {
  eval(engine: Engine): Object
}
