import { Singleton } from 'typescript-ioc';

import { InMemoryRepositoryBase } from './base/in-memory-base.repository';
import { User } from '../models/user.interface';

@Singleton
export class UserRepository extends InMemoryRepositoryBase<User, string> {

	initializeData() {
		this.items.set( '1',
			<User> {
				id: '1',
				userName: 'BobAwesome',
				email: 'bob@awesome.com'
			}
		);
		this.items.set( '2',
			<User> {
				id: '2',
				userName: 'SteveWonderful',
				email: 'steve@wonderful.com'
			}
		);
	}
}