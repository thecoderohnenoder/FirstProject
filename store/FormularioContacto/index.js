import axios from 'axios';


export const state = () => ({

  usuario: '',



})
export const mutations = {

  setUsuario(state, payload) {
    state.usuario = payload;
  },
  setError(state, payload) {
    state.error = payload
  },
}
