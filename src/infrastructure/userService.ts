import axios from "axios";
import { User } from "../domain/user";

export async function fetchUsers(): Promise<User[]> {
    const response = await axios.get('http://localhost:8014/Nerux/v1'); 
    return response.data;
  }