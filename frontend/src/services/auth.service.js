import { postData } from "./fetch.service";

const BASE_URL = "http://localhost:8080/api/v1/auth";

export async function signUp(requestBody) {
  const { data, error } = await postData(`${BASE_URL}/sign-up`, requestBody);

  if (error) {
    throw new Error(error || "Sign up failed. Please try again!");
  }

  return data;
}

export async function signIn(requestBody) {
  const { data, error } = await postData(`${BASE_URL}/sign-in`, requestBody);

  if (error) {
    throw new Error(error || "Sign in failed. Please try again!");
  }

  return data;
}
