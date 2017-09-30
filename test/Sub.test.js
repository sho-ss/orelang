"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert = require("power-assert");
const Engine_1 = require("../src/Engine");
describe('Sub Operator test', () => {
    let engine = new Engine_1.Engine();
    it('100 - 45 = 55', () => {
        let x = engine.eval(['-', 100, 45]);
        assert.equal(x, 55);
    });
    it('0 - 55 = -55', () => {
        let x = engine.eval(['-', 0, 55]);
        assert.equal(x, -55);
    });
});
