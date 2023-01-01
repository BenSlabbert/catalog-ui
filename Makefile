#!make

build: clean
	yarn run build

dockerBuild: build
	docker build . -t catalog-ui

dockerRun:
	docker container run --rm -it -p 3000:3000 catalog-ui

run: fmt
	BASE_URL="" BROWSER=opera npm run dev -- --open

fmt:
	yarn run format

clean:
	rm -rf build
