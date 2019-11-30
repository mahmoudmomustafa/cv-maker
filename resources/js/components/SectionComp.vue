<template>
  <div class="m-2">
    <div class="w-full bg-white p-4">
      <div class="flex justify-between heading" v-if="sectionHead">
        <h3 class="text-lg font-bold pb-3">{{sectionHead}}</h3>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "sectioncomp",
  props: ["sectionHead"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.heading {
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 1.5rem;
}
</style>
