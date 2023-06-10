# React-Frontend Makefile
APP_NAME=react-frontend

# Commands
install:
	npm i

clean:
	rm -rf build

run:
	npm start

watch-codegen:
	npm run graphql-codegen-watch

docker-build:
	docker build -t $(APP_NAME) .

docker-run:
	docker run -p 3000:3000 $(APP_NAME)

docker-stop:
	docker stop $(APP_NAME)

.PHONY: install clean run docker-build docker-run docker-stop
