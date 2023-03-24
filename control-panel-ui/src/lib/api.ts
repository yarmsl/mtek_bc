import { SERVER_URL } from './constants';

export const apiGet = async <T>(url: string, token?: string): Promise<T> => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  const response = await fetch(`${SERVER_URL}/api/${url}`, {
    method: 'GET',
    headers,
  });
  if (!response.ok) {
    const errObj = await response.json();
    if (Object.hasOwn(errObj, 'message')) throw new Error(errObj.message);
    throw new Error(response.statusText);
  }
  return response.json();
};

export const apiPost = async <T, K>(url: string, payload: K, token?: string): Promise<T> => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  const response = await fetch(`${SERVER_URL}/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const errObj = await response.json();
    if (Object.hasOwn(errObj, 'message')) throw new Error(errObj.message);
    throw new Error(response.statusText);
  }
  return await response.json();
};
