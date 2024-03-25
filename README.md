polish language version
Rozpoczynając projekt utworzyłem katalog o nazwie "homepage" w nim znalazły się folder:

src, w którym znajdują się pliki: index.html, index.js oraz style.css
pliki: changeLog.txt, package.json, README.md, webpack.json
aby uruchomić serwer lokalny trzeba w termial wpisać: npx webpack serve (uruchania serwer)

aby uruchomić stronę w przeglądarce (na lokalnym serwerze podczas pracy) trzeba wpisać: localhost:8080

npm run dev - kompiluje do osobnego katalogu (folder dist)

nie wiem, czy to zgodne z zasadami, ale musiałem dwa pliki z folderu dist przenieść do głównego katalogu, aby można było opublikować stronę. zrobiłem tak, bo nie mam na razie nie wiem jak to prawidłowo zrobić.

strony, z których korzystałem: https://webpack.js.org/ https://www.npmjs.com/

w katalogu src znajduje się wersja strony, którą można edytować. w katalogu dist znajduje się wersja strony, która posiada tylko dwa pliki: index.html oraz main.bundle.js

plików z folderu dist nie zalecam edytować, do tego są pliki z folderu src.

english language version
When starting the project I created a directory called "homepage" it contains the folder:

src, which contains the files: index.html, index.js and style.css
files: changeLog.txt, package.json, README.md, webpack.json
to run a local server you need to type in termial: npx webpack serve (running server)

to run the website in the browser (on the local server while working) you have to enter: localhost: 8080

npm run dev - compiles to a separate directory (dist directory)

websites I have used: https://webpack.js.org/ https://www.npmjs.com/

there is an editable version of the page in the src directory. there is a version of the page in the dist directory that has only two files: index.html and main.bundle.js

I do not recommend editing files from the dist folder, there are also files from the src folder.

don't know if that's okay, but i had to move two files from dist to root to publish the page. I did so because I do not yet know how to do it properly.