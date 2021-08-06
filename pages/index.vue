<template>
  <div>
    <!-- Slideshow -->
    <div
      class="
        uk-position-relative uk-visible-toggle
        overflow-hidden
        mb-8
        lg:-mt-20
      "
      tabindex="-1"
      uk-slideshow="animation: scale ;min-height: 200; max-height: 500 ;autoplay: true"
    >
      <ul class="uk-slideshow-items rounded">
        <li>
          <div
            class="uk-position-cover"
            uk-slideshow-parallax="scale: 1.2,1.2,1"
          >
            <img
              src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
              class="object-cover"
              alt=""
              uk-cover
            />
          </div>
          <div class="container relative p-20 lg:mt-12 h-full">
            <div
              uk-slideshow-parallax="scale: 1,1,0.8"
              class="flex flex-col justify-center h-full w-full space-y-3"
            >
              <h1
                uk-slideshow-parallax="y: 100,0,0"
                class="lg:text-4xl text-2xl text-white font-semibold"
              >
                Learn from the best1
              </h1>
              <p
                uk-slideshow-parallax="y: 150,0,0"
                class="text-base text-white font-medium pb-4 lg:w-1/2"
              >
                Choose from 130,000 online video courses with new additions
                published every month
              </p>
              <a
                uk-slideshow-parallax="y: 200,0,50"
                href="#"
                class="
                  bg-opacity-90 bg-white
                  py-2.5
                  rounded-md
                  text-base text-center
                  w-32
                "
              >
                Get Started
              </a>
            </div>
          </div>
        </li>
        <li>
          <div
            class="uk-position-cover"
            uk-slideshow-parallax="scale: 1.2,1.2,1"
          >
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80"
              class="object-cover"
              alt=""
              uk-cover
            />
          </div>
          <div class="container relative p-20 lg:mt-12 h-full">
            <div
              uk-slideshow-parallax="scale: 1,1,0.8"
              class="flex flex-col justify-center h-full w-full space-y-3"
            >
              <h1
                uk-slideshow-parallax="y: 100,0,0"
                class="lg:text-4xl text-2xl text-white font-semibold"
              >
                Learn from the best
              </h1>
              <p
                uk-slideshow-parallax="y: 150,0,0"
                class="text-base text-white font-medium pb-4 lg:w-1/2"
              >
                Choose from 130,000 online video courses with new additions
                published every month
              </p>
              <a
                uk-slideshow-parallax="y: 200,0,0"
                href="#"
                class="
                  bg-opacity-90 bg-white
                  py-2.5
                  rounded-md
                  text-base text-center
                  w-32
                "
              >
                Get Started
              </a>
            </div>
          </div>
        </li>
      </ul>

      <a
        class="
          uk-position-center-left-out uk-position-small uk-hidden-hover
          slidenav-prev
        "
        href="#"
        uk-slideshow-item="previous"
      ></a>
      <a
        class="
          uk-position-center-right-out uk-position-small uk-hidden-hover
          slidenav-next
        "
        href="#"
        uk-slideshow-item="next"
      ></a>
    </div>

    <div class="mx-auto max-w-5xl p-4">
      <FeaturedCourses />

      <PopularCourses />
    </div>
  </div>
</template>

<script>
import PopularCourses from '@/components/partials/home/PopularCourses.vue'
import FeaturedCourses from '@/components/partials/home/FeaturedCourses.vue'

export default {
  auth: false,
  components: {
    PopularCourses,
    FeaturedCourses,
  },
  layout: 'default',
}
</script>
