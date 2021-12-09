<template>
  <v-app light>
    <v-toolbar app color="blue-grey darken-3" class="white--text">
      <v-toolbar-title class="headline text-uppercase">
        <span>Friends</span>
        <span class="font-weight-light">List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
<!--    <v-snackbar-->
<!--        v-model="snackbar"-->
<!--        :bottom="y === 'bottom'"-->
<!--        :left="x === 'left'"-->
<!--        :multi-line="mode === 'multi-line'"-->
<!--        :right="x === 'right'"-->
<!--        :timeout="timeout"-->
<!--        :top="y === 'top'"-->
<!--        :vertical="mode === 'vertical'"-->
<!--        :color="toast"-->
<!--    >{{ text }}</v-snackbar>-->
  </v-app>
</template>

<script>
// import FriendList from "./components/FriendList";
// import data from './assets/data'
// import FriendСard from "./components/FriendСard";

export default {
  name: "App",
  components: {
  }
};
</script>
