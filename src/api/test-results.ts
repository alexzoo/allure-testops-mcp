import type { AllureApiClient } from "../client.js";

type QueryValue = string | number | boolean | Array<string | number | boolean>;
type QueryParams = Record<string, QueryValue | undefined>;

export function listTestResults(
  client: AllureApiClient,
  launchId: number,
  query: QueryParams,
): Promise<unknown> {
  return client.get("/api/rs/testresult", {
    launchId,
    ...query,
  });
}

export function searchTestResults(
  client: AllureApiClient,
  projectId: number,
  rql: string,
  query: QueryParams,
): Promise<unknown> {
  return client.get("/api/rs/testresult/__search", {
    projectId,
    rql,
    ...query,
  });
}

export function getTestResult(client: AllureApiClient, id: number): Promise<unknown> {
  return client.get(`/api/rs/testresult/${id}`);
}

export function createTestResult(
  client: AllureApiClient,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.post("/api/rs/testresult", payload);
}

export function updateTestResult(
  client: AllureApiClient,
  id: number,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.patch(`/api/rs/testresult/${id}`, payload);
}

export function getTestResultHistory(
  client: AllureApiClient,
  id: number,
  query: QueryParams,
): Promise<unknown> {
  return client.get(`/api/rs/testresult/${id}/history`, query);
}

export function assignTestResult(
  client: AllureApiClient,
  id: number,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.post(`/api/rs/testresult/${id}/assign`, payload);
}

export function resolveTestResult(
  client: AllureApiClient,
  id: number,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.post(`/api/rs/testresult/${id}/resolve`, payload);
}
