<template>
  <v-app height="100vh">
    <v-app-bar
      app
    >
      <div class="d-flex align-center">
        <h1>WebsocketClient</h1>
      </div>

      <v-spacer></v-spacer>

      <span class="mr-2">{{ $store.getters.ws ? 'ONLINE' : 'OFFLINE' }}</span>
    </v-app-bar>

    <v-main height="100%">
      <v-container class="main-panel" fluid>
        <v-row height="100%">
          <v-col cols="4" height="100%">
            <Sidebar />
          </v-col>
          <v-col cols="8" height="100%">
            <Messages />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar';
import Messages from './components/Messages';

export default {
  name: 'App',

  components: {
    Sidebar,
    Messages,
},

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
html
  overflow: hidden
.main-panel
  height: 100%
  &>.row
    height: 100%
.centered
  display: flex
  justify-content: center


.light::-webkit-scrollbar-track 
  background: #e6e6e6
  border-left: 1px solid #dadada


.light::-webkit-scrollbar-thumb
  background: #b0b0b0
  border: solid 3px #e6e6e6
  border-radius: 7px


.light::-webkit-scrollbar-thumb:hover
  background: black


.dark::-webkit-scrollbar 
  width: 15px


.dark::-webkit-scrollbar-track
  background: #202020
  border-left: 1px solid #2c2c2c


.dark::-webkit-scrollbar-thumb 
  background: #3e3e3e
  border: solid 3px #202020
  border-radius: 7px


.dark::-webkit-scrollbar-thumb:hover 
  background: white



</style>>