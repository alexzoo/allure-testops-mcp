import type { AllureApiClient } from "../client.js";

type QueryValue = string | number | boolean | Array<string | number | boolean>;
type QueryParams = Record<string, QueryValue | undefined>;

export function listTestPlans(
  client: AllureApiClient,
  projectId: number,
  query: QueryParams,
): Promise<unknown> {
  return client.get("/api/rs/testplan", {
    projectId,
    ...query,
  });
}

export function getTestPlan(client: AllureApiClient, id: number): Promise<unknown> {
  return client.get(`/api/rs/testplan/${id}`);
}

export function createTestPlan(
  client: AllureApiClient,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.post("/api/rs/testplan", payload);
}

export function updateTestPlan(
  client: AllureApiClient,
  id: number,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.patch(`/api/rs/testplan/${id}`, payload);
}

export function deleteTestPlan(client: AllureApiClient, id: number): Promise<unknown> {
  return client.delete(`/api/rs/testplan/${id}`);
}

export function runTestPlan(
  client: AllureApiClient,
  id: number,
  payload: Record<string, unknown> | undefined,
): Promise<unknown> {
  return client.post(`/api/rs/testplan/${id}/run`, payload);
}
