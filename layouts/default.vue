<template>
  <client-only>
    <div id="wrapper" class="horizontal min-h-screen">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </client-only>
</template>

<script>
import Header from '~/components/layouts/Header.vue'
import Footer from '~/components/layouts/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
