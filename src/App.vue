<template>
  <div id="app">
    <h1>RaspberryPi</h1>
    <h1>溫濕度檢測器</h1>
    <RealtimeData />
    <SpecificDateData /> 
    <Pre7DayData />
  </div>
</template>

<script>
import RealtimeData from './components/RealtimeData.vue';
import Pre7DayData from './components/Pre7DayData.vue';
import SpecificDateData from './components/SpecificDateData.vue';
export default {
  components: {
    RealtimeData,
    Pre7DayData,
    SpecificDateData,
  },
};
</script>

<style lang="scss">

h1 {
  font-size: 3.5rem;
}

@media only screen and (max-width: 767px) {
  html {
  font-size: 12px;
}
}
</style>