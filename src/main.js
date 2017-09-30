"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Engine_1 = require("./Engine");
let engine = new Engine_1.Engine();
let x = engine.eval(['print', 'this', 'message', 'is', 'test', 'message.']);
console.log(x);
