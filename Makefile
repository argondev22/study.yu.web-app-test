.PHONY: init setup run down clean

init:
	@chmod +x ./bin/init-project.sh
	@./bin/init-project.sh
	@make setup

setup:
	@echo "Setting up Docker environment..."
	@docker compose build
	@docker compose up -d
	@echo "Docker environment is ready!"

run:
	@if [ -z "$(FILE)" ]; then \
		echo "Usage: make run FILE=path/to/file.ts"; \
		echo "Example: make run FILE=hello.ts"; \
		echo "Example: make run FILE=section2/example.ts"; \
		exit 1; \
	fi
	@if [ -f "src/$(FILE)" ]; then \
		echo "Running src/$(FILE) in Docker container..."; \
		docker compose exec src ts-node $(FILE); \
	else \
		echo "File src/$(FILE) not found"; \
		exit 1; \
	fi

down:
	@docker compose down

clean:
	@docker compose down
	@docker system prune -f
	@docker volume prune -f
