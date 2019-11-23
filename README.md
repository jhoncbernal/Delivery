## Author Jhon Casallas Bernal
# Delivery

An application capable of operating (n) Drones to deliver lunch to different addresses in the city of Bogotá. this project is found based on the Delivery service with Drones. Furthermore aims to be designed for small business. For example, in this case, the restaurant "Su corrientazo" planing delivery 3 lunch each route and the manager program these routes in one text file.
An example of the text(in.txt) file that enters the system for one-day delivery
would:
AAAADAAA
IADAD
AAIADAD
Where:
● Letter A corresponds to a forward movement.
● Letter I corresponds to a 90-degree turn of the drone to the left.
● The letter D corresponds to a 90-degree turn of the drone to the right.

Each line of the text file corresponds to a lunch delivery.
● The drone always starts at the (0, 0) north orientation of the drone to the right.
 This solution was solved with As dynamically typed languages became prominent during the last decade, typeless programming became the norm for the backend as well as the frontend.NodeJS with to HTTP req Get and Get(id)

You can read more documentation in docs/index.html

---
## Requirements
Dependencies for the NodeJS Typescript Sample App
NestJS to bootstrap the server
Swagger to define the server docs
Okta for user management and authentication
NodeJS
validate-class npm library for input validation
nodemon to auto-restart the server on every change

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).


If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://https://github.com/jhoncbernal/Delivery     (
    $ cd Delivery       
    $ yarn install

## Configure app

You will need to install the dependencies  this is the command:

npm install @nestjs/common@6.5.2 @nestjs/core@6.5.2 @nestjs/platform-express@6.5.2 @nestjs/swagger@3.1.0 @okta/okta-auth-js@2.6.0 @okta/okta-sdk-nodejs@2.0.0 @types/express@4.17.0 @types/node@12.6.2 class-transformer@0.2.3 class-validator@0.9.1 cookie-parser@1.4.4 dotenv@8.0.0 install@0.13.0 reflect-metadata@0.1.13 rxjs@6.5.2 swagger-ui-express@4.0.7 ts-node@8.3.0 typescript@3.5.3 glob@7.1.4 @types/glob@7.1.1


## Running the project

   npx nodemon server.js --ext ts

After running the server, direct your browser to http://localhost:3000. An API console should open with the message “No operations defined in spec”.
 
with /dron-posts let's start of route with one drone with 3 lunch that read the file text in.txt and its output is out.text
with /dron-posts/{id} the parametre id sends the number of drones to get start the route this drones read the files in01.txt, in02.txt, in03.txt, ... , in20.txt (number max is 20)

![GitHub Logo](/images/1.png)
Format: ![Alt Text](url)

![GitHub Logo](/images/2.png)
Format: ![Alt Text](url)