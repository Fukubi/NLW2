import { Request, Response, json } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import db from '../database/connection';

let a: any;

interface User {
    id: number,
    email: string,
    password: string
}

export default class LoginController {
    async login(request: Request, response: Response) {
        const { email, password } = request.query;

        const users = await db('login').where({
            email
        }).select('*')

        console.log(users)

        if (!password) {
            return response.send('');
        }

        await users.map(async (user: User) => {
            const checkPassword = await bcrypt.compareSync(password, user.password)

            if (checkPassword) {
                const key = jwt.sign({ id: user.id }, "encryptingPassword")
                /* console.log(key)
                console.log(jwt.decode(key)) */
                return response.status(200).send(key)
            }
        })

        return response.send(null);


        /*a = jwt.sign({ id: 10 }, "secret", {
            expiresIn: 86400
        });
        console.log(a)
        return response.send(jwt.decode(a));*/
    }

    async register(request: Request, response: Response) {
        const { name, secondname, email, password } = request.body;

        const trx = await db.transaction();

        try {
            const encryptedPassword = await bcrypt.hash(password, 10);

            await trx('login').insert({
                name,
                secondname,
                email,
                password: encryptedPassword
            })

            await trx.commit();

            return response.status(201).send();
        } catch (err) {
            console.log(err);

            await trx.rollback();

            return response.status(400).send({
                error: "Unexpected error while creating new user"
            });
        }
    }
}
