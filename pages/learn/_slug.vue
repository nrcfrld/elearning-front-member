<template>
  <div id="wrapper" class="course-watch bg-black">
    <!-- Main Contents -->
    <div class="main_content h-screen flex justify-center items-center">
      <template v-if="loading"> Loading </template>
      <template v-else-if="videoId">
        <div class="w-full h-full flex flex-column justify-center">
          <youtube
            ref="youtube"
            :video-id="videoId"
            width="100%"
            height="65%"
            @ended="setComplete"
          ></youtube>
          <div class="mt-8 px-4 flex flex-row">
            <div class="flex">
              <button
                class="
                  ml-auto
                  mr-4
                  flex
                  items-center
                  justify-center
                  h-10
                  px-6
                  rounded-md
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  hover:text-white
                  disabled:opacity-50
                "
                @click="start"
              >
                Play
              </button>
              <button
                class="
                  ml-auto
                  flex
                  items-center
                  justify-center
                  h-10
                  px-6
                  rounded-md
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  hover:text-white
                  disabled:opacity-50
                "
                @click="pause"
              >
                Pause
              </button>
            </div>
            <button
              class="
                ml-auto
                flex
                items-center
                justify-center
                h-10
                px-6
                rounded-md
                bg-purple-600
                hover:bg-purple-700
                text-white
                hover:text-white
                disabled:opacity-50
              "
              @click="setComplete"
            >
              Tandai selesai
            </button>
          </div>
        </div>
      </template>
      <div v-else>Mulai perjalanan belajar kamu</div>
    </div>

    <!-- This is the modal -->
    <div id="modal-example" style="margin-left: 22.5rem" uk-modal>
      <div class="uk-modal-dialog uk-modal-body rounded-md shadow-xl">
        <button
          class="
            absolute
            block
            top-0
            right-0
            m-6
            rounded-full
            bg-gray-300
            p-2
            uk-modal-close
          "
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="text-sm mb-2">Section 2</div>
        <h2 class="mb-5 font-semibold text-2xl">Your First webpage</h2>
        <p class="text-base">
          Do You want to skip the rest of this chapter and chumb to next
          chapter.
        </p>

        <div class="text-right pt-3 mt-3">
          <a
            href="#"
            class="
              py-2
              inline-block
              px-8
              rounded-md
              hover:bg-gray-200
              uk-modal-close
            "
          >
            Stay
          </a>
          <a
            href="#"
            class="py-2 inline-block px-8 rounded-md bg-blue-600 text-white"
          >
            Continue
          </a>
        </div>
      </div>
    </div>

    <!-- sidebar -->
    <div class="sidebar bg-white">
      <!-- slide_menu for mobile -->
      <span
        class="btn-close-mobi right-3 left-auto"
        uk-toggle="target: #wrapper ; cls: is-active"
      ></span>

      <!-- back to home link -->
      <div class="flex justify-between lg:-ml-1 mt-1 mr-2">
        <a
          href="#"
          class="flex items-center text-blue-500"
          @click.prevent="$router.go(-1)"
        >
          <ion-icon
            name="chevron-back-outline"
            class="md:text-lg text-2xl"
          ></ion-icon>
          <span class="text-sm md:inline hidden"> back</span>
        </a>
      </div>

      <!-- title -->
      <h1 class="lg:text-2xl text-lg font-bold mt-2 line-clamp-2">
        {{ course.name }}
      </h1>

      <nav class="cd-secondary-nav nav-small extanded w-auto lg:block hidden">
        <ul uk-switcher="connect: #course-tabs; animation: uk-animation-fade">
          <li><a href="#" class="lg:px-2"> Daftar </a></li>
          <li><a href="#" class="lg:px-2"> Sertifikat </a></li>
        </ul>
      </nav>

      <hr class="-mx-6 lg:block hidden" />

      <!-- sidebar list -->
      <div class="sidebar_inner" data-simplebar>
        <div id="course-tabs" class="uk-switcher">
          <div id="curriculum">
            <div uk-accordion="multiple: true" class="divide-y space-y-3">
              <div
                v-for="(chapter, index) in chapters"
                :key="chapter.id"
                class="pt-2 uk-open"
              >
                <a
                  class="uk-accordion-title text-md mx-2 font-semibold"
                  href="#"
                >
                  <div class="mb-1 text-sm font-medium">
                    Chapter {{ index + 1 }}
                  </div>
                  {{ chapter.name }}
                </a>
                <div class="uk-accordion-content mt-3">
                  <Lessons
                    :key="chapter.id + key"
                    :current-lesson-id="lessonId"
                    :chapter-id="chapter.id"
                    @change="changeYoutubeId"
                  />
                </div>
              </div>
            </div>
          </div>

          <!--  Overview -->
          <div class="space-y-6 px-2 py-6">
            <div class="flex">
              <svg
                height="100"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 490 490"
                style="enable-background: new 0 0 490 490"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M480,15.871H10c-5.523,0-10,4.477-10,10v410c0,5.523,4.477,10,10,10h260V299.577c-3.229-8.972-5-18.635-5-28.706
				c0-46.869,38.131-85,85-85c46.869,0,85,38.131,85,85c0,10.071-1.771,19.733-5,28.706v146.294h50c5.523,0,10-4.477,10-10v-410
				C490,20.349,485.523,15.871,480,15.871z M45,175.871h40v20H45V175.871z M175,395.871H45v-20h130V395.871z M235,345.871H45v-20
				h190V345.871z M235,295.871H45v-20h190V295.871z M235,245.871H45v-20h190V245.871z M285,135.871h-80v-20h80V135.871z M335,95.871
				H155v-20h180V95.871z"
                      />
                      <path
                        d="M290,331.02v143.109l50-42.857v-55.4h20v55.4l50,42.857V331.02c-15.385,15.348-36.603,24.852-60,24.852
				C326.603,355.872,305.385,346.368,290,331.02z"
                      />
                      <path
                        d="M350,205.871c-35.841,0-65,29.159-65,65s29.159,65,65,65s65-29.159,65-65S385.841,205.871,350,205.871z"
                      />
                    </g>
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <div class="ml-4">
                <h4>Sertifikat</h4>
                <p>Sertifikat tersedia untuk kelas ini.</p>
              </div>
            </div>
            <button
              v-if="course.isCompleted"
              @click="downloadCertificate"
              class="
                ml-auto
                flex
                items-center
                justify-center
                h-10
                px-6
                rounded-md
                bg-purple-600
                hover:bg-purple-700
                text-white
                hover:text-white
                disabled:opacity-50
              "
              type="button"
            >
              Download Sertifikat
            </button>
          </div>

          <!--  Announcements -->
          <!-- <div class="px-2 py-6">
            <h3 class="text-xl font-semibold mb-3">Announcement</h3>

            <div class="flex items-center gap-x-4 mb-5">
              <img
                src="assets/images/avatars/avatar-4.jpg"
                alt=""
                class="rounded-full shadow w-10 h-10"
              />
              <div>
                <h4 class="-mb-1 text-base">Stella Johnson</h4>
                <span class="text-sm">
                  Instructor <span class="text-gray-500"> 1 year ago </span>
                </span>
              </div>
            </div>

            <h4 class="leading-8 text-xl">
              Nam liber tempor cum soluta nobis eleifend
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolo sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              ta ifend nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div> -->
        </div>
      </div>

      <!-- overly for mobile -->
      <div
        class="side_overly"
        uk-toggle="target: #wrapper ; cls: is-collapse is-active"
      ></div>
    </div>
  </div>
