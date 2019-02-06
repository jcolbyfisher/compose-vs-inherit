import cuid from 'cuid';

export class BaseDB {
  constructor(tableName) {
    // NOTE: table name really just for a mental note that this would actually
    //       interface with some db
    this.tableName = tableName;
    this.table = {};
    this.allIds = [];

    this.baseCreate = this.baseCreate.bind(this);
    this.baseGetAll = this.baseGetAll.bind(this);
  }

  baseCreate(props) {
    const id = cuid();
    const person = { id, ...props };

    this.table[id] = person;
    this.allIds.push(id);

    return person;
  }

  update(id, props) {
    this.table[id] = props;
  }

  getById(id) {
    const person = this.table[id];

    if (person) {
      return person;
    } else {
      return null;
    }
  }

  baseGetAll() {
    return this.allIds.map((id) => {
      return this.getById(id);
    });
  }

  deleteById(id) {
    const person = this.getById(id);

    if (person) {
      personTable[id] = null;

      allPersonIds = this.allIds.filter((personId) => {
        return personId !== id;
      });
    }
  }
}
