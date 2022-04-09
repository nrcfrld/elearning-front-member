<template>
  <div id="wrapper" class="course-watch bg-black">
    <!-- Main Contents -->
    <div class="main_content h-screen flex justify-center items-center">
      <youtube
        v-if="videoId"
        ref="youtube"
        :video-id="videoId"
        width="100%"
        height="85%"
      ></youtube>
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
          @click.prevent="$router.push('/')"
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
          <li><a href="#" class="lg:px-2"> Overview </a></li>
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
                    Section {{ index + 1 }}
                  </div>
                  {{ chapter.name }}
                </a>
                <div class="uk-accordion-content mt-3">
                  <Lessons :chapter-id="chapter.id" @change="changeYoutubeId" />
                </div>
              </div>
            </div>
          </div>

          <!--  Overview -->
          <!-- <div class="space-y-6 px-2 py-6">
            <div>
              <h3 class="text-lg font-semibold mb-1">Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-1">What You’ll Learn</h3>
              <ul>
                <li>
                  <i class="uil-check text-xl font-bold mr-2"></i>Setting up the
                  environment
                </li>
                <li>
                  <i class="uil-check text-xl font-bold mr-2"></i>Advanced HTML
                  Practices
                </li>
                <li>
                  <i class="uil-check text-xl font-bold mr-2"></i>Build a
                  portfolio website
                </li>
                <li>
                  <i class="uil-check text-xl font-bold mr-2"></i>Responsive
                  Designs
                </li>
                <li>
                  <i class="uil-check text-xl font-bold mr-2"></i>Understand
                  HTML Programming
                </li>
                <li>
                  <i class="uil-check text-xl font-bold mr-2"></i>Code HTML
                </li>
                <li>
                  <i class="uil-check text-xl font-bold mr-2"></i>Start building
                  beautiful websites
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-1">Requirements</h3>
              <ul class="list-disc ml-5 space-y-1 mt-3">
                <li>Any computer will work: Windows, macOS or Linux</li>
                <li>Basic programming HTML and CSS.</li>
                <li>Basic/Minimal understanding of JavaScript</li>
              </ul>
            </div>
          </div> -->

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
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.get('/courses', {
        params: {
          per_page: 1,
          slug: params.slug,
        },
      })
      const course = response.data.data[0]
      const chapters = await $axios.get('/chapters', {
        params: {
          per_page: 15,
          course_id: course.id,
          order_by: ['created_at', 'asc'],
        },
      })

      return {
        course,
        chapters: chapters.data.data,
      }
    } catch (error) {
      //
    }
  },
  data() {
    return {
      chapters: [],
      videoId: null,
    }
  },
  methods: {
    changeYoutubeId(id) {
      this.videoId = id
    },
  },
}
</script>

<style lang="scss" scoped></style>
