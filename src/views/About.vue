<template>
  <div class="max-w-screen-xl mx-auto p-6 bg-gray-100 mt-20">
    <h2 class="text-2xl font-semibold mb-2">{{ $t('about') }}</h2>
    <p>
        Hi! I'm  Vuthy. I have experience in software development for many years. As an IT Developer with practical experience, I specialize in transforming complex requirements into robust and scalable software solutions. My journey in the tech landscape has equipped me with a strong foundation in the Software Development Life Cycle (SDLC), from initial design to deployment and ongoing maintenance.
        I am proficient in various programming languages including PHP, C#, and VB.net, and adept at leveraging modern frameworks and libraries such as Laravel, Codeigniter, and Vue.js to build efficient applications. My expertise extends to problem-solving, meticulous debugging, and ensuring code quality through comprehensive testing. I am also well-versed in version control systems like Git, facilitating seamless collaboration and effective project management.
        My experience has allowed me to contribute to various projects, honing my skills in creating impactful digital experiences and continuously adapting to new technologies to deliver high-quality results.
    </p>
    <div class="mt-6">
      <h3 class="font-semibold font-3xl mb-2">{{ $t('personalInformation') }}</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>{{ $t('name') }}:</strong> Vuthy</li>
        <li><strong>{{ $t('email') }}:</strong> vuthy@example.com</li>
        <li><strong>{{ $t('location') }}:</strong> Phnom Penh, Cambodia</li>
        <li><strong>{{ $t('languages') }}:</strong> Khmer, English</li>
        <li><strong>{{ $t('education') }}:</strong> BSc in Computer Science</li>
      </ul>
    </div>

    <h3 class="mt-4 font-semibold">{{ $t('skills') }}</h3>
    <Skill/> 
  </div>
</template>

<script>
    import Skill from '@/components/skill/Skill.vue'
    export default {
        name: 'About',
        components: {
            Skill
        }
    }
</script>

