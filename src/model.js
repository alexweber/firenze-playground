import Model from 'firenze/lib/Model'
import Posts from './collection';

export default class Post extends Model {
	constructor(attributes = {}, extend = {}) {
		super(attributes, extend);
	}

	alias: 'Post'

	displayField: 'title'

	collectionClass: () => ( Posts )

	schema: {
		id: {
			type: 'increments'
		},
		title: {
			type: 'string'
		},
		body: {
			type: 'text'
		}
	}
};
