import { Middleware, NestMiddleware, Injectable, Logger } from '@nestjs/common';

import * as path from 'path';

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];

const ROUTE_PREFIX: string = '';
const resolvePath = (file: string) => `${file}`;

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
    private readonly logger = new Logger(FrontendMiddleware.name);
    resolve(...args: any[]) {
        return (req, res, next) => {
            const { url } = req;
            this.logger.log(url);
            this.logger.log(url.indexOf(ROUTE_PREFIX));
            this.logger.log(
                allowedExt.filter(ext => url.indexOf(ext) > 0),
            );
            if (url.indexOf(ROUTE_PREFIX) === 1) {
                this.logger.log(`in if; url: ${url}`);
                next();
            } else if (
                allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0
            ) {
                this.logger.log(`in else if; url: ${url}`);
                // it has a file extension --> resolve the file
                res.sendFile(resolvePath(url));
            } else {
                // in all other cases, redirect to the index.html!
                this.logger.log(`in else; url: ${url}`);
                res.sendFile(resolvePath('index.html'));
            }
        };
    }
}
