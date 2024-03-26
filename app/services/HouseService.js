import { AppState } from "../AppState.js"
import { House } from "../models/House.js"


class HouseService {
    addHouse(houseData) {
        console.log('🔧🏠')
        const createdHouse = new House(houseData)
        console.log('✨🏡', createdHouse)
        AppState.houses.push(createdHouse)
        this.saveHouses()

    }

    saveHouses() {
        let dataString = JSON.stringify(AppState.houses)
        localStorage.setItem('houses', dataString)
    }

    loadHouses() {
        let dataString = localStorage.getItem('houses')
        console.log('loading 🏡', dataString)
        const houseData = JSON.parse(dataString)
        console.log('houses object now?', houseData)
        if (houseData == null) return

        const houses = houseData.map(house => new House(house))
        console.log('houses ready to move to appstate?', houses)
        AppState.houses = houses
    }
}

export const houseService = new HouseService()