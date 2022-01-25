const fs = require('fs');
const path = require('path');
const assert = require('assert');
const JSDOM = require('jsdom').JSDOM;
const WMT =  require('web-midi-test');

var midi_out = new WMT.MidiDst('VIRTUAL MIDI-Out');
midi_out.connect();

global.__coverage__ = {};

function XMLHttpRequest() {
  this.overrideMimeType = function() {};
  this.open = function(dummy, src) { this.src = src; };
  this.send = function() {
    try {
      var data = fs.readFileSync(path.join(__dirname, this.src), 'binary');
      this.status = 200;
      this.response = data;
    }
    catch(e) {
      this.status = 404;
    }
    this.readyState = 4;
    this.onreadystatechange();
  };
}

describe('In browser', function() {
  before(function() {
    return new Promise(function(resolve) {
      JSDOM.fromFile('test/demo.html', {
        resources: 'usable',
        runScripts: 'dangerously',
        beforeParse: function(window) {
          window.__coverage__ = global.__coverage__;
          window.navigator.requestMIDIAccess = WMT.requestMIDIAccess;
          window.XMLHttpRequest = XMLHttpRequest;
        }
      }).then(function(dom) {
        global.window = dom.window;
        setTimeout(resolve, 1500);
      });
    });
  });
  it('it works!', function() {
    assert.equal(0, 0);
  });
  after(function() {
    try {
      global.window.close();
    }
    catch(e) { console.log(e); }
  });
});
