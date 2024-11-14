import { defineStore } from 'pinia'

interface State {
    user: string
}

export const useMainStore = defineStore({
    id: 'main',
    state: (): State => ({
        user: ''
    }),
    getters: {
        getUser(): string {
            return this.user
        }
    },
    actions: {
        setUser(user: string) {
            this.user = user
        }
    }
})