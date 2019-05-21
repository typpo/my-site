#!/bin/bash -e

NODE_ENV=production pm2 start --name='ianww.com' ../lib/server/server.js
