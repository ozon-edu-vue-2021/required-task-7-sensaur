<template>
  <div>
    <v-list-tile avatar>
      <v-list-tile-avatar>
        <v-icon>fa-user</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>
          <div>Здесь будет карточка</div>
        </v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <slot></slot>
      </v-list-tile-action>
    </v-list-tile>
    <v-divider v-if="!last"></v-divider>
    <v-list-tile-content>
      <v-list-tile-title>
        <div>Друзья</div>
      </v-list-tile-title>
    </v-list-tile-content>
    <div>Не в друзьях</div>
    <div>Популярные люди</div>
  </div>
</template>

<script>
export default {
  name: "FriendСard"
}
</script>

<style scoped>

</style>
