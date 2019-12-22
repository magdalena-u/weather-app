dev-dockerfile = -f docker-compose.yml -f docker-compose.dev.yml

install-frontend-deps:
	npm --prefix ./frontend install

build:
	docker-compose $(dev-dockerfile) build
	make dev

dev:
	docker-compose $(dev-dockerfile) up