# 正点原子在线文档

## 拉取最新文档

```bash
git checkout main
git pull
git submodule foreach 'git checkout main'
git submodule foreach 'git pull'
```

## 安装

```bash
npm install
```

## 本地开发

```bash
npm start
```

默认情况下，浏览器窗口将打开[`http://localhost:3000`](http://localhost:3000/)。

## 构建

```bash
npm build
```

网站的静态内容将在“build/”目录中生成。
