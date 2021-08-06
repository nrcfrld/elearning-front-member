<template>
  <ul class="course-curriculum-list font-medium">
    <li
      v-for="lesson in lessons"
      :key="lesson.id"
      class="hover:bg-gray-100 p-2 flex rounded-md"
    >
      <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
      {{ lesson.name }}
      <a
        v-if="lesson.free_access"
        href="#trailer-modal"
        class="bg-gray-200 ml-4 px-2 py-1 rounded-full text-xs"
        uk-toggle=""
      >
        Preview
      </a>
      <span class="text-sm ml-auto"> 4 min </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    chapter: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      lessons: [],
      loading: false,
    }
  },
  mounted() {
    this.loadLessons()
  },
  methods: {
    async loadLessons() {
      try {
        this.loading = true
        const response = await this.$axios('/lessons', {
          params: {
            chapter_id: this.chapter.id,
          },
        })

        this.lessons = response.data.data
      } catch (error) {
        //
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
