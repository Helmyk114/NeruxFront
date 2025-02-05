import { fetchUsers } from '../infrastructure/http/ApiClient';
import { Cliente } from '../domain/user';

export async function getUsers(): Promise<Cliente[]> {
  
  return await fetchUsers();
}