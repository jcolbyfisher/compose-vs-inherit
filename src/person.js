import {
  initTable,
  create as dbCreate,
  getById as dbGetById,
  getAll as dbGetAll
} from './db';

const tableName = `person`;
initTable(tableName);

export const create = ({ fname, lname }) => {
  // must have valid props
  if (fname && lname) {
    return dbCreate(tableName, { fname, lname });
  }

  return null;
};

export const getById = (id) => {
  return dbGetById(tableName, id);
};

export const getAll = () => {
  return dbGetAll(tableName);
};
