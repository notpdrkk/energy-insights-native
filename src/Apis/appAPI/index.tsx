import axios from "axios";
import { User } from "../../types/appliance";
import { Electro } from "../../types/appliance";

const BASE_URL = "https://6927530026e7e41498fddf4b.mockapi.io";

export const api = axios.create({
  baseURL: BASE_URL,
});

export async function getUser(userId: string): Promise<User> {
  const { data } = await api.get<User>(`/users/${userId}`);
  return data;
}

export async function updateUser(
  userId: string,
  updates: Partial<User>
): Promise<User> {
  const { data } = await api.put<User>(`/users/${userId}`, updates);
  return data;
}

export async function getElectroById(id: string): Promise<Electro> {
  const { data } = await api.get<Electro>(`/electro/${id}`);
  return data;
}

export async function getAllElectros(): Promise<Electro[]> {
  const { data } = await api.get<Electro[]>("/electro");
  return data;
}

export async function getElectrosFromUser(userId: string): Promise<Electro[]> {
  const user = await getUser(userId);

  const ids = (user.appliancesIds || []).map((id) => String(id));

  const calls = ids.map((id) => getElectroById(id));

  return await Promise.all(calls);
}

export async function addElectroToUser(
  userId: string,
  eletro: Omit<Electro, "id">
): Promise<Electro> {
  const { data: newElectro } = await api.post<Electro>("/electro", eletro);

  const user = await getUser(userId);

  const updatedIds = [
    ...(user.appliancesIds || []).map((id) => String(id)),
    String(newElectro.id),
  ];

  await updateUser(userId, { appliancesIds: updatedIds });

  return newElectro;
}

export async function updateElectro(
  id: string,
  updates: Partial<Electro>
): Promise<Electro> {
  const { data } = await api.put<Electro>(`/electro/${id}`, updates);
  return data;
}

export async function removeElectroFromUser(
  userId: string,
  electroId: string
): Promise<void> {
  const user = await getUser(userId);

  const filtered = user.appliancesIds.filter((id) => id !== electroId);

  await updateUser(userId, { appliancesIds: filtered });

  await api.delete(`/electro/${electroId}`);
}
