import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'typescript-rest';

export class ErrorResponse {
	constructor( public readonly statusCode: number, public readonly message: string ){}
}

export function handleError( error: Error, request: Request, response: Response, next: NextFunction ) {
	console.error( error.stack );

	if( error instanceof HttpError ) {
		const httpError = <HttpError> error;
		sendResponse( new ErrorResponse( httpError.statusCode, httpError.message ), response );
	} else {
		sendResponse( new ErrorResponse( 500, 'Uh-oh... something went wrong!' ), response );
	}
}

function sendResponse( errorResponse: ErrorResponse, response: Response ) {
	response.status( errorResponse.statusCode ).send( errorResponse );
}
