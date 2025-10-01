FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /src

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# TypeScriptをグローバルにインストール
RUN npm install -g typescript ts-node

