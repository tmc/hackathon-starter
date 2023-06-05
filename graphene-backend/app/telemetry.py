import os
from opentelemetry import trace
from opentelemetry import metrics
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.exporter.otlp.proto.grpc.metric_exporter import OTLPMetricExporter
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.sdk.metrics.export import PeriodicExportingMetricReader
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

# Service name is required for most backends
resource = Resource(attributes={
    SERVICE_NAME: "flask-backend",
})

otlp_endpoint = os.environ.get("OTEL_EXPORTER_OTLP_ENDPOINT", "localhost:4317")
reader = PeriodicExportingMetricReader(
    OTLPMetricExporter(endpoint=otlp_endpoint),
)
metrics_provider = MeterProvider(resource=resource, metric_readers=[reader])
metrics.set_meter_provider(metrics_provider)

provider = TracerProvider(resource=resource)
processor = BatchSpanProcessor(OTLPSpanExporter(endpoint=otlp_endpoint))
provider.add_span_processor(processor)
trace.set_tracer_provider(provider)
