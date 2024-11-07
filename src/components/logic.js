// logic.js
export const maxValues = {
  classSkills: 2, // +2 is max
  fcr: 10,
  lifeLeech: 7,
  manaLeech: 7,
  strength: 20,
  dexterity: 15,
  life: 40,
  mana: 90,
  lifeReplenish: 9,
  attackRating: 120,
  minDamage: 9,
  maxDamage: 9,
  coldRes: 30,
  fireRes: 30,
  lightningRes: 30,
  poisonRes: 30,
  allRes: 11,
};

export function calculateItemValue(itemStats) {
  let totalScore = 0;

  for (let stat in maxValues) {
    const inputValue = parseFloat(itemStats[stat]) || 0;
    totalScore += calculatePoints(inputValue, maxValues[stat]);
  }

  return totalScore;
}

export function calculatePoints(value, max) {
  if (value >= max / 2) {
    return 1;
  } else if (value >= max / 3) {
    return 0.5;
  } else {
    return 0;
  }
}
