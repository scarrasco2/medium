export interface Register {
  email: string;
  password: string;
  username: string;
}
export interface RegisterRequest {
  user: Register;
}
