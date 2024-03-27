import { AppState } from "../AppState.js"
import { Frog } from "../models/Frogs.js"

class FrogService {
    addFrog(frogData) {
        console.log('🐸🔧')
        const createdFrog = new Frog(frogData)
        console.log('✨🐸', createdFrog)
        AppState.frogs.push(createdFrog)
        this.saveFrogs()
    }

    saveFrogs() {
        let dataString = JSON.stringify(AppState.frogs)
        localStorage.setItem('frogs', dataString)
    }

    loadFrogs() {
        let dataString = localStorage.getItem('frogs')
        const frogData = JSON.parse(dataString)
        console.log('frogs object now?', frogData)
        if (frogData == null) return

        const frogs = frogData.map(frog => new Frog(frog))
        console.log('houses ready for appstate?', frogs);
        AppState.frogs = frogs
    }

    sellFrogs(frogID) {
        let indexToDelete = AppState.frogs.findIndex(frog => frog.id == frogID)
        console.log('selling 🔧', indexToDelete)
        AppState.frogs.splice(indexToDelete, 1)
        this.saveFrogs()
    }
}

export const frogService = new FrogService