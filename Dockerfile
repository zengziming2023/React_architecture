# 使用轻量级的 Nginx 作为基础镜像
FROM nginx:alpine

# 将构建的静态文件复制到 Nginx 的默认静态文件路径
COPY dist/ /opt/homebrew/etc/nginx/html/react_architecture
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口（可选）
EXPOSE 3001

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]