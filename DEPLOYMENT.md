# GitHub Pages 部署指南

本指南将帮助你使用 GitHub Pages 免费部署你的 Next.js 简历网站。

## 🚀 快速开始

### 1. 运行部署脚本
```bash
chmod +x deploy-gh-pages.sh
./deploy-gh-pages.sh
```

### 2. 在GitHub上启用Pages
1. 进入你的GitHub仓库页面
2. 点击 **Settings** → **Pages**
3. 在 **Source** 部分选择 **Deploy from a branch**
4. 在 **Branch** 下拉菜单中选择 **dist**
5. 点击 **Save**

### 3. 访问你的网站
部署完成后，你的网站将可通过以下地址访问：
```
https://[你的用户名].github.io/[仓库名]
```

## 📋 手动部署步骤

如果你想手动部署，可以按照以下步骤操作：

### 1. 构建项目
```bash
npm install
npm run build
npx next export
```

### 2. 创建dist分支
```bash
# 如果dist分支已存在，先删除
git branch -D dist 2>/dev/null || true

# 创建新的dist分支
git checkout --orphan dist
```

### 3. 准备部署文件
```bash
# 清理所有文件
git rm -rf .

# 复制构建产物
cp -r out/* ./
rm -rf out

# 创建.gitignore
echo "node_modules/" > .gitignore
echo ".next/" >> .gitignore
echo "*.log" >> .gitignore

# 提交并推送
git add .
git commit -m "Deploy to GitHub Pages"
git push origin dist --force

# 切换回主分支
git checkout main
```

## ⚙️ 配置说明

### 自定义域名（可选）
如果你想使用自定义域名：
1. 在 `public/` 目录下创建 `CNAME` 文件
2. 在文件中写入你的域名，例如：`yourdomain.com`
3. 重新运行部署脚本

### 环境变量
确保你的项目不依赖运行时环境变量，因为GitHub Pages只支持静态网站。

## 🔧 故障排除

### 部署后页面空白
- 检查 `next.config.mjs` 中的 `basePath` 和 `assetPrefix` 设置
- 确保 `output: 'export'` 已配置
- 检查浏览器控制台是否有404错误

### 样式丢失
- 确认 `tailwind.config.ts` 中的 `content` 路径正确
- 检查构建后的CSS文件是否正确加载

### 图片不显示
- 使用相对路径引用图片
- 确保图片在 `public/` 目录中
- 检查图片路径是否正确

## 📱 更新网站

每次更新网站内容后，只需重新运行：
```bash
./deploy-gh-pages.sh
```

脚本会自动构建最新版本并部署到GitHub Pages。

## 🎯 最佳实践

1. **定期备份**：确保你的主分支代码已推送到GitHub
2. **测试构建**：在部署前先在本地运行 `npm run build` 确保无错误
3. **使用HTTPS**：GitHub Pages自动提供HTTPS，确保所有资源使用HTTPS链接
4. **优化性能**：使用Next.js的图片优化和代码分割功能

## 📞 获取帮助

如果遇到问题：
1. 检查GitHub仓库的 **Actions** 标签页查看部署日志
2. 查看 [GitHub Pages文档](https://docs.github.com/en/pages)
3. 确保仓库设置为公开（私有仓库的GitHub Pages有使用限制）