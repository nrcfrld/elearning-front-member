<template>
  <ul
    class="course-curriculum-list"
    uk-switcher="connect: #video_tabs; animation: uk-animation-fade"
  >
    <li
      v-for="lesson in lessons"
      :key="lesson.id"
      @click="$emit('change', lesson.youtubeId)"
    >
      <a href="#">
        {{ lesson.name }} <span> {{ lesson.minutes }} min </span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    chapterId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      lessons: [],
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.get('lessons', {
        params: {
          chapter_id: this.$props.chapterId,
        },
      })

      if (response.status === 200) {
        this.lessons = response.data.data
      }
    } catch (error) {
      //
    }
  },
}
</script>

<style lang="scss" scoped></style>
