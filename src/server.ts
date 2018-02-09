import {NestFactory} from '@nestjs/core';
import * as cors from 'cors';

import {ApplicationModule} from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.use(cors());
    await app.listenAsync(3000);
}

bootstrap();
