# print checkout branch & workspace diretory
echo 'start checkout'
echo 'Building ${BRANCH_NAME}'
echo "Current workspace : ${workspace}"

echo 'remove shared diretory'
set -x
rm -rf /shared/*
set +x

echo 'copy diretory'
set -x
cp -rf ./* /shared
set +x

echo 'copy config folder'
set -x
cp -rf /config /shared
set +x