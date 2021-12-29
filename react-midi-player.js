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

  function MidiPlayer(props) {
    const ref = React.useRef(null);
    var player;
    React.useEffect(() => {
      player = JZZ.gui.Player(ref.current);
      return () => { ref.current.innerHTML = ''; };
    });
    return React.createElement('span', { ref: ref });
  }

  return MidiPlayer;
});
