import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from 'path';
async function bootstrap() {
    const app = await NestFactory.create(AppModule, new FastifyAdapter());
    app.useStaticAssets({ root: resolve(__dirname, '../../dist/Website2') });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
