export const state = () => ({
  course: 0,
})

export const mutations = {
  SET_COURSE(state, payload) {
    console.log(payload)
    state.course = payload
  },
}

export const actions = {
  async loadCourse({ commit, state }, payload) {
    try {
      if (state.course && state.course.slug === payload.slug) {
        return true
      }

      const response = await this.$axios.get('courses', {
        params: {
          slug: payload.slug,
        },
      })
      if (response.status === 200) {
        commit('SET_COURSE', response.data.data[0])
        return true
      }
    } catch (error) {
      return false
    }
  },
}
