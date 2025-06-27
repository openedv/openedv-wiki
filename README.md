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

## Step 3. 本地开发

```bash
npm run start
```

默认情况下，浏览器窗口将打开[`http://localhost:3000`](http://localhost:3000/)。

## Step 4. 构建

```bash
npm run build
```

网站的静态内容将在“build/”目录中生成。

## 添加新版卡

### Step 1. 新建板卡文档仓库

以 [`在线文档板卡模板仓库`](https://github.com/openedv/openedv-wiki-boards-template.git) 为模板新建一个仓库。

### Step 2. 添加 Secret

添加一个名为 `GH_TOKEN` 的 `Secret`，其内容为 `openedv` 的 `Token` —— `openedv-wiki`

### Step 3. 添加板卡文档仓库到本仓库

```bash
git submodule add <repository> <path>
```

并修改 [sidebars.js](./sidebars.js) 和 [custom.css](./src/css/custom.css)。
