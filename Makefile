.PHONY: init build up down logs clean install run

# プロジェクト初期化
init:
	@chmod +x ./bin/init-project.sh
	@./bin/init-project.sh
	@make setup

# TypeScript実行用のターゲット（Docker経由）
%:
	@if [ -f "src/$*.ts" ]; then \
		echo "Running src/$*.ts in Docker container..."; \
		docker compose exec typescript ts-node $*.ts; \
	else \
		echo "File src/$*.ts not found"; \
		exit 1; \
	fi

# Docker環境のセットアップ
setup:
	@echo "Setting up Docker environment..."
	@docker compose build
	@docker compose up -d
	@echo "Docker environment is ready!"

# Docker環境の停止
down:
	@docker compose down

# Docker環境の再起動
restart:
	@docker compose restart

# Docker環境のログ表示
logs:
	@docker compose logs -f typescript

# Docker環境の状態確認
status:
	@docker compose ps

# TypeScriptファイルのビルド（Docker経由）
build-ts:
	@docker compose exec typescript npm run build

# 依存関係のインストール（Docker経由）
install:
	@docker compose exec typescript npm install

# コンテナ内でシェルを開く
shell:
	@docker compose exec typescript sh

# クリーンアップ
clean:
	@docker compose down
	@docker system prune -f
	@docker volume prune -f
