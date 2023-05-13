import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccesModule } from './succes/succes.module';
import { ErreurModule } from './error/erreur.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { SuccesController } from './succes/succes.controller';
import { SuccesService } from './succes/succes.service';
import { ErreurController } from './error/erreur.controller';
import { ErreurService } from './error/erreur.service';
import { Succes } from './succes/succes.entity';
import { Erreur } from './error/erreur.entity';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),TypeOrmModule.forFeature([Succes]),TypeOrmModule.forFeature([Erreur]),SuccesModule, ErreurModule],
  controllers: [AppController, SuccesController, ErreurController],
  providers: [AppService, SuccesService, ErreurService],
  exports: [],
})
export class AppModule {}
