import { AUTH_TOKEN_KEY } from "../utils/constants";

export async function postData(url = "", data = {}) {
  const accessToken = localStorage.getItem(AUTH_TOKEN_KEY)?.accessToken;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  if (accessToken) {
    headers.append("Authorization", accessToken);
  }

  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  const responseData = await res.json();

  if (!(res.status / 100 === 2)) {
    return { error: responseData.message || "Failed to post data" };
  }

  return { data: responseData };
}

export async function putData(url = "", data = {}) {}

export async function patchJsonData(url = "", data = {}) {}

export async function patchFormData(url = "", data = {}) {
  const accessToken = JSON.parse(
    localStorage.getItem(AUTH_TOKEN_KEY)
  )?.accessToken;

  const headers = new Headers();

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  const res = await fetch(url, {
    method: "PATCH",
    headers: headers,
    body: data,
  });

  if (res.status === 401 || res.status === 403) {
    return { isUnathorized: true };
  }

  if (!res.ok) {
    return {
      error: data.message || "Failed to fetch data",
    };
  }
}

export async function getData(url = "") {
  const accessToken = JSON.parse(
    localStorage.getItem(AUTH_TOKEN_KEY)
  )?.accessToken;

  const headers = new Headers();

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  const res = await fetch(url, {
    headers: headers,
  });

  if (res.status === 401 || res.status === 403) {
    return { isUnathorized: true };
  }

  const data = await res.json();

  if (!res.ok) {
    return {
      error: data.message || "Failed to fetch data",
    };
  }

  return { data };
}

export async function deleteData(url = "") {}
