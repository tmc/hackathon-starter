# A common Makefile for managing the docker-compose files

# Build and tag the images
build:
	docker-compose build

# Run the containers
up: build
	docker-compose up

# Run the containers
up-b: build
	docker-compose up

# Stop the running containers
down:
	docker-compose down

# Follow the logs for each container
logs:
	docker-compose logs -f --tail 100

# Stop and remove all containers and images
clean:
	docker-compose down --rmi all -v

# Alias for clean
reset: clean

.PHONY: build up up-b down logs clean reset
