<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p>Send Data</p>
          <v-textarea label="Message" v-model="message" />
        </v-col>
        <v-col class="centered" cols="12">
          <v-btn @click="sendMessage">Send</v-btn>
        </v-col>
        <v-snackbar v-model="snackbar">
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "ConnectionOptions",
  data: () => ({
    message: '{}',
    snackbar: false,
    text: '',
  }),
  methods: {
    sendMessage() {
      try {
        this.ws.send(this.message);
        this.text = 'The message was sent'
      }catch (e) {
          console.log(e);
          this.text = 'Something is wrong'
      }
      this.snackbar = true;
    },
  },
  computed: {
    ws() {
      return this.$store.getters.ws;
    },
  },
};
</script>