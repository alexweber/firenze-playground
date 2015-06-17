import Collection from 'firenze/lib/Collection';
import Post from './model';

export default class Posts extends Collection {
	constructor(db, extend = {}) {
		super(extend);
		this.setDatabase(db);
	}

	table: 'posts'

	modelClass: () => {
		return Post;
	}
}
