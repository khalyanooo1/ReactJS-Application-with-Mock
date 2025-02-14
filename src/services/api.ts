import axios from "axios";
import { Item } from "../types"; 

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addItem = async (newItem: Omit<Item, "id">): Promise<Item> => {
  const response = await axios.post(API_URL, newItem);
  return response.data;        // JSONPlaceholder will generate an ID
};


export const updateItem = async (id: number, updatedItem: Item): Promise<Item> => {
  const response = await axios.put(`${API_URL}/${id}`, updatedItem);
  return response.data;
};

export const deleteItem = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
