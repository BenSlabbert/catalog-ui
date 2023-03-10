#!make

.PHONY: install
install:
	yarn

.PHONY: buildDev
buildDev: cleanBuild install
	yarn run buildDev

.PHONY: buildDocker
buildDocker: cleanBuild install
	yarn run buildDocker

.PHONY: dockerBuild
dockerBuild: buildDocker
	docker build . -t catalog-ui

.PHONY: dockerRun
dockerRun:
	docker container run --rm -it -p 3000:3000 catalog-ui

.PHONY: run
run: fmt
	BASE_URL="" BROWSER=firefox yarn run dev

.PHONY: fmt
fmt:
	yarn run format

.PHONY: lint
lint:
	yarn run lint

.PHONY: check
check:
	yarn run check

.PHONY: clean
clean:
	rm -rf node_modules

.PHONY: cleanBuild
cleanBuild:
	rm -rf build
