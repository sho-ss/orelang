"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert = require("power-assert");
const Engine_1 = require("../src/Engine");
describe('Logic Operators test', () => {
    let engine = new Engine_1.Engine();
    describe('! operator test', () => {
        it('1 != 1: false', () => {
            let x = engine.eval(['!', ['=', 1, 1]]);
            assert.equal(x, false);
        });
        it('2 != 1: true', () => {
            let x = engine.eval(['!', ['=', 2, 1]]);
            assert.equal(x, true);
        });
    });
    describe('|| operator test', () => {
        it('1 < 2 || 2 > 1: true', () => {
            let x = engine.eval(['||', ['<', 1, 2], ['>', 2, 1]]);
            assert.equal(x, true);
        });
        it('2 < 3 || 2 > 4: true', () => {
            let x = engine.eval(['||', ['<', 2, 3], ['>', 2, 4]]);
            assert.equal(x, true);
        });
        it('2 < 1 || 3 < 1: false', () => {
            let x = engine.eval(['||', ['<', 2, 1], ['<', 3, 1]]);
            assert.equal(x, false);
        });
    });
    describe('&& operator test', () => {
        it('1 < 2 && 2 > 1: true', () => {
            let x = engine.eval(['&&', ['<', 1, 2], ['>', 2, 1]]);
            assert.equal(x, true);
        });
        it('2 < 3 && 2 > 4: false', () => {
            let x = engine.eval(['&&', ['<', 2, 3], ['>', 2, 4]]);
            assert.equal(x, false);
        });
        it('2 < 1 && 3 < 1: false', () => {
            let x = engine.eval(['&&', ['<', 2, 1], ['<', 3, 1]]);
            assert.equal(x, false);
        });
    });
});
