import { create as createPerson, getAll as getAllPersons } from './person';
import { create as createVehicle, getAll as getAllVehicles } from './vehicle';

const person = createPerson({ fname: 'joe', lname: 'bob' });
const personTwo = createPerson({ fname: 'sue', lname: 'q' });

console.log(person);
console.log(personTwo);

const allPersons = getAllPersons();

console.log(allPersons);

const vehicle = createVehicle({ make: 'toyota', model: 'highlander' });
const vehicleTwo = createVehicle({ make: 'mazda', model: 'cx-5' });

console.log(vehicle);
console.log(vehicleTwo);

const allVehicles = getAllVehicles();

console.log(allVehicles);
