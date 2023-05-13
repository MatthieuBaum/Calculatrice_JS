import { Module } from '@nestjs/common';
import { ErreurController } from './erreur.controller';
import { ErreurService } from './erreur.service';
import { Erreur } from './erreur.entity';
import { AppService } from '../app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),TypeOrmModule.forFeature([Erreur])],
  controllers: [ErreurController],
  providers: [ErreurService, AppService]
})
export class ErreurModule {}