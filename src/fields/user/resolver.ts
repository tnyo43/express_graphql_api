import db from '~db/models';
import {
  IMutationResolver,
  IQueryResolver,
  resolveMaybe
} from '~/fields/utils';

export const fetchUser: IQueryResolver['fetchUser'] = async (_parent, { id }) =>
  await db.User.findOne({ where: { id } });

export const fetchUserList: IQueryResolver['fetchUserList'] = async (
  _parent,
  { name }
) => {
  console.log(name);
  return await db.User.findAll({
    where: name ? { name } : undefined
  });
};

export const updateUser: IMutationResolver['updateUser'] = async (
  _parent,
  { id, name, email },
  _context,
  _info
) => {
  await db.User.update(
    { name: resolveMaybe(name), email: resolveMaybe(email) },
    { where: { id } }
  );
  return fetchUser(_parent, { id }, _context, _info);
};

export const createUser: IMutationResolver['createUser'] = async (
  _parent,
  { name, email }
) => await db.User.create({ name, email });
