.PHONY: clean build run

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)

clean:
	rm -rf node_modules dist .cache
	rm -f yarn.lock
	#yarn cache clean module-a
	#yarn cache clean module-b

local: clean 
	yarn

run:
	webpack-dev-server --mode development --watch --open
	#parcel public/index.html

build: 
	#parcel build public/index.html
	webpack --mode production