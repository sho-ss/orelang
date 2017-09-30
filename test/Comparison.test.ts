import 'mocha'
import * as assert from 'power-assert'
import { Engine } from '../src/Engine'


describe('ComparisonOperators Test', () => {
  let engine: Engine = new Engine()

  describe('> operator test', () => {
    it('should return True', () => {
      let x = engine.eval(['>', 3, 1])
      assert.equal(x, true)
    })

    it('should return True', () => {
      let x = engine.eval(['>', -1, -3])
      assert.equal(x, true)
    })

    it('should return false', () => {
      let x = engine.eval(['>', 1, 3])
      assert.equal(x, false)
    })

    it('should return false', () => {
      let x = engine.eval(['>', -3, -1])
      assert.equal(x, false)
    })
  })

  describe('< operator test', () => {
    it('should return True', () => {
      let x = engine.eval(['<', 1, 3])
      assert.equal(x, true)
    })

    it('should return True', () => {
      let x = engine.eval(['<', -3, -1])
      assert.equal(x, true)
    })

    it('should return false', () => {
      let x = engine.eval(['<', 3, 1])
      assert.equal(x, false)
    })

    it('should return false', () => {
      let x = engine.eval(['<', -1, -3])
      assert.equal(x, false)
    })
  })

  describe('>= operator test', () => {
    it('should return True', () => {
      let x = engine.eval(['>=', 3, 1])
      assert.equal(x, true)
    })

    it('should return True', () => {
      let x = engine.eval(['>=', -1, -3])
      assert.equal(x, true)
    })

    it('should return True', () => {
      let x = engine.eval(['>=', 1, 1])
      assert.equal(x, true)
    })

    it('should return True', () => {
      let x = engine.eval(['>=', -1, -1])
      assert.equal(x, true)
    })

    it('should return false', () => {
      let x = engine.eval(['>=', 1, 3])
      assert.equal(x, false)
    })

    it('should return false', () => {
      let x = engine.eval(['>=', -3, -1])
      assert.equal(x, false)
    })
  })

  describe('<= operator test', () => {
    it('should return True', () => {
      let x = engine.eval(['<=', 1, 3])
      assert.equal(x, true)
    })

    it('should return True', () => {
      let x = engine.eval(['<=', -3, -1])
      assert.equal(x, true)
    })

    it('should return True', () => {
      let x = engine.eval(['<=', 1, 1])
      assert.equal(x, true)
    })

    it('should return True', () => {
      let x = engine.eval(['<=', -1, -1])
      assert.equal(x, true)
    })

    it('should return false', () => {
      let x = engine.eval(['<=', 3, 1])
      assert.equal(x, false)
    })

    it('should return false', () => {
      let x = engine.eval(['<=', -1, -3])
      assert.equal(x, false)
    })
  })





  it('should return True', () => {
    let x = engine.eval(['if', ['=', 1, 1], 'true', 'false'])
    assert.equal(x, 'true')
  })

  it('should return false', () => {
    let x = engine.eval(['if', ['=', 2, 1], 'true', 'false'])
    assert.equal(x, 'false')
  })
})
