<template>
  <div>
    <h1>Diablo 2 Item Value Calculator</h1>

    <form @submit.prevent="calculateValue">
      <div v-for="(max, stat) in maxValues" :key="stat">
        <label :for="stat">{{ stat }}</label>
        <input
          type="number"
          :id="stat"
          v-model.number="itemStats[stat]"
          class="stat-input"
          :max="max"
        />
      </div>
      <button type="submit">Calculate Value</button>
    </form>

    <p>Total Item Value: {{ totalScore }} points</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { maxValues, calculateItemValue } from './components/logic.js';

const maxValuesData = ref(maxValues); // Reference the max values from logic.js
const itemStats = reactive({}); // Holds the user inputs
const totalScore = ref(0);

const calculateValue = () => {
  totalScore.value = calculateItemValue(itemStats);
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 100px; /* Adjust the width to your liking */
  margin-right: 10px; /* This adds space between the label and input */
}

.stat-input {
  width: 100px; /* Adjust as needed */
  padding: 5px;
}
</style>
