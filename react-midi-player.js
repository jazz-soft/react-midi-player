'use strict';

function MidiPlayer(props) {
  const ref = React.useRef(null);
  var player;
  React.useEffect(() => {
    player = JZZ.gui.Player(ref.current);
    return () => { ref.current.innerHTML = ''; };
  });
  return React.createElement('span', { ref: ref });
}
