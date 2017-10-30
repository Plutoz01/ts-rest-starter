import { Identifiable } from './identifiable.interface';

export interface User extends Identifiable<string> {
	id: string;
	userName: string;
	email: string;
}