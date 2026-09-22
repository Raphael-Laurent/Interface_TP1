export default {
    namespaced: true,
    state: {
        tacos: 0,
        delayIncrement: 5000,
        increment: 1,
        autoIncrement: 1,
    },
    getters: {
        doubleTacos: state => state.tacos*2
    },
    mutations: {
        ajouterTacos(state, number) { state.tacos += number; }
    }
}