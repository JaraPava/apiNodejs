import express from "express";
import { getAllUsers, getUserById } from "../services/userServices";
// import { getAllProducts } from "../services/saleServices"; 
const router =express.Router();

router.get('/', async (_req, res)=>{
    console.log('Getting all users');
    const allUsers = await getAllUsers();
    return (allUsers != (undefined || null))
        ?res.send(allUsers)
        :res.sendStatus(404);
});

router.get('/:id', async (req, res) =>{
    console.log('Get user by id');

    const userFound = await getUserById(req.params.id);
    return (userFound != (undefined||null))
        ? res.send(userFound)
        : res.sendStatus(404);
})

router.post('/', async (_req, res)=>{
    const allUsers = await getUserById('3');

    console.log(allUsers);
    res.send('Registering new user');
})

export default router;