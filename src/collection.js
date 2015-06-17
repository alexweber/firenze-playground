import Collection from 'firenze/lib/Collection';
import db from './database';
import Post from './model';

export default class Posts extends Collection {
	constructor(extend = {}) {
		super(extend);
		this.setDatabase(db);
	}

	table: 'posts'

	modelClass: () => ( Post )
}
