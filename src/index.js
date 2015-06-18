import firenze from 'firenze/lib';
import db from './database';
import Post from './model';
import Posts from './collection';

let postModel = new Post();

db.getAdapter().createTable(postModel);
