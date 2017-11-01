import * as express from 'express';
import * as logger from 'morgan';
import { Server } from 'typescript-rest';
import controllers from './controllers';

import { handleError } from './error-handler';

export class APIServer {

	public app: express.Application;
	public server: any = null;
	public PORT: number = 3000;

	constructor() {
		this.app = express();
		this.config();

		this.app.use( handleError );
	}

	/**
	 * Start the server
	 * @returns {Promise<any>}
	 */
	public start(): Promise<any> {
		return new Promise<any>( ( resolve, reject ) => {
			this.server = this.app.listen( this.PORT, ( err: any ) => {
				if ( err ) {
					return reject( err );
				}
				// tslint:disable-next-line:no-console
				console.log( `Listening to http://${this.server.address().address}:${this.server.address().port}` );
				return resolve();
			} );
		} );

	}

	/**
	 * Configure the express app.
	 */
	private config(): void {
		//enable logging
		this.app.use( logger( 'common' ) );

		Server.useIoC();
		Server.buildServices( this.app, ...controllers );
		// Server.swagger( this.app, './dist/swagger.json', '/api-docs', 'localhost:3000', [ 'http' ] );
	}
}