</template>

<script>
import Lessons from '@/components/partials/learn/Lessons.vue'

export default {
  components: {
    Lessons,
  },
  layout: 'full',
  async asyncData({ $axios, params, $auth }) {
    try {
      const response = await $axios.get('/courses', {
        params: {
          per_page: 1,
          slug: params.slug,
        },
      })
      const course = response.data.data[0]

      console.log(course)
      const chapters = await $axios.get('/chapters', {
        params: {
          per_page: 20,
          course_id: course.id,
          order_by: ['created_at', 'asc'],
        },
      })

      let lessonId = null
      let videoId = null
      const lastLessons = await $axios.get(`/user-lessons`, {
        params: {
          status: 'DONE',
          order_by: ['created_at', 'desc'],
          per_page: 1,
          user_id: $auth.user.id,
        },
      })

      if (lastLessons.data.data.length > 0) {
        lessonId = lastLessons.data.data[0].id
        videoId = lastLessons.data.data[0].lesson.youtubeId
      }

      return {
        course,
        chapters: chapters.data.data,
        lessonId,
        videoId,
      }
    } catch (error) {
      console.error(error.response)
    }
  },
  data() {
    return {
      chapters: [],
      videoId: null,
      lessonId: null,
      course: null,
      loading: false,
      key: 1,
    }
  },
  computed: {
    player() {
      if (!this.$refs.youtube) return false
      return this.$refs.youtube.player
    },
  },
  methods: {
    changeYoutubeId({ youtubeId, lessonId }) {
      this.videoId = youtubeId
      this.lessonId = lessonId
    },
    pause() {
      this.player.pauseVideo()
    },
    start() {
      this.player.playVideo()
    },
    async setComplete() {
      try {
        const response = await this.$axios.put(
          `/user-lessons/update-progress/${this.lessonId}`,
          {
            status: 'DONE',
          }
        )

        if (response.status === 200) {
          this.key += 1
        }
      } catch (error) {
        alert('Terjadi Kesalahan')
      }
    },
    async getPlayerState() {
      if (!this.$refs.youtube) return false
      const response = await this.$refs.youtube.player.getPlayerState()
      return response
    },
    async downloadCertificate() {
      try {
        const response = await this.$axios.get(
          `/courses/certificate/${this.course.id}`,
          {
            responseType: 'blob',
          }
        )
        const url = window.URL.createObjectURL(new Blob([response.data]))
        window.open(url)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
