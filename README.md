# react-midi-player

[![npm](https://img.shields.io/npm/v/react-midi-player.svg)](https://www.npmjs.com/package/react-midi-player)
[![npm](https://img.shields.io/npm/dt/react-midi-player.svg)](https://www.npmjs.com/package/react-midi-player)

## React MIDI Player Component

![midi-player](https://jazz-soft.github.io/img/midi-player.png)

Playing MIDI files via *Web Audio* and *Web MIDI*

## Usage

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

ReactDOM.render(<MidiPlayer data={_data} />, document.getElementById('player'));
// or
ReactDOM.render(<MidiPlayer src='test.mid' />, document.getElementById('player2'));
// be aware of the CORS-related issues when testing from a local html file
```

## See also:
https://github.com/jazz-soft/JZZ-gui-Player  
https://github.com/jazz-soft/polymer-midi-player

