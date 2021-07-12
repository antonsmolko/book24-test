install: install-deps

start:
	heroku local -f Procfile.dev

start-frontend:
	npm run serve

build:
	npm run build

deploy:
	git push heroku
