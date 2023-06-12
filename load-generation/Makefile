.PHONY: run
run: run-basic-load-generation ## Run load generation

.PHONY: run-basic-load-generation
run-basic-load-generation: deps ## Run basic load generation
	@echo "Running basic load generation"
	@k6 run --vus 2 --duration 600s basic-load-generation.js

.PHONY: run-browser-load-generation
run-browser-load-generation: deps browser-deps ## Run browser load generation
	@echo "Running browser load generation"
	@K6_BROWSER_ENABLED=true k6 run --address="" basic-web-interaction.js
	@convert -delay 5 -loop 0 .001-* animation.gif

.PHONY: run-browser-load-generation-via-chrome-ws
run-browser-load-generation-via-chrome-ws: browser-deps ## Run browser load generation
	./run-web-interaction-tests

.PHONY: deps
deps: ## Install dependencies
	@command -v k6 >/dev/null 2>&1 || { echo >&2 "k6 is required but not installed. Attempting to install..."; brew install k6; }

.PHONY: browser-deps
browser-deps: ## Install browser-related dependencies
	@command -v convert >/dev/null 2>&1 || { echo >&2 "ImageMagick is required but not installed. Attempting to install..."; brew install imagemagick; }
	@command -v jq >/dev/null 2>&1 || { echo >&2 "jq is required but not installed. Attempting to install..."; brew install jq; }
