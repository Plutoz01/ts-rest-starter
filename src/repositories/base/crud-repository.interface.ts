import { Identifiable } from '../../models/identifiable.interface';

export interface CrudRepository <T extends Identifiable<ID>, ID> {
	getAll(): Promise<T[]>;
	getById( id: ID ): Promise<T | undefined>;
	save( entity: T ): Promise<T>;
	saveAll?( entities: T[] ): Promise<T[]>;
	remove( id: ID ): Promise<void>;
	removeAll?( ids: ID[] ): Promise<void>;
	count?(): Promise<number>;
}