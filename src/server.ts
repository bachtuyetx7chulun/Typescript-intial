import express, { Application } from 'express';
import envVariables from './configs/index';
import logger from 'morgan';

export default class App {
    private app: Application;

    constructor(private port?: number) {
        this.app = express();
        this.configure();
        this.router();
        this.listen();
    }

    private configure() {
        this.app.set('port', this.port || envVariables.host.port);
        this.app.use(logger('common'));
    }

    private router() {
        this.app.get('/', (req, res) => {
            res.send('Hello');
        });
    }

    private listen() {
        const port = this.app.get('port');
        this.app.listen(port, () => {
            console.log(`Server is running on http://localhost:6969`);
        });
    }
}
