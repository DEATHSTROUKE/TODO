import {makeAutoObservable} from "mobx";

class Store {
    isMenuOpen = document.documentElement.clientWidth > 900
    isAuth = false
    name = ''
    email = ''

    constructor() {
        makeAutoObservable(this)
    }

    setMenuOpen() {
        this.isMenuOpen = !this.isMenuOpen
    }

    setAuth(status) {
        console.log(status)
        this.isAuth = status
    }

    setEmail(email) {
        console.log(email)
        this.email = email
    }
}

export default new Store()
