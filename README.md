# vue3-webpack-template
### 安装依赖
```shell
npm install
```

### 开始使用
开发环境
```shell
npm run dev
```
测试环境打包部署（http post 数据加密不启用、js zip压缩不启用）
```shell
npm run build:test
```
生产环境打包部署（http post 数据加密启用、js zip压缩不启用）
```shell
npm run build:prod
```
### 功能
1. 环境隔离
2. 单元测试(支持mock ajax、vue3、esModule)
3. decorator实现（装饰器）
4. Function AOP实现
5. ajax post 报文体数据AES对称加密实现
6. 开箱即用的axios最简封装
7. 支持常用资源模块化（jpg、png、jepg、csv、tsv、xml、yaml、json、json5）
