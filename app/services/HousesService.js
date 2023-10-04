import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"
import { House } from "../models/House.js"

function _saveHouses() {
    saveState('houses', AppState.houses)
}

class HousesService {
    createHouse(houseData) {
        const newHouse = new House(houseData)
        console.log('new house', newHouse)
        AppState.houses.push(newHouse)

        AppState.emit('houses')
    }

    removeHouse(houseId) {
        const houses = AppState.houses
        const houseIndex = houses.findIndex(house => house.id == houseId)

        if (houseIndex == -1) {
            throw new Error
        }
        houses.splice(houseIndex, 1)
        _saveHouses()

        AppState.emit('houses')
    }
}




export const housesService = new HousesService()