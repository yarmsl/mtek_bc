import { RequestInit } from "next/dist/server/web/spec-extension/request";

import { SERVER_URL } from "./constants";

export const apiGet = async <T>(
  url: string,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(`${SERVER_URL}/api/${url}`, init);
  if (!response.ok) {
    const errObj = await response.json();
    if (Object.hasOwn(errObj, "message")) throw new Error(errObj.message);
    throw new Error(response.statusText);
  }
  return response.json();
};

export const apiPost = async <T, K>(
  url: string,
  payload: K,
  resType: "json" | "text" = "json"
): Promise<T> => {
  const response = await fetch(`${SERVER_URL}/api/${url}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const errObj = await response.json();
    if (Object.hasOwn(errObj, "message")) throw new Error(errObj.message);
    throw new Error(response.statusText);
  }
  return resType === "json" ? response.json() : response;
};
