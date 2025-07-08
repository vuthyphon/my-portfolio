<template>
  <div class="bg-white shadow rounded p-4">
    <img :src="project.image" class="w-full h-48 object-cover rounded" />
    <h3 class="text-xl font-bold mt-2">{{ project.title }}</h3>
    <p class="text-sm">{{ project.description }}</p>
    <a :href="project.link" target="_blank" class="text-blue-500 underline mt-2 inline-block">View</a>
  </div>
</template>

<script setup>
defineProps(['project'])
</script>
