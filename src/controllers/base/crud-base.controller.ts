import { DELETE, Errors, GET, Path, PathParam, POST, PUT } from 'typescript-rest';

import { Identifiable } from '../../models/identifiable.interface';
import { CrudRepository } from '../../repositories/base/crud-repository.interface';

export abstract class CrudControllerBase <T extends Identifiable<ID>, ID> {

	constructor( private repository: CrudRepository<T, ID> ) {
	}

	@GET
	async getAll(): Promise<T[]> {
		return this.repository.getAll();
	}

	@GET
	@Path( ':entityId' )
	async getById( @PathParam( 'entityId' ) id: ID ): Promise<T> {
		const found = await this.repository.getById( id );
		if ( !found ) {
			throw new Errors.NotFoundError();
		}
		return found;
	}

	@POST
	async create( newEntity: T ): Promise<T> {
		// force to override id to avoid accidental update
		newEntity.id = undefined;
		return this.repository.save( newEntity );
	}

	@PUT
	@Path( ':entityId' )
	async update( @PathParam( 'entityId' ) existingId: ID, entityToUpdate: T ): Promise<T> {
		if ( !existingId ) {
			throw new Errors.BadRequestError();
		} else if ( entityToUpdate.id !== existingId ) {
			throw new Errors.ConflictError();
		} else {
			const found = this.getById( existingId );
			if ( !found ) {
				throw new Errors.NotFoundError();
			}
			return this.repository.save( entityToUpdate );
		}
	}

	@DELETE
	@Path( ':entityId' )
	async remove( @PathParam( 'entityId' ) id: ID ): Promise<void> {
		const found = this.getById( id );
		if ( !found ) {
			throw new Errors.NotFoundError();
		}
		return this.repository.remove( id );
	}
}
