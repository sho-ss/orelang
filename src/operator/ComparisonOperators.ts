import { Engine } from '../Engine'
import { IOperator } from './IOperator'

/**
 * 負数の判定って、メモリ上での話になってくるのかなぁ
 */
/**
 * (> left right)
 */
export class LtOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if (args.length != 2) {
      throw new Error ('引数は、2つです。')
    }
    let ret: Object = null
    if(engine.eval(args[0]) > engine.eval(args[1])) {
      ret = true
    }
    else {
      ret = false
    }
    return ret
  }
}

/**
 * (< left right)
 */
export class StOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if (args.length != 2) {
      throw new Error ('引数は、2つです。')
    }
    let ret: Object = null
    if(engine.eval(args[0]) < engine.eval(args[1])) {
      ret = true
    }
    else {
      ret = false
    }
    return ret
  }
}

/**
 * (>= left right)
 */
export class LeOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if (args.length != 2) {
      throw new Error ('引数は、2つです。')
    }
    let ret: Object = null
    if (engine.eval(args[0]) >= engine.eval(args[1])) {
      ret = true
    }
    else {
      ret = false
    }
    return ret
  }
}

/**
 * (<= left right)
 */
export class SeOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if (args.length != 2) {
      throw new Error ('引数は、2つです。')
    }
    let ret: Object = null
    if (engine.eval(args[0]) <= engine.eval(args[1])) {
      ret = true
    }
    else {
      ret = false
    }
    return ret
  }
}
