// Typed domain models. Backend / repository data must conform to these.

export type EpistemicState = "observed" | "discovered" | "inferred" | "hypothesized" | "validated";

export type DataSourceKind =
  | "earth-observation"
  | "environmental"
  | "infrastructure"
  | "mobility"
  | "weather"
  | "city-events"
  | "geospatial"
  | "user-provided";

export interface GeoPoint { lat: number; lng: number }

export interface DataSource {
  id: string;
  name: string;
  kind: DataSourceKind;
  status: "connected" | "error" | "disabled";
  lastIngestionAt?: string;
  coverage?: string;
  health?: string;
}

export interface CityArea { id: string; name: string; geometry?: GeoPoint[] }

export interface CityObservation {
  id: string;
  sourceId: string;
  variable: string;
  value?: number | string;
  unit?: string;
  observedAt: string;
  location?: GeoPoint;
  areaId?: string;
  quality?: string;
}

export interface EvidenceItem {
  id: string;
  state: EpistemicState;
  observationIds: string[];
  sourceId?: string;
  time?: string;
  location?: string;
  relationship?: string;
  historicalComparison?: string;
  uncertainty?: string;
  dataQuality?: string;
  summary: string;
}

export interface Discovery {
  id: string;
  title: string;
  state: EpistemicState;
  variables: string[];
  spatial?: string;
  temporal?: string;
  historicalSimilarity?: string;
  evidenceIds: string[];
}

export interface WarningSignal {
  id: string;
  status: "emerging" | "under-review" | "validated" | "dismissed";
  state: EpistemicState;
  areaId?: string;
  detectedAt: string;
  contributingObservationIds: string[];
  historicalComparisons?: string[];
  potentialLeadTime?: string;
  uncertainty?: string;
  missingData?: string[];
  knows: string[];
  doesNotKnow: string[];
  humanValidation?: "pending" | "confirmed" | "rejected";
}

export type MemoryLayer = "environment" | "infrastructure" | "mobility" | "events" | "observations";

export interface HistoricalPeriod { id: string; start: string; end: string; label?: string }

export interface CityMemoryEvent {
  id: string;
  layer: MemoryLayer;
  at: string;
  title: string;
  state: EpistemicState;
  evidenceIds: string[];
}

export interface SystemConfig {
  connected: boolean;
  cityName?: string;
}
