import { TypeOrmModule } from "@nestjs/typeorm";
import { Erreur } from "../error/erreur.entity";
import { Succes } from "../succes/succes.entity";

export const typeOrmConfig : TypeOrmModule = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username : 'junia_user',
    password : 'junia_user',
    database : 'isen',
    entities : [Succes,Erreur],
};