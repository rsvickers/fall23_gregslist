import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <h1 class="p-3">Welcome to Gregslist!</h1>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: null
    // view: `
    // <h1 class="p-3">Welcome to the Cars Page!</h1>
    // <p class=""></p>
    // `
  },

]