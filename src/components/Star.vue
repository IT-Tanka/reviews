<template>
  <span :class="starClass" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';


type StarType = 'full' | 'half';

const props = defineProps<{
  rating: StarType;
}>();


const starClass = computed(() => {
  if (props.rating === 'full') return 'star full';
  if (props.rating === 'half') return 'star half';
  return ''; 
});
</script>

<style scoped>
.star {
  width: 30px;
  height: 30px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
}

.star.full {
  background-image: url('/images/full_star.png');  
}

.star.half {
  background-image: url('/images/half_star.png');  
}
</style>
