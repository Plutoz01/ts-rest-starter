import { Path } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import { CrudControllerBase } from './base/crud-base.controller';
import { User } from '../models/user.interface';
import { UserRepository } from '../repositories/user.repository';

@Path( '/users' )
export class UserController extends CrudControllerBase< User, string> {

	constructor( @Inject userRepository: UserRepository ) {
		super( userRepository );
	}
}