<template>
  <div>
    <!--  slider courses -->
    <div class="sm:my-4 my-3 flex items-end justify-between pt-3">
      <h2 class="text-2xl font-semibold">Popular Classes</h2>
      <a href="#" class="text-blue-500 sm:block hidden"> See all </a>
    </div>

    <div class="mt-3">
      <h4 class="py-3 border-b font-semibold text-grey-700 mx-1 mb-4" hidden>
        <ion-icon name="star"></ion-icon> Featured today
      </h4>

      <div v-if="$fetchState.pending">
        <div class="grid grid-cols-1 md:grid-cols-3 mt-8 w-100">
          <div class="px-2">
            <SkeletonLoader
              type="rect"
              animation="wave"
              width="100%"
              height="300px"
              rounded
            />
          </div>
          <div class="px-2">
            <SkeletonLoader
              type="rect"
              animation="wave"
              width="100%"
              height="300px"
              rounded
            />
          </div>
          <div class="px-2">
            <SkeletonLoader
              type="rect"
              animation="wave"
              width="100%"
              height="300px"
              rounded
            />
          </div>
        </div>
      </div>

      <div v-else class="relative" uk-slider="finite: true">
        <div class="uk-slider-container px-1 py-3">
          <ul
            class="
              uk-slider-items
              uk-child-width-1-3@m
              uk-child-width-1-2@s
              uk-grid-small
              uk-grid
            "
          >
            <li v-for="course in courses" :key="course.id">
              <nuxt-link
                :to="{ name: 'courses-slug', params: { slug: course.slug } }"
                class="uk-link-reset"
              >
                <div
                  class="
                    bg-white
                    shadow-md
                    rounded-lg
                    uk-transition-toggle
                    min-h-full
                  "
                >
                  <div
                    class="w-full h-40 overflow-hidden rounded-t-lg relative"
                  >
                    <img
                      :src="course.thumbnail"
                      alt=""
                      class="w-full h-full absolute inset-0 object-cover"
                    />
                    <img
                      src="images/icon-play.svg"
                      class="w-12 h-12 uk-position-center uk-transition-fade"
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <div class="font-semibold line-clamp-2">
                      {{ course.name }}
                    </div>
                    <div class="flex space-x-2 items-center text-sm pt-3">
                      <div>{{ timeConvert(course.minutes) }}</div>
                      <div>·</div>
                      <div>{{ course.totalLessons }} lessons</div>
                    </div>
                    <div class="pt-1 flex items-center justify-between">
                      <div class="text-sm">
                        {{ course.category.name }}
                      </div>
                      <div
                        v-if="course.price > 0"
                        class="text-lg font-semibold"
                      >
                        Rp.{{
                          new Intl.NumberFormat('id-ID').format(course.price)
                        }}
                      </div>
                      <div v-else class="text-lg font-semibold text-green-600">
                        Gratis
                      </div>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>

          <a
            class="
              absolute
              bg-white
              top-1/4
              flex
              items-center
              justify-center
              p-2
              -left-4
              rounded-full
              shadow-md
              text-xl
              w-9
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
              top-1/4
              flex
              items-center
              justify-center
              p-2
              -right-4
              rounded-full
              shadow-md
              text-xl
              w-9
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
      if (n < 60) {
        return n + ' Minutes'
      }
      const hours = n / 60
      const rhours = Math.floor(hours)
      return rhours + ' Hours'
    },
  },
}
</script>

<style lang="scss" scoped></style>
