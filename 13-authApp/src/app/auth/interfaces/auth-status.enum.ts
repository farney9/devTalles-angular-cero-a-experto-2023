export enum AuthStatus {
  Checking = 'checking',
  Authenticated = 'authenticated',
  Unauthenticated = 'unauthenticated'
}

export const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
