/**
 本地存储
 */
export default {
    getStorage(){
        return JSON.parse(window.localStorage.getItem(import.meta.env.VITE_APP_NAMESPACE) || "{}")
    },
    setItem(key,val){
        let storage = this.getStorage()
        storage[key] = val
        window.localStorage.setItem(import.meta.env.VITE_APP_NAMESPACE,JSON.stringify(storage))
    },
    clearItem(key){
        let storage = this.getStorage()
        delete storage[key]
        window.localStorage.setItem(import.meta.env.VITE_APP_NAMESPACE,JSON.stringify(storage))
    },
    clearAll(){
        window.localStorage.clear()
    }
}
