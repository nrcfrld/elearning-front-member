<template>
  <!-- Content-->
  <div
    class="
      min-h-screen
      bg-purple-400
      flex
      justify-center
      items-center
      overflow-hidden
      relative
    "
  >
    <div
      class="
        absolute
        w-48
        h-48
        rounded-xl
        bg-purple-300
        -top-5
        -left-16
        z-0
        transform
        rotate-45
        hidden
        md:block
      "
    ></div>
    <div
      class="
        absolute
        w-48
        h-48
        rounded-xl
        bg-purple-300
        -bottom-6
        -right-10
        transform
        rotate-12
        hidden
        md:block
      "
    ></div>
    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 my-4 lg:w-2/5">
      <div>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
          Register
        </h1>
        <p
          class="
            mx-auto
            w-80
            text-center text-sm
            mb-8
            font-semibold
            text-gray-700
            tracking-wide
            cursor-pointer
          "
        >
          Please login to continue exploring around the world
        </p>
      </div>
      <div class="space-y-4">
        <form @submit.prevent="submit">
          <div class="mb-3">
            <label class="mb-0"> Nama Lengkap </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="
                bg-gray-100
                h-12
                mt-2
                px-3
                rounded-md
                w-full
                focus:border-gray-500
                focus:outline-none
                focus:ring-4
                focus:ring-purple-500
                focus:ring-opacity-50
              "
            />
          </div>
          <div class="mb-3">
            <label class="mb-0"> Alamat Email </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="Info@example.com"
              class="
                bg-gray-100
                h-12
                mt-2
                px-3
                rounded-md
                w-full
                focus:border-gray-500
                focus:outline-none
                focus:ring-4
                focus:ring-purple-500
                focus:ring-opacity-50
              "
            />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
            <div>
              <label class="mb-0"> Password </label>
              <input
                v-model="form.password"
                type="password"
                placeholder="******"
                class="
                  bg-gray-100
                  h-12
                  mt-2
                  px-3
                  rounded-md
                  w-full
                  focus:border-gray-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-purple-500
                  focus:ring-opacity-50
                "
              />
            </div>

            <div>
              <label class="mb-0"> Konfirmasi Password </label>
              <input
                v-model="form.password_confirmation"
                type="password"
                placeholder="******"
                class="
                  bg-gray-100
                  h-12
                  mt-2
                  px-3
                  rounded-md
                  w-full
                  focus:border-gray-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-purple-500
                  focus:ring-opacity-50
                "
              />
            </div>
          </div>

          <div class="checkbox mt-1">
            <input id="chekcbox1" type="checkbox" checked="" />
            <label for="chekcbox1"
              ><span class="checkbox-icon"></span> Saya setuju dengan
              <a
                href="pages-terms.html"
                target="_blank"
                class="uk-text-bold uk-text-small uk-link-reset"
              >
                ketentuan dan persyaratan
              </a>
            </label>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="
                mb-2
                bg-purple-600
                font-semibold
                p-2
                mt-5
                rounded-md
                text-center text-white
                w-full
                flex
                items-center
                justify-content-center
              "
              :class="{ 'opacity-50': loading }"
              :disabled="loading"
            >
              <svg
                v-if="loading"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#d8ebf9"
                  stroke-width="10"
                  r="35"
                  stroke-dasharray="164.93361431346415 56.97787143782138"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  ></animateTransform>
                </circle>
                <!-- [ldio] generated by https://loading.io/ -->
              </svg>
              Get Started
            </button>
            <nuxt-link :to="{ name: 'account-login' }"
              >Saya sudah punya akun</nuxt-link
            >
          </div>
        </form>
      </div>
    </div>
    <div
      class="
        w-40
        h-40
        absolute
        bg-purple-300
        rounded-full
        top-0
        right-12
        hidden
        md:block
      "
    ></div>
    <div
      class="
        w-20
        h-40
        absolute
        bg-purple-300
        rounded-full
        bottom-20
        left-10
        transform
        rotate-45
        hidden
        md:block
      "
    ></div>
  </div>
</template>

<script>
export default {
  layout: 'full',
  auth: 'guest',
  data() {
    return {
      loading: false,
      form: {},
    }
  },
  methods: {
    async submit() {
      try {
        this.loading = true
        await this.$axios.post('/auth/register', this.form)

        await this.$auth.loginWith('laravelJWT', {
          auth: {
            username: this.form.email,
            password: this.form.password,
          },
        })
      } catch (error) {
        alert('Gagal Register')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
