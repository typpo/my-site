#!/bin/bash -e

pushd $(dirname $0) &>/dev/null

cd ..
NODE_ENV=production pm2 start --name='ianww.com' lib/server/server.js

popd &>/dev/null
