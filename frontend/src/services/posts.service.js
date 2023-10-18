import { BASE_URL } from "../utils/constants";
import { getData, postFormData } from "./fetch.service";

const API_URL = `${BASE_URL}/v1/posts`;

export async function createPost({ text, image }) {
  const formData = new FormData();
  if (text) {
    formData.append("text", text);
  }

  if (image) {
    formData.append("image", image);
  }

  const { data, error } = await postFormData(API_URL, formData);

  if (error) {
    throw new Error(error || "Sign up failed. Please try again!");
  }

  return data;
}

export async function getPosts() {
  return await getData(API_URL);
}
