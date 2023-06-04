generate: supergraph.graphql

dev: deps supergraph.graphql
	$(HOME)/.rover/bin/rover dev --router-config=supergraph.yaml

deps: 
	@which $(HOME)/.rover/bin/rover >/dev/null || curl -sSL https://rover.apollo.dev/nix/latest | sh

.PHONY: supergraph.graphql
supergraph.graphql:
	$(HOME)/.rover/bin/rover supergraph compose --config supergraph.yaml --output supergraph.graphql

