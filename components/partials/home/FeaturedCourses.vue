<template>
  <div>
    <!--  course feature -->
    <div class="sm:my-4 my-3 flex items-end justify-between pt-3">
      <h2 class="text-2xl font-semibold">Featured Classes</h2>
    </div>

    <div v-if="$fetchState.pending">
      <SkeletonLoader
        type="rect"
        animation="wave"
        width="100%"
        height="240px"
        rounded
      />
    </div>

    <div v-else class="relative -mt-3" uk-slider="finite: true">
      <div class="uk-slider-container px-1 py-3">
        <ul class="uk-slider-items uk-child-width-1-1@m uk-grid">
          <li v-for="course in courses" :key="course.id">
            <nuxt-link to="/">
              <div
                class="
                  bg-white
                  shadow-sm
                  rounded-lg
                  uk-transition-toggle
                  md:flex
                  text-gray-700
                "
              >
                <div
                  class="
                    md:w-5/12 md:h-60
                    h-40
                    overflow-hidden
                    rounded-l-lg
                    relative
                  "
                >
                  <img
                    :src="course.thumbnail"
                    alt=""
                    class="w-full h-full absolute inset-0 object-cover"
                  />
                  <img
                    src="images/icon-play.svg"
                    class="w-16 h-16 uk-position-center uk-transition-fade"
                    alt=""
                  />
                </div>
                <div class="flex-1 md:p-6 p-4">
                  <div
                    class="
                      font-semibold
                      line-clamp-2
                      md:text-xl md:leading-relaxed
                    "
                  >
                    {{ course.name }}
                  </div>
                  <div class="line-clamp-2 mt-2 md:block hidden">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                  </div>
                  <div class="font-semibold mt-3">
                    <!-- {{ course.mentors[0].name }} -->
                  </div>
                  <div class="mt-1 flex items-center justify-between">
                    <div class="flex space-x-2 items-center text-sm pt-2">
                      <div>{{ timeConvert(course.minutes) }}</div>
                      <div>·</div>
                      <div>{{ course.totalLessons }} lessons</div>
                    </div>
                    <div v-if="course.price > 1" class="text-lg font-semibold">
                      Rp.
                      {{ new Intl.NumberFormat('id-ID').format(course.price) }}
                    </div>
                    <div v-else class="text-lg font-semibold text-green-500">
                      Gratis
                    </div>
                  </div>
                </div>
              </div></nuxt-link
            >
          </li>
        </ul>
      </div>

      <a
        class="
          absolute
          bg-white
          uk-position-center-left
          -ml-3
          flex
          items-center
          justify-center
          p-2
          rounded-full
          shadow-md
          text-xl
          w-11
          h-11
          z-10
          dark:bg-gray-800 dark:text-white
        "
        href="#"
        uk-slider-item="previous"
      >
        <i class="icon-feather-chevron-left"></i
      ></a>
      <a
        class="
          absolute
          bg-white
          uk-position-center-right
          -mr-3
          flex
          items-center
          justify-center
          p-2
          rounded-full
          shadow-md
          text-xl
          w-11
          h-11
          z-10
          dark:bg-gray-800 dark:text-white
        "
        href="#"
        uk-slider-item="next"
      >
        <i class="icon-feather-chevron-right"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.get('/courses')

      this.courses = response.data.data
    } catch (error) {
      alert('Terjadi Kesalahan')
    }
  },
  methods: {
    timeConvert(n) {
      const num = n
      const hours = num / 60
      const rhours = Math.floor(hours)
      if (rhours < 1) {
        return n + ' Min'
      } else {
        return rhours + ' Hours'
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
