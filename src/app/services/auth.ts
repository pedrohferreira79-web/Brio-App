import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async signUp(email: string, senha: string) {
    const { data, error } = await this.supabase.auth.signUp({ email, password: senha });
    if (error) throw error;
    return data;
  }

  async signIn(email: string, senha: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({ email, password: senha });
    if (error) throw error;
    return data;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  async getCurrentUser(): Promise<User | null> {
    const { data } = await this.supabase.auth.getUser();
    return data.user;
  }
}