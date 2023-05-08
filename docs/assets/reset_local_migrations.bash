rm -R -f ./migrations &&
rm -R -f ./src/instance &&
pipenv run init &&
pipenv run migrate &&
pipenv run upgrade