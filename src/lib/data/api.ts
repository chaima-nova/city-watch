import { queryOptions } from "@tanstack/react-query";
import type {
  CityMemoryEvent, CityObservation, DataSource, Discovery, EvidenceItem, SystemConfig, WarningSignal,
} from "./types";

/**
 * Data access layer. Every screen reads through these query options.
 * No backend is connected yet, so each fetcher returns an honest empty result.
 * Replace the bodies with real API / repository calls — UI stays unchanged.
 */
const API_BASE = import.meta.env['VITE_ECOGUARDIAN_API'] as string | undefined;

async function get<T>(path: string, empty: T): Promise<T> {
  if (!API_BASE) return empty;
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return (await res.json()) as T;
}

export const configQuery = queryOptions({
  queryKey: ["config"],
  queryFn: () => get<SystemConfig>("/config", { connected: false }),
});
export const sourcesQuery = queryOptions({
  queryKey: ["sources"], queryFn: () => get<DataSource[]>("/sources", []),
});
export const observationsQuery = queryOptions({
  queryKey: ["observations"], queryFn: () => get<CityObservation[]>("/observations", []),
});
export const discoveriesQuery = queryOptions({
  queryKey: ["discoveries"], queryFn: () => get<Discovery[]>("/discoveries", []),
});
export const warningsQuery = queryOptions({
  queryKey: ["warnings"], queryFn: () => get<WarningSignal[]>("/warnings", []),
});
export const evidenceQuery = queryOptions({
  queryKey: ["evidence"], queryFn: () => get<EvidenceItem[]>("/evidence", []),
});
export const memoryQuery = queryOptions({
  queryKey: ["memory"], queryFn: () => get<CityMemoryEvent[]>("/memory", []),
});
