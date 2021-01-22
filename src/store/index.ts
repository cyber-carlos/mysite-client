import { createLogger, createStore } from 'vuex'

const store = createStore({
  state: {
    isDark: true,
    sourcesData: [],
  },
  getters: {},
  actions: {},
  mutations: {
    changeTheme(state, value) {
      state.isDark = value
    },
    updateSourcesData(state, value) {
      state.sourcesData = value
    },
  },
  modules: {},
  plugins: import.meta.env.DEV ? [createLogger()] : [],
})

export default store
