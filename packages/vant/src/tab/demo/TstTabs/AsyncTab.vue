<script lang="ts" setup>
import { computed, toRefs } from 'vue';
// import SubTab from '../../Tab';
import SubTab from './SubTab';
const instance = computed(() => SubTab);
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
const { item } = toRefs(props);
</script>
<template>
  <component :is="instance" :id="item.id" :title="item.title"></component>
</template>
