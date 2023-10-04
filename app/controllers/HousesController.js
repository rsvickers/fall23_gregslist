import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";

function _drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseCard)
    setHTML('houses', content)
}


export class HousesController {
    constructor() {
        console.log('House controller be loaded', AppState.houses)
        _drawHouses()

        AppState.on('houses', _drawHouses)
    }

    createHouse(event) {
        try {
            event.preventDefault()

            const form = event.target

            const houseData = getFormData(form)

            console.log('Creating House!', houseData);

            housesService.createHouse(houseData)

            form.reset()

        } catch (error) {
            Pop.error(error.message)
            console.error(error);
        }
    }

}



