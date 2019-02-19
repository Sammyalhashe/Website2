import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainController } from './main/main.controller';
import { FrontendMiddleware } from './frontend.middleware';

@Module({
    imports: [],
    controllers: [AppController, MainController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(FrontendMiddleware).forRoutes({
            path: '/**',
            method: RequestMethod.ALL,
        });
    }
}
