echo 'product conatiner list'
set -x
docker exec -i product ls -al
set +x

echo 'copy shared directory'
set -x
docker exec -i product cp -rf /shared/* /app
set +x

echo 'npm cache verify'
set -x
set +x

echo 'npm install'
set -x
docker exec -i product npm --prefix /app install /app
set +x

echo 'pm2 delete and start'
set -x
docker exec -i product pm2 delete -s develop || :
docker exec -i product pm2 start /app/bin/www --name product
set +x