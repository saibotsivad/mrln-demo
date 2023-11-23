/*

The `jsconfig.json` files add some contextual details for IDEs but don't affect
runtime stuff at all.

This file is just to show that the symlinks mean that things in services and
libs work natively in Node.js.

Because that works, you also don't need anything special in e.g. Rollup to make
builds work correctly, and you can import and run as normal code:

*/

import '../app/server/main.js'
