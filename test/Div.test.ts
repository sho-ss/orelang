import 'mocha'
import * as assert from 'power-assert'
import { Engine } from '../src/Engine'

describe('Div Operators test', () => {
  let engine: Engine = new Engine()

  describe('/ operator test', () => {
    it('5/2 = 2', () => {
      let x = engine.eval(['/', 5, 2])
      assert.equal(x, 2)
    })

    it('10/2 = 5', () => {
      let x = engine.eval(['/', 10, 2])
      assert.equal(x, 5)
    })
  })

  describe('% operator test', () => {
    it('5%2 = 1', () => {
      let x = engine.eval(['%', 5, 2])
      assert.equal(x, 1)
    })

    it('10%2 = 0', () => {
      let x = engine.eval(['%', 10, 2])
      assert.equal(x, 0)
    })
  })
})
