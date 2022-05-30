<template>
  <ul class="course-curriculum-list font-medium">
    <li
      v-for="lesson in lessons"
      :key="lesson.id"
      class="hover:bg-gray-100 p-2 flex rounded-md"
    >
      <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
      {{ lesson.name }}
      <template v-if="lesson.freeAccess">
        <a
          :href="`#preview-${lesson.id}`"
          class="bg-gray-200 ml-4 px-2 py-1 rounded-full text-xs"
          uk-toggle=""
        >
          Preview
        </a>
        <!-- video demo model -->
        <div :id="`preview-${lesson.id}`" uk-modal>
          <div class="uk-modal-dialog shadow-lg rounded-md">
            <button
              class="uk-modal-close-default m-2.5"
              type="button"
              uk-close
            ></button>
            <div class="uk-modal-header rounded-t-md">
              <h4 class="text-lg font-semibold mb-2">Trailer video</h4>
            </div>

            <div class="embed-video">
              <iframe
                :src="lesson.videoUrl"
                class="w-full"
                uk-video="automute: true"
                frameborder="0"
                allowfullscreen
                uk-responsive
              ></iframe>
            </div>
          </div>
        </div>
      </template>
      <span class="text-sm ml-auto"> {{ lesson.minutes }} min </span>
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
