"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Engine_1 = require("./Engine");
let engine = new Engine_1.Engine();
let x = engine.eval(['if', ['=', 2, 1], 'true', 'false']);
console.log(x);
