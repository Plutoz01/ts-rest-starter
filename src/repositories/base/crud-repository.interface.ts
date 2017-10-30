import { Identifiable } from '../../models/identifiable.interface';

export interface CrudRepository <T extends Identifiable<ID>, ID> {
	getAll(): T[];
	getById( id: ID ): T | undefined;
	save( entity: T ): T;
	saveAll?( entities: T[] ): T[];
	remove( id: ID );
	removeAll?( ids: ID[] );
	count?(): number;
}