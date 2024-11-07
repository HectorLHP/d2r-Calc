<template>
  <div class="app">
    <h1>Diablo 2 Item Value Calculator</h1>

    <!-- New Flex Container for Form and Results -->
    <div class="container">
      <!-- Form with inputs on the left -->
      <form @submit.prevent="calculateValue" class="stat-form">
        <div v-for="(max, stat) in maxValues" :key="stat">
          <label :for="stat">{{ displayNames[stat] || stat }}</label>
          <input
            type="number"
            :id="stat"
            v-model.number="itemStats[stat]"
            class="stat-input"
            :max="max"
          />
        </div>
      </form>

      <!-- Result Section on the right -->
      <div class="results">
        <button @click="calculateValue">Calculate Value</button>
        <p>Total Item Value: {{ totalScore }} points</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { maxValues, calculateItemValue } from './components/logic.js';

const maxValuesData = ref(maxValues); // Reference the max values from logic.js
const itemStats = reactive({}); // Holds the user inputs
const totalScore = ref(0);

const displayNames = {
  fcr: 'Faster Cast Rate',
  strength: 'Strength',
  dexterity: 'Dexterity',
  life: 'Life',
  mana: 'Mana',
  lifeReplenish: 'Life Replenishment',
  lifeLeech: 'Life Leech',
  manaLeech: 'Mana Leech',
  coldRes: 'Cold Resistance',
  fireRes: 'Fire Resistance',
  lightningRes: 'Lightning Resistance',
  poisonRes: 'Poison Resistance',
  attackRating: 'Attack Rating',
  allRes: 'All Resistances',
  minDamage: 'Min Damage',
  maxDamage: 'Max Damage',
  classSkills: 'Class Skills',
};

const calculateValue = () => {
  totalScore.value = calculateItemValue(itemStats);
};
</script>

<style>
h1 {
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 1);
  /* Subtle shadow for the heading */
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden; /* Prevent scrolling */
  display: flex;
}

.app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/roguecamp.jpeg');
  background-size: cover; /* Ensures image covers the entire screen */
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligns content to the left */
  padding: 20px; /* Adds padding around content */
  color: white; /* Makes text more readable */
}

.container {
  display: Flex;
  align-items: flex-start;
  margin-top: 20px;
}

.stat-form {
  margin-right: 50px;
}

.results {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;
  margin-left: 25px;
}

label {
  display: inline-block;
  height: 21px;
  width: 150px; /* Adjust width as needed to fit your longest label */
  margin-right: 10px;
  white-space: nowrap; /* Prevents text from wrapping to a new line */
  overflow: hidden; /* Ensures text won't spill out */
  text-overflow: ellipsis; /* Adds "..." if text exceeds the width */
  text-shadow: 2px 2px 2px rgb(69, 63, 63); /* Light shadow for labels */
  color: #e5ded7; /* Lightens label color to enhance contrast with background */
}

.stat-input {
  width: 100px;
  padding: 5px;
  height: 19px;
}

button {
  font-size: 1rem;
  padding: 10px 20px;
  color: white;
  background-color: #444;
  border: line-width;
  cursor: pointer;
  margin-top: 400px;
}
</style>
