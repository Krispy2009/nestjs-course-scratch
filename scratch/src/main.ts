//we will create both module and controller in the same file
import { NestFactory } from "@nestjs/core";
import {AppModule} from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
    
}

bootstrap()