import db from "../../../db/models";

export const fetchUser = async (args: { id: number }) =>
  await db.User.findOne({ where: { id: args.id } });

export const fetchUserList = async (args: { name: string | undefined }) =>
  await db.User.findAll({ where: args.name ? { name: args.name } : undefined });

export const updateUser = async (args: {
  id: number;
  name: string | undefined;
  email: string | undefined;
}) => {
  await db.User.update(
    { name: args.name, email: args.email },
    { where: { id: args.id } }
  );
  return fetchUser(args);
};

export const createUser = async (args: { name: string; email: string }) =>
  await db.User.create({ name: args.name, email: args.email });
