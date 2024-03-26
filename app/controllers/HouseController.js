import { AppState } from "../AppState.js"
import { houseService } from "../services/HouseService.js"
import { getFormData } from "../utils/FormHandler.js"

export class HouseController {
    constructor() {
        console.log('🏡 controller loaded')
        houseService.loadHouses()
        this.drawHouses()
    }

    drawHouses() {
        console.log('🏘 🏘 🏘 houses drawn')
        const houses = AppState.houses
        let housesHTML = ''
        houses.forEach(house => housesHTML += house.HouseCard)
        const houselistElm = document.getElementById('houses-list')
        houselistElm.innerHTML = housesHTML
    }

    addHouse() {
        event.preventDefault()
        console.log('+🏠 adding')

        let houseData = getFormData(event.target)
        console.log('Creating a new house listing', houseData);
        houseService.addHouse(houseData)
        console.log('appstate.houses array', AppState.houses)
        this.drawHouses()
    }

    sellHouse(houseID) {
        console.log('selling', houseID)
        houseService.sellHouse(houseID)
        this.drawHouses()
    }
}
