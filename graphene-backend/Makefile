.PHONY: generate
generate: schema.graphql

venv: requirements.in
	python3 -m venv venv
	venv/bin/pip install wheel pip-tools pipdeptree
	venv/bin/pip-compile --resolver=backtracking requirements.in > requirements.txt
	venv/bin/pip install -r requirements.txt
	venv/bin/pipdeptree > .pip-deps.txt


schema.graphql: venv app/schema.py
	venv/bin/python3 app/schema.py > schema.graphql
