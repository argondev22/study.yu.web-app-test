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
	@if [ -z "$(F)" ]; then \
		echo "Usage: make run F=./src/path/to/F.ts"; \
		echo "Example: make run F=./src/hello.ts"; \
		echo "Example: make run F=./src/section2/example.ts"; \
		exit 1; \
	fi
	@if [ -f "$(F)" ]; then \
		echo "Running $(F) in Docker container..."; \
		F_PATH=$$(echo $(F) | sed 's|^./src/||'); \
		docker compose exec src ts-node $$F_PATH; \
	else \
		echo "F $(F) not found"; \
		exit 1; \
	fi

down:
	@docker compose down

clean:
	@docker compose down
	@docker system prune -f
	@docker volume prune -f
