<template>
  <div class="max-w-screen-xl mx-auto min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <NavBar />
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import NavBar from '@/components/navbar/NavBar.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Hero,
    NavBar,
    Footer
  }
}
</script>
