## MultiPython
A multi-user sound board with Monty Python Doom2 sounds. Extremely silly.

Inspired by a multi-user [digital lamp](https://boingboing.net/2022/03/08/dont-you-dare-turn-off-this-digital-lamp.html) project, I slapped together a multi-user sound board, where anyone on the page can play sounds from a 1994 WAD file to Monty Pythonize your Doom2 experience.</p>

Written in Python, the circle is complete. Using the Flask framework with websockets for live action.

## Requirements
* Raspberry Pi. I used a PI3, but any should do.

## Running
```
pip install -r requirements.txt

./multipython.py
```
That will open a server on port 8080.

## But seriously...
With the basic app, a piano keyboard could be shared by many users, however this isn't a replacement for MIDI, and I'm sure that timing the notes on all browsers would be complicated, especially with network lag. Have fun!
