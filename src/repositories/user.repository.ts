import { Singleton } from 'typescript-ioc';
import * as uuidv4 from 'uuid/v4';

import { InMemoryRepositoryBase } from './base/in-memory-base.repository';
import { User } from '../models/user.interface';

@Singleton
export class UserRepository extends InMemoryRepositoryBase<User, string> {

	initializeData() {
		let id = this.generateNewIdFor();
		this.items.set( id,
			<User> {
				id: id,
				userName: 'BobAwesome',
				email: 'bob@awesome.com'
			}
		);

		id = this.generateNewIdFor();
		this.items.set( id,
			<User> {
				id: id,
				userName: 'SteveWonderful',
				email: 'steve@wonderful.com'
			}
		);
	}

	protected generateNewIdFor(): string {
		return uuidv4();
	}
}