"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./lib/route");
const dronPosts = JSON.parse(JSON.stringify(new route_1.Route('I', 'D', 'A', "main", "in", "out", 3, [0, 0, 0], [0, 0, 0], 10)));
console.log(dronPosts);
//# sourceMappingURL=main.js.map