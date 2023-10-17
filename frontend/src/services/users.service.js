import { BASE_URL } from "../utils/constants";
import { getData, patchFormData } from "./fetch.service";

const API_URL = `${BASE_URL}/v1/users`;

export async function myProfile() {
  return await getData(`${API_URL}/my-profile`);
}

export async function uploadProfileImage(avatar) {
  const formData = new FormData();
  formData.append("avatar", avatar);

  return await patchFormData(`${API_URL}/profile/avatar`, formData);
}
