import { Controller, Get, Param, Post, Body, Put } from '../../node_modules/@nestjs/common';
import { ApiModelProperty, ApiResponse } from '../../node_modules/@nestjs/swagger';
import { Dron } from '../lib/dron';
import { Route } from '../lib/route';

var Drone = new Dron('I', 'D', 'A', '', 'out.txt', 'in.txt' , 3, [0, 0, 0], [0, 0, 0], 10);

export const dronPosts = JSON.parse(JSON.stringify(Drone));
@Controller('dron-posts')


export default class DronPostController {
  @Get() // registers a `-posts` GET method on the API for this case create and send one dron with 3 lunch
  @ApiResponse({ status: 200, isArray: true }) 
  findAll() {
    let Routes = new Route();
        Routes.asyncStart(Drone);
    return Drone.arrsDeliveries;
  }

  @Get(':id')// registers a `-posts` GET method on the API for this case create the number of drones send into the id and send each one with 10 lunch 
  findOne(@Param('id') id: string) {
    return this.GenerateNumofDrones(Number(id));
  }

/**
 * this method create loop to instance n number (<20) and send to road with 10 lunch each one
 * @param intNumofDrones Number of Drones to need to create and sent to road
 * @returns string with message to shows 
 */
private  GenerateNumofDrones(intNumofDrones: number ) :string{
  let Routes = new Route();
  
  if (intNumofDrones <= 20 && intNumofDrones > 0) {
      for (let intDronNumber = 1; intDronNumber <= intNumofDrones; intDronNumber++) {
          let objDron = new Dron('I', 'D', 'A', '', 'out'+intDronNumber+'.txt', 'in'+intDronNumber+'.txt' , 10, [0, 0, 0], [0, 0, 0], 10);
          Routes.asyncStart(objDron);
      }
  }else{
      return "can not send more than 20 drones please reduce the amount he tries again"
  }
  return "`This action send #${"+intNumofDrones+"} Drones to route verify the text file out`"
}
}