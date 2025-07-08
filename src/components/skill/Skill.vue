<template>
  <section class="skills-section bg-gray-200">
    <p class="skills-summary" v-html="fullStackSkills.conciseSummary"></p>

    <div class="skills-category">
      <h3>Proficient In:</h3>
      <ul class="skills-list">
        <li v-for="skill in fullStackSkills.proficientIn" :key="skill">{{ skill }}</li>
      </ul>
    </div>

    <div class="skills-category">
      <h3>Specializing In:</h3>
      <ul class="skills-list">
        <li v-for="specialty in fullStackSkills.specializingIn" :key="specialty">{{ specialty }}</li>
      </ul>
    </div>

    <div class="skills-detailed">
      <div v-for="(skills, category) in fullStackSkills.detailedBreakdown" :key="category" class="detailed-category">
        <h3>{{ category }}:</h3>
        <ul class="skills-list tags">
          <li v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { fullStackSkills } from '@/data/skillsData.js'; // Adjust path as needed

export default {
  name: 'FullStackSkills',
  data() {
    return {
      fullStackSkills: fullStackSkills
    };
  }
};
</script>

<style scoped>
.skills-section {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.skills-summary {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.skills-category {
  margin-bottom: 20px;
}

.skills-category h3, .skills-detailed h2, .detailed-category h3 {
  color: #0056b3;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

.skills-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Space between list items */
}

.skills-list li {
  background-color: #e2eaf2;
  color: #333;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9em;
  white-space: nowrap; /* Keep tags on a single line */
}

.skills-list.tags .skill-tag {
    background-color: #d6f2d6; /* A slightly different color for detailed tags */
    color: #28a745;
    border: 1px solid #28a745;
}

.skills-detailed {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.detailed-category {
  margin-bottom: 15px;
}
</style>