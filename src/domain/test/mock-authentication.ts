import { AuthenticationParams } from "domain/usecases/authentication";

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'email.teste@teste.com.br',
  password: '1234'
})