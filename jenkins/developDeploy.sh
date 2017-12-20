echo 'develop conatiner list'
set -x
docker exec -i develop ls -al
set +x

echo 'copy shared directory'
set -x
docker exec -i develop cp -rf /shared/* /app
set +x

echo 'npm cache verify'
set -x
set +x

echo 'npm install'
set -x
docker exec -i develop npm --prefix /app install /app
set +x

echo 'pm2 delete and start'
set -x
docker exec -i develop pm2 delete -s develop || :
docker exec -i develop pm2 start /app/bin/www --name develop
set +x