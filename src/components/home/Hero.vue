<template>

  <section class="max-w-screen-xl flex mx-auto">
    
    <!-- Left Side -->
    <div class="w-full p-12 flex flex-row align-center justify-center">
      <div class="flex flex-col items-center">
        <img src="@/assets/images/my-photo.png" alt="Profile" class="w-64 shadow-xl rounded-full" />

        <p class="text-xl mt-2 animate-fade-in">Hi, I am</p>
        <h1 class="text-4xl font-bold mb-2 animate-slide-in">Phon Vuthy</h1>
        <p class="text-gray-600 text-lg animate-fade-in-delay">Software Developer / Freelancer</p>
        <router-link to="/projects" class="border-rounded-full rounded-full bg-blue-500 text-white px-6 py-2 mt-4 hover:bg-blue-600 transition duration-300 animate-fade-in-delay">View Projects</router-link>
      </div>
    </div>
  </section>
  <section>
    <div class="flex flex-wrap items-center justify-center pt-5 pb-10 mt-0 gap-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="text-center">
        <h2 class="text-3xl font-bold mb-4">{{$t('welcome')}}</h2>
        <p class="text-lg text-gray-700">{{$t('personal_quote')}}</p>
        <h3 class="text-3xl">{{$t('let_connect')}}</h3>
        <p>{{$t('contact_quote')}}</p>
        </div>
      <div class="flex gap-3 mt-6 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 justify-center">
        <!-- Facebook -->
        <a href="https://www.facebook.com/vuthyphon14" target="_blank" class="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
          </svg>
          Facebook
        </a>
        <!-- Telegram -->
        <a href="https://t.me/vtp168" target="_blank" class="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded shadow hover:bg-blue-500 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.371 0 0 5.371 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.629-5.371-12-12-12zm5.707 7.293l-2.828 10.607c-.211.789-.678.979-1.372.609l-3.797-2.803-1.833.883c-.202.099-.373.018-.427-.187l-.662-2.484-2.484-.662c-.205-.054-.286-.225-.187-.427l.883-1.833-2.803-3.797c-.37-.694-.18-1.161.609-1.372l10.607-2.828c.789-.211 1.161.18.95.969z"/>
          </svg>
          Telegram
        </a>
        <!-- Email -->
        <a href="mailto:vuthyphon13@gmail.com" class="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"/>
          </svg>
          Email
        </a>
        <!-- Phone -->
        <a href="tel:+85598949302" class="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.59.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.26.2 2.47.57 3.59a1.003 1.003 0 01-.24 1.01l-2.2 2.2z"/>
          </svg>
          +855 98 949 302
        </a>
      </div>
    </div>
  </section>
</template>
