#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy to github pages'

# 部署到 https://<USERNAME>.github.io/<REPO>
git remote add origin https://github.com/luwang9/ECE568-stockforecaster-deployment.git
git push -f origin master
cd -