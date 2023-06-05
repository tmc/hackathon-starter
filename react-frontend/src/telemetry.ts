import { CompositePropagator, W3CBaggagePropagator, W3CTraceContextPropagator } from '@opentelemetry/core';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { Resource, detectResources, browserDetector } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';

const PUBLIC_OTEL_SERVICE_NAME = 'react-frontend';
const PUBLIC_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT = '';

const FrontendTracer = async (collectorString: string) => {
  const { ZoneContextManager } = await import('@opentelemetry/context-zone');

  let resource = new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: PUBLIC_OTEL_SERVICE_NAME,
  });

  // TODO: browser detector?
  const detectedResources = await detectResources({detectors:[browserDetector]});
  resource=resource.merge(detectedResources);
  const provider = new WebTracerProvider({
    resource
  });


  provider.addSpanProcessor(
    new BatchSpanProcessor(
      new OTLPTraceExporter({
        url: PUBLIC_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT || collectorString || 'http://localhost:4318/v1/traces',
      })
    )
  );

  const contextManager = new ZoneContextManager();

  provider.register({
    contextManager,
    propagator: new CompositePropagator({
      propagators: [new W3CBaggagePropagator(), new W3CTraceContextPropagator()],
    }),
  });

  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [
      getWebAutoInstrumentations({
        '@opentelemetry/instrumentation-fetch': {
          propagateTraceHeaderCorsUrls: /.*/,
          clearTimingResources: true,
          applyCustomAttributesOnSpan(span) {
            span.setAttribute('app.synthetic_request', 'false');
          },
        },
        '@opentelemetry/instrumentation-document-load': {},
        '@opentelemetry/instrumentation-user-interaction': {},
        '@opentelemetry/instrumentation-xml-http-request': {},
      }),
    ],
  });
};

export default FrontendTracer;
