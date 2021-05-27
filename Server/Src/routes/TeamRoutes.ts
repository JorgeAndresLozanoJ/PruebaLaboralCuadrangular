import {Router} from 'express';

import{teamsController} from '../controllers/teamsController';

class TeamRouters {

    public router : Router = Router ();   
     
    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/' , teamsController.tabla);
        this.router.get('/:id', teamsController.veruno);
        this.router.post('/', teamsController.registro);
        this.router.put('/:id', teamsController.partidos);
        this.router.delete('/:id', teamsController.Eliminar);
    }

}

const teamRoutes = new TeamRouters();
export default  teamRoutes.router;