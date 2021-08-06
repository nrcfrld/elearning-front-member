<template>
  <div>
    <div
      class="
        bg-gradient-to-bl
        from-purple-600
        to-purple-400
        text-white
        lg:-mt-20 lg:pt-20
      "
    >
      <div class="container p-0">
        <div class="lg:flex items-center lg:space-x-12 lg:py-14 lg:px-20 p-3">
          <div class="lg:w-4/12">
            <div
              class="
                w-full
                lg:h-52
                h-40
                overflow-hidden
                rounded-lg
                relative
                lg:mb-0
                mb-4
              "
            >
              <img
                :src="course.thumbnail"
                alt=""
                class="w-full h-full absolute inset-0 object-cover"
              />
              <a href="#trailer-modal" class="uk-position-center" uk-toggle>
                <img src="images/icon-play.svg" class="w-16 h-16" alt="" />
              </a>
            </div>
          </div>
          <div class="lg:w-8/12">
            <h1
              class="
                lg:leading-10 lg:text-3xl
                text-white text-xl
                leading-8
                font-bold
              "
            >
              {{ course.name }}
            </h1>
            <div class="lg:w-4/5 mt-4 md:text-lg md:block hidden">
              <div class="flex -space-x-2">
                <img
                  class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>

            <ul class="flex text-gray-300 gap-4 mt-4 mb-3">
              <li class="flex items-center">
                <span
                  class="
                    avg
                    bg-yellow-500
                    mr-2
                    px-2
                    rounded
                    text-white
                    font-semiold
                  "
                >
                  4.9
                </span>
                <div class="star-rating text-yellow-300">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-half"></ion-icon>
                </div>
              </li>
              <li>
                <ion-icon name="people-circle-outline"></ion-icon> 1200
                Enerolled
              </li>
            </ul>
            <ul class="lg:flex text-gray-200">
              <li>
                Created by
                <a
                  href="#"
                  class="text-white fond-bold hover:underline hover:text-white"
                >
                  {{ course.created_by }}
                </a>
              </li>
              <span class="lg:block hidden mx-3 text-2xl">·</span>
              <li>Last updated 10/2019</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- video demo model -->
    <div id="trailer-modal" uk-modal>
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
            src="https://www.youtube.com/embed/nOCXXHGMezU"
            class="w-full"
            uk-video="automute: true"
            frameborder="0"
            allowfullscreen
            uk-responsive
          ></iframe>
        </div>

        <div class="uk-modal-body">
          <h3 class="text-lg font-semibold mb-2">Build Responsive Websites</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
