<template>
  <v-card width="100%" height="100%">
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(message, i) in $store.getters.messages"
        :key="i"
      >
        <v-expansion-panel-header>
          {{ message.message.topic }} <v-spacer /> {{ message.timestamp.toLocaleString() }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="green--text expansion--block dark">
          <pre>{{ message.message | pretty(4)}}</pre>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: "MessagesComponent",
  methods: {},
  filters: {
    pretty: (val, indent = 2) => {
      if (typeof val === "string") {
        val = JSON.parse(val);
      }
      return JSON.stringify(val, null, indent);
    },
  },
};
</script>

<style lang="sass" scoped>
.expansion--block
    width: 100%
    overflow: auto
</style>