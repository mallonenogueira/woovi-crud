import { User } from "../user-model";

type UserFilter = {
  id?: string;
};

export function getUsers({ id }: UserFilter) {
  const filters = {} as {
    _id?: string;
  };

  id && (filters._id = id);

  return User.find(filters).exec();
}
