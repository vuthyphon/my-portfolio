<template>
    <div class="flex flex-col items-1 justify-center border border-gray-200 rounded-lg shadow-lg p-6 bg-white">
        <div class="text-center">
          <h2 class="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
            <a
              :href="repoData.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              {{ repoData.name }}
            </a>
          </h2>
          <p class="text-gray-600 text-lg">
            {{ repoData.description || 'No description provided.' }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div class="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
            <p class="font-semibold mb-1 flex items-center">
              <svg class="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
              </svg>
              Stars: <span class="ml-2 font-normal">{{ repoData.stargazers_count.toLocaleString() }}</span>
            </p>
            <p class="font-semibold mb-1 flex items-center">
              <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L8.586 12l-1.293 1.293a1 1 0 101.414 1.414L10 13.414l1.293 1.293a1 1 0 001.414-1.414L11.414 12l1.293-1.293a1 1 0 00-1.414-1.414L10 10.586 8.707 9.293z" clip-rule="evenodd"></path>
              </svg>
              Forks: <span class="ml-2 font-normal">{{ repoData.forks_count.toLocaleString() }}</span>
            </p>
            <p class="font-semibold flex items-center">
              <svg class="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a2 2 0 012 2v8a2 2 0 01-2 2H6a3 3 0 01-3-3V6zm4 0a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H8z" clip-rule="evenodd"></path>
              </svg>
              Open Issues: <span class="ml-2 font-normal">{{ repoData.open_issues_count.toLocaleString() }}</span>
            </p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
            <p class="font-semibold mb-1 flex items-center">
              <svg class="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
              </svg>
              Created At: <span class="ml-2 font-normal">{{ formatDate(repoData.created_at) }}</span>
            </p>
            <p class="font-semibold mb-1 flex items-center">
              <svg class="w-5 h-5 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
              </svg>
              Last Updated: <span class="ml-2 font-normal">{{ formatDate(repoData.updated_at) }}</span>
            </p>
            <p class="font-semibold flex items-center">
              <svg class="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12 1.586l-4 4A2 2 0 006 7.001V14a2 2 0 002 2h4a2 2 0 002-2V7.001a2 2 0 00-.586-1.414l-4-4zM10 12a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
              </svg>
              Language: <span class="ml-2 font-normal">{{ repoData.language || 'N/A' }}</span>
            </p>
          </div>
        </div>

        <div class="text-center mt-6">
          <a
            :href="repoData.html_url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.164 6.839 9.48.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.93 0-1.09.39-1.984 1.03-2.68-.103-.253-.448-1.274.097-2.659 0 0 .84-.27 2.75 1.025A9.564 9.064 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.385.202 2.406.099 2.659.64.696 1.029 1.59 1.029 2.68 0 3.826-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .268.18.579.688.482C17.139 18.196 20 14.45 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
            </svg>
            View on GitHub
          </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    repoData: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>
