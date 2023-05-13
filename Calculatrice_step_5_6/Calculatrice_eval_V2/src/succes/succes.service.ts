import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Succes } from './succes.entity';


@Injectable()
export class SuccesService {
    constructor(
        @InjectRepository(Succes)
        private readonly succesRepository: Repository<Succes>,
    ) {}
    
    async createSucces(timeTakenMs: number, created_at: Date): Promise<Succes> {
        const newSucces = new Succes();
        newSucces.timeTakenMs = timeTakenMs;
        newSucces.created_at = created_at;
        return this.succesRepository.save(newSucces);
    }

    async getSucces(){
        const res = await this.succesRepository.find();
        const times = res.map(succes => succes.timeTakenMs);
        const lastTime = times.pop();
        console.log('time is :', lastTime);
        return lastTime;
    }
}

