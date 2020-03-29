<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BlatCalendar/>
  </div>
</template>

<script>
import BlatCalendar from './components/Calendar'

export default {
  name: 'App',
  components: {
    BlatCalendar,
  }
}
</script>
