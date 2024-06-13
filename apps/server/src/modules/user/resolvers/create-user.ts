import { User } from "../user-model";

type CreateUserParam = {
  name: string;
};
export function createUser({ name }: CreateUserParam) {
  return new User({ name }).save();
}
