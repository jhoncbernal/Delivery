import { Controller, Get } from '../../node_modules/@nestjs/common';
import { ApiModelProperty, ApiResponse } from '../../node_modules/@nestjs/swagger';
import { Dron } from '../lib/dron';
import { Route } from '../lib/route';
export class DronPost {
@ApiModelProperty()
chaRotateLeft        :string;
@ApiModelProperty()
chaRotateRigth       :string;
@ApiModelProperty()
chaAdvance           :string;
@ApiModelProperty()
strMainPath          :string;
@ApiModelProperty()
strNameFileOutput    :string;
@ApiModelProperty()
strNameFileInput     :string;
@ApiModelProperty()
intMaxRoutes         :number;
@ApiModelProperty()
arriPosition         :Array<number>;
@ApiModelProperty()
arrsNamePosition     :Array<string>;
@ApiModelProperty()
arriInitialPosition  :Array<number>;
@ApiModelProperty()
intRange             :number;  
}
var Routes = new Route();
let intDronNumber=3;
var Drones = new Dron('I', 'D', 'A', '', 'out'+intDronNumber+'.txt', 'in'+intDronNumber+'.txt' , 3, [0, 0, 0], [0, 0, 0], 10);
Routes.asyncStart(Drones);
export const dronPosts = JSON.parse(JSON.stringify(Drones));
@Controller('dron-posts')
export default class DronPostController {
  @Get() // registers a `-posts` GET method on the API
  @ApiResponse({ type: DronPost, status: 200, isArray: true }) // for Swagger documentation: API returns an array of  models
  findAll(): Array<DronPost> {
    return dronPosts;
  }
}