#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git config user.name "Javier Arciniegas"
git config user.email "arciniegas.ortiz818@gmail.com"

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/arciortiz818/citasweb.git master:production

cd -