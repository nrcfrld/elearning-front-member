<template>
  <ul class="course-curriculum-list">
    <li v-for="lesson in lessons" :key="lesson.id">
      <a
        :class="{
          'bg-green-100': lesson.isCompleted,
          'bg-blue-100': lesson.id === currentLessonId,
        }"
        href="#"
        @click.prevent="
          $emit('change', { youtubeId: lesson.youtubeId, lessonId: lesson.id })
        "
      >
        {{ lesson.name }}
        <span v-show="!lesson.isCompleted"> {{ lesson.minutes }} min </span>
        <span
          v-if="lesson.isCompleted"
          class="text-lg flex flex-column justify-center"
        >
          <ion-icon
            v-show="lesson.isCompleted"
            name="checkmark-circle-outline"
          ></ion-icon>
        </span>
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
    currentLessonId: {
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
