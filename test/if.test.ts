import 'mocha'
import * as assert from 'power-assert'
import { Engine } from '../src/Engine'


describe('IfOperator Test', () => {
  let engine: Engine = new Engine()

  it('should return True', () => {
    let x = engine.eval(['if', ['=', 1, 1], 'true', 'false'])
    assert.equal(x, 'true')
  })

  it('should return false', () => {
    let x = engine.eval(['if', ['=', 2, 1], 'true', 'false'])
    assert.equal(x, 'false')
  })
})
