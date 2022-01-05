'use strict';
(function(global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  }
  else {
    if (!global) global = window;
    global.MidiPlayer = factory();
  }
})(this, function() {

  var R, J;
  if (typeof React == 'undefined') {
    R = require('react');
    J = require('jzz');
    require('jzz-midi-smf')(J);
    require('jzz-gui-player')(J);
    require('jzz-synth-tiny')(J);
  }
  else {
    R = React;
    J = JZZ;
  }
  if (J.synth.Tiny) J.synth.Tiny.register('Web Audio');

  function MidiPlayer(props) {
    const ref = R.useRef(null);
    var player;
    var myData;
    var mySrc;
    function setData(data) {
      if (myData == data) return;
      myData = data;
      if (!myData) return;
      try {
        player.load(new J.MIDI.SMF(myData));
      }
      catch(e) { console.log(e); }
    }
    function setSrc(src) {
      if (mySrc == src) return;
      mySrc = src;
      if (!mySrc) return;

      try {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              var r, i;
              var data = '';
              r = xhttp.response;
              if (r instanceof ArrayBuffer) {
                r = new Uint8Array(r);
                for (i = 0; i < r.length; i++) data += String.fromCharCode(r[i]);
              }
              else {
                r = xhttp.responseText;
                for (i = 0; i < r.length; i++) data += String.fromCharCode(r.charCodeAt(i) & 0xff);
              }
              try {
                player.load(new J.MIDI.SMF(data));
              }
              catch (e) {
                console.log('Cannot load "' + mySrc + '":', e);
              }
            }
            else {
              console.log('Cannot load "' + mySrc + '": XMLHttpRequest error');
            }
          }
        };
        try {
          xhttp.responseType = 'arraybuffer';
        }
        catch (e) {}
        xhttp.overrideMimeType('text/plain; charset=x-user-defined');
        xhttp.open('GET', mySrc, true);
        xhttp.send();
      }
      catch (e) {
        console.log('XMLHttpRequest error', e);
      }
    }

    R.useEffect(() => {
      player = J.gui.Player(ref.current);
      setSrc(props.src);
      setData(props.data);
      return () => { ref.current.innerHTML = ''; };
    });
    R.useEffect(() => { setSrc(props.src); }, [props.src]);
    R.useEffect(() => { setData(props.data); }, [props.data]);
    return R.createElement('span', { ref: ref });
  }

  return MidiPlayer;
});
