import { Route } from './lib/route';
import { Dron } from './lib/dron';
var Routes = new Route();
for(let intDronNumber=0;intDronNumber<6;intDronNumber++){
    Routes.asyncStart(new Dron('I', 'D', 'A', '', 'out'+intDronNumber+'.txt', 'in'+intDronNumber+'.txt' , 3, [0, 0, 0], [0, 0, 0], 10));
}