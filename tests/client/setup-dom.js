const { JSDOM } = require('jsdom')

const dom = new JSDOM('<body></body>')
dom.window.localStorage = {}

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
