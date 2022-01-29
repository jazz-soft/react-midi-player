# react-midi-player

[![npm](https://img.shields.io/npm/v/react-midi-player.svg)](https://www.npmjs.com/package/react-midi-player)
[![npm](https://img.shields.io/npm/dt/react-midi-player.svg)](https://www.npmjs.com/package/react-midi-player)
[![build](https://github.com/jazz-soft/react-midi-player/actions/workflows/build.yml/badge.svg)](https://github.com/jazz-soft/react-midi-player/actions)
[![Coverage Status](https://coveralls.io/repos/github/jazz-soft/react-midi-player/badge.svg?branch=main)](https://coveralls.io/github/jazz-soft/react-midi-player?branch=main)

## React MIDI Player Component

[![midi-player](https://jazz-soft.github.io/img/midi-player.png)](https://jazz-soft.github.io/test/react-midi-player.html)

Playing MIDI files via *Web Audio* and *Web MIDI*

You can use this module as it is,
or you can use it as a template for your own MIDI components.

New feature/improvement requests and other feedback are welcome at https://github.com/jazz-soft/react-midi-player/discussions

## Usage
### npm
```
npm install react-midi-player --save
```
### or include directly in HTML
```
// after including the React/Babel scripts
<script src="https://cdn.jsdelivr.net/npm/jzz"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-synth-tiny"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-midi-smf"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-gui-player"></script>
<script src="https://cdn.jsdelivr.net/npm/react-midi-player"></script>
```

## Example

```js
import React from 'react';
import ReactDOM from 'react-dom';
import MidiPlayer from 'react-midi-player';

var _data=atob('\
TVRoZAAAAAYAAQADAGRNVHJrAAAAGgD/AwtMaXR0bGUgTGFtZQD/UQMKLCsA/y8ATVRyawAAAPMA/wMG\
THlyaWNzAP8BGEBUTWFyeSBXYXMgQSBMaXR0bGUgTGFtZWT/AQNcTWFL/wEDcnkgGf8BBHdhcyAy/wEC\
YSAy/wEDbGl0Mv8BBHRsZSAy/wEFbGFtZSxk/wEEL0xpdDL/AQR0bGUgMv8BBWxhbWUsZP8BBC9MaXQy\
/wEEdGxlIDL/AQVsYW1lLGT/AQMvTWFL/wEDcnkgGf8BBHdhcyAy/wECYSAy/wEDbGl0Mv8BBHRsZSAy\
/wEFbGFtZSwy/wEDL0EgMv8BA2xpdDL/AQR0bGUgMv8BBWxhbWUgMv8BBHdhcyAy/wEEc2hlIQD/LwBN\
VHJrAAAA8gD/AwVNdXNpYwDAC2SQQH9LgEBAAJA+fxmAPkAAkDx/MoA8QACQPn8ygD5AAJBAfzKAQEAA\
kEB/MoBAQACQQH9agEBACpA+fzKAPkAAkD5/MoA+QACQPn9agD5ACpBAfzKAQEAAkEN/MoBDQACQQ39a\
gENACpBAf0uAQEAAkD5/GYA+QACQPH8ygDxAAJA+fzKAPkAAkEB/MoBAQACQQH8ygEBAAJBAfzKAQEAZ\
kEB/GYBAQACQPn8ygD5AAJA+fzKAPkAAkEB/MoBAQACQPn8ygD5AAJA8f2RAZABDZABIf1qAPEAAQEAA\
Q0AASEAK/y8A');

ReactDOM.render(<MidiPlayer data={_data} />, document.getElementById('player1'));
// or
ReactDOM.render(<MidiPlayer src='test.mid' />, document.getElementById('player2'));
// be aware of the CORS-related issues when testing a local html file
```

## Attributes
- `src` -- MIDI file URL
- `data` -- MIDI file data; can be `String`, `ArrayBuffer`, or `Uint8Array`
- `loop` -- number of times to repeat, or `true` for the infinite loop
- `autoplay` -- if `true`, playback starts immediately
- `onPlay` -- function to call when the `play` button is clicked
- `onStop` -- function to call when the `stop` button is clicked
- `onPause` -- function to call when the `pause` button is clicked
- `onResume` -- function to call when the playback is resumed
- `onEnd` -- function to call when the end of the MIDI file is reached

## See also:
https://github.com/jazz-soft/JZZ-gui-Player  
https://github.com/jazz-soft/polymer-midi-player

