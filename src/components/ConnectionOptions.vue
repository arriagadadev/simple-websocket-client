<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p>Host Endpoint</p>
          <v-text-field label="Websocket Host" v-model="host" :disabled="ws !== null"/>
        </v-col>
        <v-col cols="12">
          <p>Websocket Protocols</p>
          <v-text-field v-for="(protocol, i) in protocols" :key="i" placeholder="New protocol" v-model="protocol.value" append-icon="mdi-close-circle-outline" @click:append="() => removeProtocol(i)" :disabled="ws !== null"/>
          <v-btn @click="addProtocol" :disabled="ws !== null">Add protocol</v-btn>
        </v-col>
        <v-col class="centered" cols="12">
          <v-btn v-if="ws !== null" @click="closeConnection">Close</v-btn>
          <v-btn v-else @click="openConnection">Open</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
    name: "ConnectionOptions",
    data: () => ({
        host: 'ws://localhost:8000/ws',
        protocols: []
    }),
    methods: {
        addProtocol() {
            this.protocols.push({value: ''})
        },
        removeProtocol(i) {
            this.protocols.splice(i, 1)
        },
        openConnection() {
            if (!this.ws) {
                const client = new WebSocket(this.host, this.protocols.map(protocol => protocol.value))
                client.onopen = () => {
                    this.$store.commit('WS', client)
                }
                client.onclose = () => {
                    this.$store.commit('WS', null)
                }
                client.onmessage = e => {
                    this.$store.commit('ADD_MESSAGE', JSON.parse(e.data))
                }
                client.onerror = e => {
                    console.log("ERROR: \n" + e.data);
                }
            }
        },
        closeConnection() {
            if (this.ws) {
                this.ws.close()
            }
        }
    },
    computed: {
        ws() {
            return this.$store.getters.ws
        }
    }
}
</script>