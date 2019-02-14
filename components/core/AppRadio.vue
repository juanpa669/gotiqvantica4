<template lang="pug">
  v-layout
    v-flex
      v-radio(
        :label="`${item.label} : ${item.value}`"
        :value="item.value"
        :key="item.value"
        mandatory
      )
    v-flex
      v-avatar(sizze="32px")
        img(srrc="/img/icons/lang/flags/en.png")
</template>
<script>
export default {
  name: 'AppRadio',
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  mounted () {
    // console.log(JSON.stringify(item))
  }
}
</script>
