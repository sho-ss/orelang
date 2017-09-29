import { IExpression } from './expression/IExpression'
import { ImmediateValue } from './expression/ImmediateValue'
import { CallOperator } from './expression/CallOperator'

import { IOperator } from './operator/IOperator'
import { AddOperator } from './operator/AddOperator'
import { EqualOperator } from './operator/EqualOperator'
import { GetOperator } from './operator/GetOperator'
import { MultiplyOperator } from './operator/MultiplyOperator'
import { SetOperator } from './operator/SetOperator'
import { StepOperator } from './operator/StepOperator'
import { UntilOperator } from './operator/UntilOperator'
import { IfOperator } from './operator/IfOperator'

/**
 * script engine of orelang
 */
export class Engine{
  /**
   * @param operators 利用可能なoperatorを格納する
   *
   * @param variables 変数の値を格納する
   */
  public operators: {[key: string]: IOperator} = {}
  public variables: {[key: string]: Object} = {}

  constructor() {
    this.operators['+'] = new AddOperator()
    this.operators['*'] = new MultiplyOperator()
    this.operators['='] = new EqualOperator()
    this.operators['set'] = new SetOperator()
    this.operators['get'] = new GetOperator()
    this.operators['until'] = new UntilOperator()
    this.operators['step'] = new StepOperator()
    this.operators['if'] = new IfOperator()

  }

  public eval(script: Object): Object {
    return this.getExpression(script).eval(this)
  }

  /**
   * リスト([+ 3 5]みたいな感じ)ならばオペレーター呼び出し(CallOperator)オブジェクトを生成
   * そうでない(3とか5とか)なら即値の式オブジェクトを生成
   *
   * CallOperatorオブジェクトを生成する際は、リストの第１要素をキーとして、operatorsからオペレータを取り出し、
   * さらに残りの要素を引数として渡す。
   *
   * ImmediateValueオブジェクトを生成する際は、値をそのまま渡す。
   */
  private getExpression(script: Object): IExpression {
    if (script instanceof Array) {
      let scriptArray: Array<any> = script
      return new CallOperator(
        this.operators[scriptArray[0]],
        scriptArray.slice(1))
    }
    else {
      return new ImmediateValue(script)
    }
  }
}
