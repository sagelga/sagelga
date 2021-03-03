#!/usr/bin/env sh
## Manually deploying script

# abort on errors
set -e

# build + make sure dependencies is installed
yarn
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'sagelga.com' > CNAME

git init
git add -A
git commit -m 'Website AutoDeploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:sagelga/sagelga.github.io.git master

cd -
