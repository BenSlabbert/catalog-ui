#!make

build: clean
	yarn run build

dockerBuild: build
	docker build . -t catalog-ui

run: fmt
	BASE_URL="" BROWSER=opera npm run dev -- --open

fmt:
	yarn run format

clean:
	rm -rf build
