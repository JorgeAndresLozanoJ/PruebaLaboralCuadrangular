import {Request, Response} from 'express';

import pool from '../Database';

class TeamsController{
    public async tabla (req:Request, res:Response) {
        const teams = await pool.query('SELECT * FROM Equipos');
        
        res.json(teams);
    }
    public async registro (req: Request, res: Response):Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO Equipos set ?',[req.body]);
        res.json({message:'Equipo registrado correctamente'});

    }
    public async partidos (req: Request, res: Response):Promise<void>{//update se usa con put
        const {id}=req.params;
        await pool.query('UPDATE Equipos set ? WHERE id = ?', [req.body, id])
        res.json({text:'actualizando victorias derrotas ' + id});
    }
    public async Eliminar(req: Request, res: Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM Equipos WHERE id = ?', [id])
        res.json({text:'Eliminado el equipo' , id});
    }
    public async veruno (req: Request, res: Response): Promise<void>{
        const {id}=req.params;
        const teams = await pool.query('SELECT * FROM Equipos WHERE id = ?', [id]);
        if(teams.length>0){
            console.log(teams);
            res.json(teams);
        
        }
        else{
            console.log({text:'No hay equipos con ese id'});
            res.status(404).json({text:'No hay equipos con ese id'});
        }
    }
}



export const teamsController = new TeamsController();