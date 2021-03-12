<template>
  <base-item-group :item="item" text sub-group />
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  name: "ItemSubGroup",

  props: {
    item: {
      type: Object,
      default: () => ({
        avatar: undefined,
        group: undefined,
        title: undefined,
        children: [],
      }),
    },
  },
};
</script>
