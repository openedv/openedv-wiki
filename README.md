# 正点原子在线文档

## Step 1. 拉取最新文档

```bash
git checkout main
git pull
git submodule foreach 'git checkout main'
git submodule foreach 'git pull'
```

## Step 2. 安装

```bash
npm install
```

## Step 3 本地开发

```bash
npm run start
```

默认情况下，浏览器窗口将打开[`http://localhost:3000`](http://localhost:3000/)。

## Step 3 构建

```bash
npm run build
```

网站的静态内容将在“build/”目录中生成。
