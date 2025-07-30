#!/bin/bash

# GitHub Pages部署脚本
# 用于将Next.js项目部署到GitHub Pages

set -e

echo "🚀 开始部署到GitHub Pages..."

# 检查是否在主分支
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ] && [ "$current_branch" != "master" ]; then
    echo "⚠️  当前不在main/master分支，建议切换到主分支后再部署"
    read -p "是否继续？(y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 检查是否有未提交的更改
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  有未提交的更改，请先提交或暂存这些更改"
    exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目（新的静态导出方式）
echo "🔨 构建项目..."
npm run build

# 检查next.config.js是否配置了output: 'export'
if ! grep -q "output.*export" next.config.js 2>/dev/null; then
    echo "⚠️  检测到next.config.js未配置output: 'export'"
    echo "正在自动添加配置..."
    
    if [ -f "next.config.js" ]; then
        # 如果文件存在，添加output配置
        sed -i.bak '/module.exports = {/a\  output: "export",' next.config.js
    else
        # 如果文件不存在，创建配置文件
        cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
EOF
    fi
    echo "✅ next.config.js已更新"
fi

# 重新构建以应用配置
echo "🔨 重新构建项目..."
npm run build

# 创建dist分支（如果不存在）
if git show-ref --verify --quiet refs/heads/dist; then
    echo "🔄 切换到dist分支..."
    git checkout dist
else
    echo "🌱 创建dist分支..."
    git checkout --orphan dist
fi

# 清理dist分支内容
echo "🧹 清理旧文件..."
git rm -rf . || true
rm -rf .next node_modules .gitignore *.json *.mjs *.ts *.js *.md

# 复制构建产物（新的输出目录是out）
echo "📋 复制构建产物..."
cp -r out/* ./
rm -rf out

# 创建.gitignore
echo "node_modules/" > .gitignore
echo ".next/" >> .gitignore
echo "*.log" >> .gitignore

# 添加CNAME文件（如果需要自定义域名）
# echo "your-domain.com" > CNAME

# 提交更改
echo "💾 提交更改..."
git add .
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

# 推送到远程
echo "📤 推送到远程..."
git push origin dist --force

# 切换回主分支
echo "🔙 切换回主分支..."
git checkout "$current_branch"

echo "✅ 部署完成！"
echo "📍 访问地址：https://$(git config --get remote.origin.url | sed 's/.*://' | sed 's/\\.git$//' | sed 's/.*github.com\\///').github.io/resume"
echo ""
echo "💡 如果这是首次部署，请在GitHub仓库的Settings → Pages中设置Source为'Deploy from a branch'，并选择'dist'分支"