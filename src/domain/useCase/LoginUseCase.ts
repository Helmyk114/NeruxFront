
import { AuthResponse } from '../entities/User';
import { AuthService } from '../../services/AuthService';

export class LoginUseCase {
  async execute(username: string, password: string): Promise<AuthResponse> {
    const userData = await AuthService.login(username, password);
    return userData;
  }
}