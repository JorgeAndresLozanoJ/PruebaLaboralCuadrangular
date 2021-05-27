"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsController = void 0;
const Database_1 = __importDefault(require("../Database"));
class TeamsController {
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const teams = yield Database_1.default.query('SELECT * FROM Equipos');
            res.json(teams);
        });
    }
    registro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield Database_1.default.query('INSERT INTO Equipos set ?', [req.body]);
            res.json({ message: 'Equipo registrado correctamente' });
        });
    }
    partidos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query('UPDATE Equipos set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'actualizando victorias derrotas ' + id });
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query('DELETE FROM Equipos WHERE id = ?', [id]);
            res.json({ text: 'Eliminado el equipo', id });
        });
    }
    veruno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const teams = yield Database_1.default.query('SELECT * FROM Equipos WHERE id = ?', [id]);
            if (teams.length > 0) {
                console.log(teams);
                res.json(teams);
            }
            else {
                console.log({ text: 'No hay equipos con ese id' });
                res.status(404).json({ text: 'No hay equipos con ese id' });
            }
        });
    }
}
exports.teamsController = new TeamsController();
