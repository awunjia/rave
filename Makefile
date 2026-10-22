
.PHONY: fresh start start-apps kill-apps reset stop build infra-up db-setup migrate seed urls

# Stop stale web/API processes before rebuilding infrastructure.
fresh:
	$(MAKE) kill-apps
	docker compose down --remove-orphans
	docker compose build --no-cache
	docker compose up -d --wait
	$(MAKE) db-setup
	$(MAKE) start-apps

# Start infrastructure, prepare database, then start applications.
start:
	docker compose up -d --wait
	$(MAKE) db-setup
	$(MAKE) start-apps

# Stop stale processes listening on the app ports.
kill-apps:
	@for port in 3000 4000; do \
		pids=$$(lsof -ti tcp:$$port -sTCP:LISTEN 2>/dev/null || true); \
		if [ -n "$$pids" ]; then \
			echo "Stopping processes listening on port $$port: $$pids"; \
			kill -TERM $$pids 2>/dev/null || true; \
		fi; \
	done
	@sleep 2
	@for port in 3000 4000; do \
		pids=$$(lsof -ti tcp:$$port -sTCP:LISTEN 2>/dev/null || true); \
		if [ -n "$$pids" ]; then \
			echo "Force-stopping remaining processes on port $$port: $$pids"; \
			kill -KILL $$pids 2>/dev/null || true; \
		fi; \
	done

# Start Next.js and NestJS concurrently.
start-apps:
	$(MAKE) kill-apps
	npx concurrently --kill-others --names WEB,API --prefix-colors cyan,green "npm --prefix apps/web run dev" "npm --prefix apps/api run start:dev"

# Generate Prisma Client, apply migrations, and seed default data.
db-setup:
	cd apps/api && npx prisma generate --config prisma7.config.ts
	cd apps/api && npx prisma migrate deploy --config prisma7.config.ts
	cd apps/api && npx prisma db seed --config prisma7.config.ts

# Create and apply a development migration.
# Usage: make migrate NAME=add_new_feature
migrate:
	@test -n "$(NAME)" || (echo "Usage: make migrate NAME=migration_name"; exit 1)
	cd apps/api && npx prisma migrate dev --name $(NAME) --config prisma7.config.ts

# Run only the database seeder.
seed:
	cd apps/api && npx prisma db seed --config prisma7.config.ts

# Rebuild Docker images without starting containers.
build:
	docker compose build

# DESTRUCTIVE: delete Compose-managed volumes and database data.
reset:
	$(MAKE) kill-apps
	docker compose down --remove-orphans --volumes
	docker compose build --no-cache
	docker compose up -d --wait
	$(MAKE) db-setup
	$(MAKE) start-apps

# Start only PostgreSQL and Redis.
infra-up:
	docker compose up -d --wait postgres redis

# Stop application processes and Compose services.
stop:
	$(MAKE) kill-apps
	docker compose down --remove-orphans

# Print local development URLs.
urls:
	@echo "Rave Web:   http://localhost:3000"
	@echo "Rave API:   http://localhost:4000/api/v1/health"
	@echo "Postgres:   localhost:5432"
	@echo "Redis:      localhost:6379"
