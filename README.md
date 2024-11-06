# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

```
// 安装指定版本的node
nvm install 16.19.0

// 查看已安装的node.js 版本
nvm ls

// 切换指定版本
nvm use 16.19.0

// 切换到最新版本
nvm use node 

// 切换到系统版本
nmv use system

// 查看node.js版本
node -v
```

```angular2html
// 打包
yarn build
或者 
npm run build

// 本地测试部署
npx serve -s dist -l 3003

// 使用Nginx 来部署
brew install nginx  // 安装nginx

brew services start nginx   // 启动 nginx

brew services stop nginx    // 停止 nginx

brew services restart nginx     // 重启
// /opt/homebrew/etc/nginx/nginx.conf  --- 修改配置文件，增加端口号监听，及资源配置
// 资源统一 放在 html 目录下

sudo nginx -t  # 检查配置文件
sudo nginx -s reload  # 重新加载配置

// 配置完成后
chmod +x react_deploy.sh
./react_deploy_nginx.sh   // 会自动打包 + copy 文件到nginx 指定目标下，并重启nginx.

// 访问 
localhost:8080/         // 查看nginx 是否正常启动

localhost:3001/

```

```

docker build -t react_docker_img .

docker run -p 3001:3001 react_docker_img

localhost:3001/

docker ps       // 查看 container-id

docker exec -it <container-id> /bin/sh  // 进入容器
docker exec -it 69f0c92f117b /bin/sh 

cat /etc/nginx/nginx.conf       // 查看配置文件 

docker stop <container-id>     // 停止窗口
docker restart <container-id>   // 重启窗口
```
