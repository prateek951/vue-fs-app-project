<template>
    <v-container row wrap>
        <v-layout row class="mt-4 mb-4">
            <v-flex xs12 sm6 offset-sm3>
                <h2>Create a new meetup</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="title"
                            label="Title"
                            id="title"
                            v-model="title"
                            color="black"
                            required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="location"
                            label="location"
                            id="location"
                            v-model="location"
                            color="dark"
                            required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="imageUrl"
                            label="Image URL"
                            id="imageUrl"
                            v-model="imageUrl"
                            color="dark"
                            required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <!-- Preview of the image that you uploaded -->
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="150">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="description"
                            label="Description"
                            id="description"
                            v-model="description"
                            color="black"
                            multi-line
                            required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <!-- If form is invalid disable the button -->
                            <v-btn :disabled="!formIsValid" class="white--text" color="black" type="submit">Create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data(){
      return{
          title : '',
          location: '',
          imageUrl : '',
          description: ''
      }
  },
  computed: {
      formIsValid() {
          return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== ''
      }
  },
  methods: {
      onCreateMeetup(){
          if(!this.formIsValid){
              return;
          }
          const meetupData = {
              title : this.title,
              location:this.location,
              imageUrl : this.imageUrl,
              description: this.description,
              date: new Date()
          }
          this.$store.dispatch('createMeetup',meetupData);
          this.$router.push('/meetups');
      }
  }
}
</script>


<style scoped>

</style>
