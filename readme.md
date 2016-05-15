## Build status

| [Linux][lin-link] |
| :---------------: |
| ![lin-badge]      |

[lin-badge]: https://travis-ci.org/nfactorial/shootem_test.svg?branch=master "Travis build status"
[lin-link]:  https://travis-ci.org/nfactorial/shootem_test "Travis build status"

Shootem Test
============
Game code to test PlayCanvas out. Implements a simple shooter.

To run the script server, you will need node.js (https://nodejs.org/)
installed.

```
git clone https://github.com/nfactorial/card_test
npm install
npm run server
```

To run the unit tests you must also install mocha:

```
npm install -g mocha
```

Once mocha is installed, the unit tests can be run with:

```
npm run test
```
