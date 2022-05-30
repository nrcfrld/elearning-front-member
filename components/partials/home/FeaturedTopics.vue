<template>
  <div>
    <h3 class="text-2xl mt-8 mb-6 font-bold">Featured topics</h3>
    <div class="md:p-7 p-5 bg-white rounded-md shadow">
      <p class="mb-8">Choose Your Favorite Topic</p>

      <div
        v-if="$fetchState.pending"
        class="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-2 -m-3"
      >
        <div
          class="
            hover:bg-gray-100
            flex
            items-center
            px-3
            py-2
            rounded-lg
            space-x-3
          "
        >
          <SkeletonLoader
            type="rect"
            animation="wave"
            class="w-10 h-10"
            rounded
          />
          <div class="flex-grow truncate">
            <SkeletonLoader
              type="rect"
              animation="wave"
              width="100%"
              height="16px"
              rounded
            />
            <div
              class="flex space-x-2 items-center text-sm pt-0.5 text-gray-500"
            >
              <SkeletonLoader
                type="rect"
                animation="wave"
                width="48px"
                height="10px"
                rounded
              />
              <SkeletonLoader
                type="rect"
                animation="wave"
                width="10px"
                height="10px"
                rounded
              />
              <SkeletonLoader
                type="rect"
                animation="wave"
                width="48px"
                height="10px"
                rounded
              />
            </div>
          </div>
        </div>
        <div
          class="
            hover:bg-gray-100
            flex
            items-center
            px-3
            py-2
            rounded-lg
            space-x-3
          "
        >
          <SkeletonLoader
            type="rect"
            animation="wave"
            class="w-10 h-10"
            rounded
          />
          <div class="flex-grow truncate">
            <SkeletonLoader
              type="rect"
              animation="wave"
              width="100%"
              height="16px"
              rounded
            />
            <div
              class="flex space-x-2 items-center text-sm pt-0.5 text-gray-500"
            >
              <SkeletonLoader
                type="rect"
                animation="wave"
                width="48px"
                height="10px"
                rounded
              />
              <SkeletonLoader
                type="rect"
                animation="wave"
                width="10px"
                height="10px"
                rounded
              />
              <SkeletonLoader
                type="rect"
                animation="wave"
                width="48px"
                height="10px"
                rounded
              />
            </div>
          </div>
        </div>
        <div
          class="
            hover:bg-gray-100
            flex
            items-center
            px-3
            py-2
            rounded-lg
            space-x-3
          "
        >
          <SkeletonLoader
            type="rect"
            animation="wave"
            class="w-10 h-10"
            rounded
          />
          <div class="flex-grow truncate">
            <SkeletonLoader
              type="rect"
              animation="wave"
              width="100%"
              height="16px"
              rounded
            />
            <div
              class="flex space-x-2 items-center text-sm pt-0.5 text-gray-500"
            >
              <SkeletonLoader
                type="rect"
                animation="wave"
                width="48px"
                height="10px"
                rounded
              />
              <SkeletonLoader
                type="rect"
                animation="wave"
                width="10px"
                height="10px"
                rounded
              />
              <SkeletonLoader
                type="rect"
                animation="wave"
                width="48px"
                height="10px"
                rounded
              />
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-2 -m-3"
      >
        <a v-for="topic in topics" :key="topic.id" href="#">
          <div
            class="
              hover:bg-gray-100
              flex
              items-center
              px-3
              py-2
              rounded-lg
              space-x-3
            "
          >
            <img :src="topic.image" alt="" class="w-11 h-11 rounded" />
            <div class="flex-grow truncate">
              <h3 class="font-semibold text-lg mb-0 truncate">
                {{ topic.name }}
              </h3>
              <div
                class="flex space-x-2 items-center text-sm pt-0.5 text-gray-500"
              >
                <div>{{ topic.coursesTotal }} Courses</div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="flex justify-center mt-9">
        <nuxt-link
          to="/"
          class="
            bg-gray-50
            border
            hover:bg-gray-100
            px-4
            py-1.5
            rounded-full
            text-sm text-gray-500
          "
        >
          More Topics ..</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [],
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.get('/categories')

      this.topics = response.data.data
    } catch (error) {
      alert('Terjadi Kesalahan')
    }
  },
}
</script>

<style lang="scss" scoped></style>
