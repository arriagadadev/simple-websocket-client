<template>
    <v-card width="100%" height="100%" dark>
        <ConnectionOptions/>
        <MessageEmitter v-if="this.$store.getters.ws !== null"/>
    </v-card>
</template>

<script>
import ConnectionOptions from './ConnectionOptions'
import MessageEmitter from './MessageEmitter'
export default {
    name: "SidebarComponent",
    components: { ConnectionOptions, MessageEmitter }
}
</script>
