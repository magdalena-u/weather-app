dev-dockerfile = -f docker-compose.yml -f docker-compose.dev.yml

build:
	sudo docker-compose $(dev-dockerfile) build
	make dev

dev:
	sudo docker-compose $(dev-dockerfile) up