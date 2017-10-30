import { Identifiable } from '../../models/identifiable.interface';
import { CrudRepository } from './crud-repository.interface';

export abstract class InMemoryRepositoryBase <T extends Identifiable<ID>, ID> implements CrudRepository<T, ID> {

	private readonly _items = new Map<ID, T>();

	constructor() {
		this.initializeData();
	}

	protected abstract initializeData();

	getById( id: ID ): T | undefined {
		return this._items.get( id );
	}

	getAll(): T[] {
		return Array.from( this._items.values() );
	}

	save( entity: T ): T {
		this._items.set( entity.id, entity );
		return entity;

	}
	saveAll( entities: T[] ): T[] {
		if ( !!entities && Array.isArray( entities ) ) {
			entities.forEach( ( entity: T ) => this.save( entity ) );
			return entities;
		} else {
			throw new Error( 'invalid entity array: ' + entities );
		}
	}
	remove( id: ID ) {
		this._items.delete( id );
	}
	removeAll( ids: ID[] ) {
		if ( !!ids && Array.isArray( ids ) ) {
			ids.forEach( ( id: ID ) => this.remove( id ) );
		} else {
			throw new Error( 'invalid entity array: ' + ids );
		}
	}
	count(): number {
		return this._items.size;
	}

	protected get items(): Map<ID, T> {
		return this._items;
	}
}