/**
 * Created by Thomas Lesperance on 3/21/2018.
 */
import { Request, Response, NextFunction, Router } from 'express';
/**
 * @class UserAPI
 */
export class UserAPI {
    /**
     * Create the API
     * @static
     */
    public static create(router : Router) {
        router.get('/api/User/', (req: Request, res: Response, next : NextFunction) => {
            new UserAPI().testRoute(req, res, next);
        });
    }

    /**
     * A simple test get that returns some basic text
     *
     * @param req { Request } request
     * @param res { Response } response
     * @param next { NextFunction } next
     *
     * @return void
     */
    private testRoute(req: Request, res: Response, next: NextFunction) {
        res.send('this is some text');
        next();
        return;
    }
}