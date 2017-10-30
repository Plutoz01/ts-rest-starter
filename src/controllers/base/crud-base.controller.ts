import { Errors } from 'typescript-rest';

import { Identifiable } from '../../models/identifiable.interface';
import { CrudRepository } from '../../repositories/base/crud-repository.interface';

export abstract class CrudControllerBase <T extends Identifiable<ID>, ID> {

	constructor( private repository: CrudRepository<T, ID> ) {
	}

	getAll(): T[] {
		return this.repository.getAll();
	}

	getById( id: ID ): T {
		const found = this.repository.getById( id );
		if ( !found ) {
			throw new Errors.NotFoundError();
		}
		return found;
	}
}
