
import { User } from '../../src/data/interfaces/users.interface'
import usersTest  from '../../tests/obj/userTest.json';

export const users:User = JSON.parse(JSON.stringify(usersTest));