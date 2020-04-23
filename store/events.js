import EventService from '@/services/EventService.js'
export const state = () => ({
  // 무명함수를 리턴하는 이유: 1, 그러지 않으면 인스턴스가 1만생김-> 2.여러개 만들어서 공유하려고
  events: [],
  event: {}
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}
export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response.data)
    })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then((response) => {
      commit('SET_EVENT', response.data)
    })
  }
}
