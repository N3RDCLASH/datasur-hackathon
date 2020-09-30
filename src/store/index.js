import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      isSignedUp: false,
      isLoggedIn: false,
      registerComplete: false,
      data: null
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.isLoggedIn = value
    },
    SET_USER(state, data) {
      state.user.data = data
    },
    UPDATE_USER_DATA(state, data) {
      state.user.data = { ...data }
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL
        });
      } else {
        commit("SET_USER", null);
      }
    },
    updateUserData({ commit }, data) {
      commit("UPDATE_USER_DATA", data)
    },
  },
  modules: {
  }
})
