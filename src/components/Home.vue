<template>
    <FriendList v-bind:friends="friends"/>
</template>

<script>
import data from "../assets/data.json";
import FriendList from "./FriendList";

export default {
  name: "Home",
  components: {
    FriendList
  },

  data() {
    return {
      friends: [],
      snackbar: false,
      y: "bottom",
      x: "left",
      mode: "",
      timeout: 3000,
      text: "",
      toast: ""
    };
  },

  mounted() {
    this.friends = data
  },

  methods: {},

  watch: {
    friends() {
      this.toast = "green";
      this.text = "Your Friends List has been updated!";
      this.snackbar = true;
    }
  }
}


</script>

<style scoped>

</style>
