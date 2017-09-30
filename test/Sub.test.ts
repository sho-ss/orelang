import 'mocha'
import * as assert from 'power-assert'
import { Engine } from '../src/Engine'

describe('Sub Operator test', () => {
  let engine: Engine = new Engine()
  it('100 - 45 = 55', () => {
    let x = engine.eval(['-', 100, 45])
    assert.equal(x, 55)
  })

  it('0 - 55 = -55', () => {
    let x = engine.eval(['-', 0, 55])
    assert.equal(x, -55)
  })
})
