import { Controller, Get } from '@nestjs/common';
import { ApiModelProperty, ApiResponse } from '@nestjs/swagger';
import { Dron } from '../lib/dron';

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

export const dronPosts = JSON.parse(JSON.stringify(new Dron( 'I', 'D', 'A',"main","in","out",3,[0,0,0],[0,0,0],10)))

export default class DronPostController {
  @Get() // registers a `-posts` GET method on the API
  @ApiResponse({ type: DronPost, status: 200, isArray: true }) // for Swagger documentation: API returns an array of  models
  findAll(): Array<DronPost> {
    return dronPosts;
  }
}