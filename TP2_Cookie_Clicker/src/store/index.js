import { createStore } from 'vuex'
import tacos from './modules/tacos'

export default createStore({
    modules: {
        tacos
    }
})