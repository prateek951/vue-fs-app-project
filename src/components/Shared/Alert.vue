<template>
  <v-alert error dismissible @input="onClose" :value="true">
      {{text}}
  </v-alert>
</template>


<script>
export default {
    props: ['text'],
    /*Emit an event on the close of the alert*/
    onClose(){
        this.$emit('dismissed');
    }
}
</script>


<style scoped>

</style>
