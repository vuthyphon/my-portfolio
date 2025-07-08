<template>
<div class="max-w-screen-xl mx-auto mt-10">
    <Hero />
    <!-- <Skill /> -->
</div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import Skill from '@/components/skill/Skill.vue'
export default {
  name: 'App',
  components: {
    Hero,
    Skill
  }
};
</script>
