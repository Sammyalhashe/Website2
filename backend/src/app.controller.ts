import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

import * as path from 'path';

@Controller('home')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    root(@Res() response): void {
        response.sendFile('index.html');
    }
}
