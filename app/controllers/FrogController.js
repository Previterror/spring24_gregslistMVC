import { AppState } from "../AppState.js";
import { frogService } from "../services/FrogService.js";
import { getFormData } from "../utils/FormHandler.js";

export class FrogController {
    constructor() {
        console.log('🐸🎮');
        frogService.loadFrogs()
        this.drawFrogs()
    }

    drawFrogs() {
        console.log('🐸🐸🐸 frogs drawing')
        const frogs = AppState.frogs
        let frogsHTML = ''
        frogs.forEach(frog => frogsHTML += frog.FrogCard)
        const frogListElm = document.getElementById('frogs-list')
        frogListElm.innerHTML = frogsHTML
    }

    addFrog() {
        event.preventDefault()
        console.log('++🐸')

        let frogData = getFormData(event.target)
        console.log('adding new frog', frogData)
        frogService.addFrog(frogData)
        console.log('appstate.frogs array', AppState.frogs);
        this.drawFrogs()
    }

    sellFrog(frogID) {
        console.log('selling', frogID)
        frogService.sellFrogs(frogID)
        this.drawFrogs()
    }
}