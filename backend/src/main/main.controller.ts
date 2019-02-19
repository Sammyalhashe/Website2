import { Controller, Get } from '@nestjs/common';

@Controller('main')
export class MainController {
    @Get()
    loadHome() {
        return 'This is the main page';
    }
}
