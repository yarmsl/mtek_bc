import { SERVER_URL } from "./constants";

export const apiGet = async <T>(url: string, revalidate = 3600): Promise<T> => {
  const response = await fetch(`${SERVER_URL}/api/${url}`, {
    next: { revalidate },
  });
  if (!response.ok) {
    const errObj = await response.json();
    if (Object.hasOwn(errObj, "message")) throw new Error(errObj.message);
    throw new Error(response.statusText);
  }
  return response.json();
};
