import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"
import { House } from "../models/House.js"

// function _saveHouses() {
//     saveState('houses', AppState.houses)
// }

class HousesService {
    createHouse(houseData) {
        const newHouse = new House(houseData)
        console.log('new house', newHouse)
        AppState.houses.push(newHouse)

        AppState.emit('houses')
    }
}




export const housesService = new HousesService()