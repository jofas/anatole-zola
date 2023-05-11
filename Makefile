watch:
	npx tailwindcss -o static/tailwind.css -i src/style.css --watch

release:
	npx tailwindcss -o static/tailwind.css -i src/style.css --minify
