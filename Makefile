default: clean card-editor.js


card-editor.js:
	./node_modules/.bin/browserify main.js -o card-editor.js
	./node_modules/.bin/uglifyjs card-editor.js > card-editor.min.js
	mv card-editor.min.js card-editor.js


clean:
	rm -f card-editor.js
