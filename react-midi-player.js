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
    function setData(data) {
      if (myData == data) return;
      myData = data;
      if (!myData) return;
      try {
        player.load(new J.MIDI.SMF(myData));
      }
      catch(e) { console.log(e); }
    }
    R.useEffect(() => {
      player = J.gui.Player(ref.current);
      setData(props.data);
      return () => { ref.current.innerHTML = ''; };
    });
    R.useEffect(() => { setData(props.data); }, [props.data]);
    return R.createElement('span', { ref: ref });
  }

  return MidiPlayer;
});
