import { Dron } from './lib/dron';
import { readFileSync } from 'fs';

const dronPosts = JSON.parse(JSON.stringify(new Dron( 'I', 'D', 'A',"main","in","out",3,[0,0,0],[0,0,0],10)))
console.log(dronPosts);