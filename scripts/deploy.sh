#!/bin/bash

ssh ianww.com "cd my-site && git pull && npm run build && touch lib/server/server.js"

echo "Need to manually restart for now :/"
