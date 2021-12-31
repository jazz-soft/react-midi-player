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
    require('jzz-gui-player')(J);
  }
  else {
    R = React;
    J = JZZ;
  }

  function MidiPlayer(props) {
    const ref = R.useRef(null);
    var player;
    R.useEffect(() => {
      player = J.gui.Player(ref.current);
      return () => { ref.current.innerHTML = ''; };
    });
    return R.createElement('span', { ref: ref });
  }

  return MidiPlayer;
});
