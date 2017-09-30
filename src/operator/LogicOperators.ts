import { Engine } from '../Engine'
import { IOperator } from './IOperator'

/**
 * ('!', cond)
 */
export class NotOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if(args.length != 1) {
      throw new Error(`("!", cond)\n引数は、1つです。`)
    }
    let ret: Object = null
    if(<boolean> engine.eval(args[0])) {
      ret = false
    }
    else {
      ret = true
    }
    return ret
  }
}

/**
 * ('||', cond1, cond2)
 */
export class OrOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if(args.length != 2) {
      throw new Error (`('||', cond1, cond2)\n引数は、2つです。`)
    }
    let ret: Object = null
    if(<boolean> engine.eval(args[0])) {
      ret = true
    }
    else {
      if(<boolean> engine.eval(args[1])) {
        ret = true
      }
      else {
        ret = false
      }
    }
    return ret
  }
}

export class AndOperator implements IOperator {
  public call(engine: Engine, args: Array<any>): Object {
    if(args.length != 2) {
      throw new Error (`('||', cond1, cond2)\n引数は、2つです。`)
    }
    let ret: Object = null
    if(<boolean> engine.eval(args[0])) {
      if(<boolean> engine.eval(args[1])) {
        ret = true
      }
      else {
        ret = false
      }
    }
    else {
      ret = false
    }
    return ret
  }
}
