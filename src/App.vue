<template>
  <div id="app">
    <NavBar />
    // ده بيؤوح للراوتس و يعندل كل مكتب ف اللينك المسار يظهرلي المحتوى بتاع اللينك ده
    // if I go to / then show me home component
    <router-view></router-view>
  </div>
</template>

<script>
// بستورده من الفولدر 
import NavBar from "./components/NavBar"

// عشان اسجل الكومبوننتس
export default {
  components: {
    NavBar
  }
}

</script>

<style>

</style>
