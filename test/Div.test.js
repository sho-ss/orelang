"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert = require("power-assert");
const Engine_1 = require("../src/Engine");
describe('Div Operators test', () => {
    let engine = new Engine_1.Engine();
    describe('/ operator test', () => {
        it('5/2 = 2', () => {
            let x = engine.eval(['/', 5, 2]);
            assert.equal(x, 2);
        });
        it('10/2 = 5', () => {
            let x = engine.eval(['/', 10, 2]);
            assert.equal(x, 5);
        });
    });
    describe('% operator test', () => {
        it('5%2 = 1', () => {
            let x = engine.eval(['%', 5, 2]);
            assert.equal(x, 1);
        });
        it('10%2 = 0', () => {
            let x = engine.eval(['%', 10, 2]);
            assert.equal(x, 0);
        });
    });
});
