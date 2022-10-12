'use strict';
(function(global, factory) {
  /* istanbul ignore next */
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  }
  else {
    if (!global) global = window;
    global.MidiPlayer = factory();
  }
})(this, function() {

  var R, J;
  /* istanbul ignore else */
  if (typeof React != 'undefined') {
    R = React;
    J = JZZ;
  }
  else {
    R = require('react');
    J = require('jzz');
    require('jzz-midi-smf')(J);
    require('jzz-gui-player')(J);
    require('jzz-synth-tiny')(J);
  }
  /* istanbul ignore else */
  if (J.synth.Tiny) J.synth.Tiny.register('Web Audio');

  /* istanbul ignore next */
  function noop() {}

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
        if (props.autoplay) player.play();
      }
      catch(e) { console.log('Cannot load data:', e.message); }
    }
    function setSrc(src) {
      if (mySrc == src) return;
      mySrc = src;
      if (!mySrc) return;
      try {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          /* istanbul ignore else */
          if (this.readyState == 4) {
            if (this.status == 200) {
              try {
                player.load(new J.MIDI.SMF(xhttp.response));
                if (props.autoplay) player.play();
              }
              catch (e) {
                console.log('Cannot load "' + mySrc + '":', e.message);
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
        catch (e) {/**/}
        xhttp.overrideMimeType('text/plain; charset=x-user-defined');
        xhttp.open('GET', mySrc, true);
        xhttp.send();
      }
      catch (e) {
        /* istanbul ignore next */
        console.log('XMLHttpRequest error', e);
      }
    }
    function setLoop(loop) {
      player.loop(loop || 0);
    }
    function setAutoplay(autoplay) {
      if (autoplay) player.play();
    }

    R.useEffect(() => {
      player = J.gui.Player(ref.current);
      setSrc(props.src);
      setData(props.data);
      setLoop(props.loop);
      setAutoplay(props.autoplay);
      return /* istanbul ignore next */ () => { if (ref.current) ref.current.innerHTML = ''; };
    });
    R.useEffect(() => { setSrc(props.src); setAutoplay(props.autoplay); }, [props.src]);
    R.useEffect(() => { setData(props.data); setAutoplay(props.autoplay); }, [props.data]);
    R.useEffect(() => { setLoop(props.loop); }, [props.loop]);
    R.useEffect(() => { setAutoplay(props.autoplay); }, [props.autoplay]);
    R.useEffect(() => { player.onPlay = props.onPlay || noop; }, [props.onPlay]);
    R.useEffect(() => { player.onStop = props.onStop || noop; }, [props.onStop]);
    R.useEffect(() => { player.onPause = props.onPause || noop; }, [props.onPause]);
    R.useEffect(() => { player.onResume = props.onResume || noop; }, [props.onResume]);
    R.useEffect(() => { player.onEnd = props.onEnd || noop; }, [props.onEnd]);
    return R.createElement('span', { ref: ref });
  }

  return MidiPlayer;
});
