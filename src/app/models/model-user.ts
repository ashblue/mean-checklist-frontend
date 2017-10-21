export class ModelUser {
  name: string;
  email: string;
  password: string;

  toString(): string {
    return JSON.stringify(this);
  }
}
