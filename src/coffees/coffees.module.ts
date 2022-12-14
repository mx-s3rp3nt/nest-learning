import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Module } from '@nestjs/common';

@Module({
    imports:[],
    exports:[],
    controllers:[CoffeesController],
    providers:[ CoffeesService ]
})
export class CoffeesModule {}
