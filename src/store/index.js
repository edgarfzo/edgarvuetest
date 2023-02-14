// Utilities
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

export default createPinia().use(piniaPluginPersistedState)
