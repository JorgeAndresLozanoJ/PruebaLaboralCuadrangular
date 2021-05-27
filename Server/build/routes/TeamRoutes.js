"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamsController_1 = require("../controllers/teamsController");
class TeamRouters {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', teamsController_1.teamsController.tabla);
        this.router.get('/:id', teamsController_1.teamsController.veruno);
        this.router.post('/', teamsController_1.teamsController.registro);
        this.router.put('/:id', teamsController_1.teamsController.partidos);
        this.router.delete('/:id', teamsController_1.teamsController.Eliminar);
    }
}
const teamRoutes = new TeamRouters();
exports.default = teamRoutes.router;
