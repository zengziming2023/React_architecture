#!/bin/bash

# Step 1: 构建 React 项目
echo "Building React project..."
npm run build

# Step 2: 拷贝构建产物到 Nginx 目录
NGINX_BUILD_PATH="/opt/homebrew/etc/nginx/html/react_architecture"
echo "Deploying to Nginx..."
rm -rf ${NGINX_BUILD_PATH/*}
cp -r dist/* $NGINX_BUILD_PATH/

# Step 3: 重启 Nginx 服务
echo "Restarting Nginx..."
#sudo systemctl restart nginx
brew services restart nginx

echo "localhost:3001/"

echo "Deployment completed!"