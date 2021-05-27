import {Request, Response} from 'express';
import pool from '../Database';
class IndexController{
    public async tabla (req:Request, res:Response) {
        const teams = await pool.query('SELECT * FROM Equipos');
        res.json(teams);
    }
    index (req:Request, res:Response) {

     res.send('El indice')

    }
}

export const indexController = new IndexController();