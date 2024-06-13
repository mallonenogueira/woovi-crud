import { User } from "../user-model";

type DeleteUserParam = {
  id: string;
};

export function deleteUser({ id }: DeleteUserParam) {
  return User.findByIdAndDelete(id);
}
