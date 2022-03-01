<template>
  <div>
    <v-list-tile avatar router-link to="/friendcard">
      <v-list-tile-avatar>
        <v-icon>fa-user</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>
          <div>{{friend.name}}</div>
        </v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <slot></slot>
      </v-list-tile-action>
    </v-list-tile>
    <v-divider v-if="!last"></v-divider>
  </div>
</template>

<script>
export default {
  name: "Friend",

  props: {
    friend: Object,
    last: Boolean
  }
};
</script>
