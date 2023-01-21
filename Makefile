#!make

.PHONY: build
build: cleanBuild
	yarn
	yarn run build

.PHONY: dockerBuild
dockerBuild: build
	docker build . -t catalog-ui

.PHONY: dockerRun
dockerRun:
	docker container run --rm -it -p 3000:3000 catalog-ui

.PHONY: run
run: fmt
	BASE_URL="" BROWSER=opera yarn run dev --open

.PHONY: fmt
fmt:
	yarn run format

.PHONY: clean
clean:
	rm -rf node_modules

.PHONY: cleanBuild
cleanBuild:
	rm -rf build
