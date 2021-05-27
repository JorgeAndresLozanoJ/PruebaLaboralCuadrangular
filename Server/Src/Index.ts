import express, {Application} from 'express';

import indexRoutes from './routes/IndexRoutes';
import teamsRoutes from './routes/TeamRoutes';
import morgan from 'morgan';
import cors from 'cors';
class Server {
    public app: Application;

    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    config(): void{
        this.app.set('port', process.env.PORT  || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/teams',teamsRoutes);
    }
    start(): void {
        this.app.listen(this.app.get('port'),()=>{
            console.log('El server esta en el puerto' , this.app.get('port'));
        });

    }
}

const server = new Server();
server.start();