#!/bin/bash

pushd `dirname $0`
cd "$(git rev-parse --show-toplevel)"
mkdir -p /var/log/mysite

echo "starting @ `date`"

NODE_ENV=production
npm run prod 2>> /var/log/mysite/node.err.log 1>> /var/log/mysite/node.out.log &

for job in `jobs -p`
do
echo $job
  wait $job
done

popd
