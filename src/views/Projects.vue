<template>
  <div class="bg-gradient-to-br from-white-50 to-gray-200 font-sans pt-20 pb-2">
    <div class="bg-white shadow-xl rounded-xl p-2 sm:p-2 lg:p-2 w-full border border-gray-200">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
        My GitHub Projects
      </h1>

      <div v-if="loading" class="flex justify-center items-center h-48">
        <div class="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
        <p class="ml-4 text-lg text-gray-700">Loading repository data...</p>
      </div>

      <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative text-center" role="alert">
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline ml-2">{{ error }}</span>
        <p class="text-sm mt-2">Please check the repository owner and name, or your network connection.</p>
      </div>

      <div v-else class="mt-6">

        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <ProjectCard v-for="repo in repoDatas" :key="repo.id" :repoData="repo" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import ProjectCard from '@/components/projects/ProjectCard.vue';
export default {
    name: 'Projects',
    components: {
        ProjectCard
    },
    async mounted() {
        const response = await axios.get('https://api.github.com/users/vuthyphon/repos?page=1&per_page=10', {
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            }
        }
        )
        this.repoDatas = response.data;
        this.loading = false;
        console.log(response.data);
    },
    data() {
        return {
            repoDatas: [],
            loading: true
        }
    }
}
</script>
<style>
/* You can add specific styles here if needed, but Tailwind handles most of it */
/* Ensure Tailwind CSS is loaded in your environment for these classes to work */
</style>

