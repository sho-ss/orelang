import { Engine } from './Engine'

let engine: Engine = new Engine()

let x = engine.eval(['if', ['=', 2, 1], 'true', 'false'])
console.log(x)
/*
let y = engine.eval(
  ['step',
    ['set', 'i', 10],
    ['set', 'sum', 0],
    ['until', ['=', ['get', 'i'], 0], [
      'step',
      ['set', 'sum', ['+', ['get', 'sum'], ['get', 'i']]],
      ['set', 'i', ['+', ['get', 'i'], -1]]
    ]],
    ['get', 'sum']
]
)
*/
/*
let y = engine.eval(
  ['step',
    ['set', 'i', 1],
    ['set', 'i', ['+', ['get', 'i'], 3]],
    ['get', 'i']
  ]
)
*/
