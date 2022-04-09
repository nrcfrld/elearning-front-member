<template>
  <div>
    <SkeletonLoader
      v-if="loading"
      type="rect"
      animation="wave"
      width="100%"
      height="120px"
      rounded
    />
    <div class="tube-card">
      <h3
        id="curriculum"
        class="mb-4 text-xl font-semibold lg:mb-5 px-5 pt-5 lg:px-8"
      >
        Course Curriculum
      </h3>
      <ul
        v-if="!loading"
        uk-accordion="multiple: true"
        class="chapters-list tube-card divide-y space-y-3 border-0"
      >
        <li
          v-for="(chapter, index) in chapters"
          :key="chapter.id"
          :class="{ 'uk-open': index === 0 }"
          class="px-5 py-3"
        >
          <a class="uk-accordion-title text-md mx-2 font-semibold" href="#">
            <div class="mb-1 text-sm font-medium">Section {{ index + 1 }}</div>
            {{ chapter.name }}
          </a>
          <div class="uk-accordion-content mt-3 text-base">
            <CourseCurriculumList :chapter="chapter" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CourseCurriculumList from './CourseCurriculumList.vue'

export default {
  components: {
    CourseCurriculumList,
  },
  props: {
    course: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chapters: [],
      loading: false,
    }
  },
  created() {
    this.loadCurriculum()
  },
  methods: {
    async loadCurriculum() {
      try {
        this.loading = true
        const response = await this.$axios.get('/chapters', {
          params: {
            per_page: 15,
            course_id: this.course.id,
          },
        })

        this.chapters = response.data.data
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
