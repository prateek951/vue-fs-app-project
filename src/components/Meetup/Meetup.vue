<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h4 class="primary--text">{{meetup.title}}</h4>
                    </v-card-title>
                    <v-card-media
                            :src="meetup.imageUrl"
                            height="400px">
                    </v-card-media>
                    <v-card-text>
                       <div class="info--text">{{meetup.date}} - Where it takes place</div>
                       <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero ducimus totam incidunt assumenda repellendus provident esse laudantium, similique quidem nam sequi, rerum ad dignissimos dolores aperiam enim hic beatae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque facere, atque sunt aut hic quas ex explicabo suscipit, neque ratione praesentium commodi consequuntur in esse a vel quisquam eos.</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark class="green">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
   props: ['id'],
  computed: {
      meetup(){
          return this.$store.getters.loadedMeetup(this.id);
      }
  }
}
</script>
