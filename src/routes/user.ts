import {Router} from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user';
import { checkJwt } from '../middleware/session';
const router = Router();

/*
* http://localhost:3000/user 
*/
router.get('/',checkJwt, getUsers);

/*
* http://localhost:3000/user/661cb8abbd50dc8a18fc19de
*/
router.get('/:id',checkJwt, getUser);

/*
* http://localhost:3000/user/
*/
router.put('/:id',checkJwt, updateUser);

/*
* http://localhost:3000/user/661cb8abbd50dc8a18fc19de
*/
router.delete('/:id',checkJwt, deleteUser);

export {router};