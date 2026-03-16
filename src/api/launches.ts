import type { AllureApiClient } from "../client.js";

type QueryValue = string | number | boolean | Array<string | number | boolean>;
type QueryParams = Record<string, QueryValue | undefined>;

export function listLaunches(
  client: AllureApiClient,
  projectId: number,
  query: QueryParams,
): Promise<unknown> {
  return client.get("/api/rs/launch", {
    projectId,
    ...query,
  });
}

export function searchLaunches(
  client: AllureApiClient,
  projectId: number,
  rql: string,
  query: QueryParams,
): Promise<unknown> {
  return client.get("/api/rs/launch/__search", {
    projectId,
    rql,
    ...query,
  });
}

export function getLaunch(client: AllureApiClient, id: number): Promise<unknown> {
  return client.get(`/api/rs/launch/${id}`);
}

export function createLaunch(
  client: AllureApiClient,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.post("/api/rs/launch", payload);
}

export function updateLaunch(
  client: AllureApiClient,
  id: number,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.patch(`/api/rs/launch/${id}`, payload);
}

export function deleteLaunch(client: AllureApiClient, id: number): Promise<unknown> {
  return client.delete(`/api/rs/launch/${id}`);
}

export function closeLaunch(client: AllureApiClient, id: number): Promise<unknown> {
  return client.post(`/api/rs/launch/${id}/close`);
}

export function reopenLaunch(client: AllureApiClient, id: number): Promise<unknown> {
  return client.post(`/api/rs/launch/${id}/reopen`);
}

export function getLaunchStatistic(client: AllureApiClient, id: number): Promise<unknown> {
  return client.get(`/api/rs/launch/${id}/statistic`);
}

export function getLaunchProgress(client: AllureApiClient, id: number): Promise<unknown> {
  return client.get(`/api/rs/launch/${id}/progress`);
}

export function addTestCasesToLaunch(
  client: AllureApiClient,
  id: number,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.post(`/api/rs/launch/${id}/testcase/add`, payload);
}

export function addTestPlanToLaunch(
  client: AllureApiClient,
  id: number,
  payload: Record<string, unknown>,
): Promise<unknown> {
  return client.post(`/api/rs/launch/${id}/testplan/add`, payload);
}
