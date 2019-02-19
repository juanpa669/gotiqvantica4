<template>
  <div>
    <h1>This is comment page.</h1>
    <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
