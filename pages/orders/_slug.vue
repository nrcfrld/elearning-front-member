<template>
  <div class="mx-auto max-w-5xl p-4 mt-32">
    <section>
      <h1 class="text-center font-bold mb-4">Checkout Kelas</h1>
      <p class="text-gray-800 text-center">
        Bergabung dengan kami di kelas Premium dan membangun sebuah real-world
        project
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 mt-8 w-100">
      <div class="px-4">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <img
            :src="course.thumbnail"
            alt="test"
            class="rounded w-full h-64 object-cover mb-4"
          />
          <h2 class="text-lg font-bold">
            {{ course.name }}
          </h2>
          <div
            v-if="course.price > 0"
            class="
              text-xs
              font-bold
              text-blue-600
              bg-blue-200
              inline-block
              py-1
              px-3
              rounded-lg
            "
          >
            Kelas Premium
          </div>
        </div>
      </div>
      <div class="px-4">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <div class="mb-4">
            <h4 class="text-base font-semibold mb-4">Main Benefit</h4>
            <div class="flex justify-between mb-2">
              <span>Waktu Akses</span>
              <span class="font-semibold">Selamanya</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Sertifikat Kelas</span>
              <span class="font-semibold">Tidak Tersedia</span>
            </div>
          </div>
          <div class="mb-4">
            <h4 class="text-base font-semibold mb-4">Payment Details</h4>
            <div class="flex justify-between mb-2">
              <span>Harga Kelas</span>
              <span class="font-semibold"
                >Rp.
                {{ new Intl.NumberFormat('id-ID').format(course.price) }}</span
              >
            </div>
          </div>

          <div>
            <button
              type="button"
              class="
                w-full
                bg-purple-500
                hover:bg-purple-600
                purple-500
                px-6
                py-2
                rounded-md
                shadow
                text-white
                hover:text-white
              "
              @click="order"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.get('courses', {
        params: {
          slug: params.slug,
        },
      })

      // eslint-disable-next-line no-console
      console.log(response.data.data)

      return {
        course: response.data.data[0],
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  },
  methods: {
    async order() {
      try {
        const response = await this.$axios.post(
          `/orders/enroll/${this.course.id}`
        )

        if (this.course.price < 1) {
          return this.$router.push({ name: 'orders-thank-you' })
        }

        const snapToken = response.data.data.snapId

        window.snap.pay(snapToken, {
          onSuccess: (result) => {
            this.$router.push({ name: 'orders-thank-you' })
          },
          onError: (result) => console.log('Error : ', result),
          onPending: (result) => console.log('Pending : ', result),
          onClose: (result) => console.log('Success : '),
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
