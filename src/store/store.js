import {makeAutoObservable} from "mobx";

class Store {
    isMenuOpen = document.documentElement.clientWidth > 900;
    constructor() {
        makeAutoObservable(this)
    }
    setMenuOpen() {
        this.isMenuOpen = !this.isMenuOpen
    }
}

export default new Store()
