import {
  initTable,
  create as dbCreate,
  getById as dbGetById,
  getAll as dbGetAll
} from './db';

const tableName = `vehicle`;
initTable(tableName);

export const create = ({ make, model }) => {
  // must have valid props
  if (make && model) {
    return dbCreate(tableName, { make, model });
  }

  return null;
};

export const getById = (id) => {
  return dbGetById(tableName, id);
};

export const getAll = () => {
  return dbGetAll(tableName);
};
