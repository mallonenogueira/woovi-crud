import { User } from "../user-model";

type UpdateUserParam = {
  id: string;
  name: string;
};

export function updateUser({ id, name }: UpdateUserParam) {
  return User.findByIdAndUpdate(id, { name }, { new: true });
}
