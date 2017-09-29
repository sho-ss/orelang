"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert = require("power-assert");
const Engine_1 = require("../src/Engine");
describe('IfOperator Test', () => {
    let engine = new Engine_1.Engine();
    it('should return True', () => {
        let x = engine.eval(['if', ['=', 1, 1], 'true', 'false']);
        assert.equal(x, 'true');
    });
    it('should return false', () => {
        let x = engine.eval(['if', ['=', 2, 1], 'true', 'false']);
        assert.equal(x, 'false');
    });
});
