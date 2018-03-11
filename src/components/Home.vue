<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn class="black text--white" dark large router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
              <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn class="black text--white" dark large router to="/meetups/create">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item 
                    v-for="meetup in meetups" 
                    :src="meetup.imageUrl" 
                    :key="meetup.id">
                    <div class="title">{{meetup.title}}</div>
                </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups..</p>
            </v-flex>
        </v-layout>
 
    </v-container>
</template>

<script>
export default {
 data() {
     return {
         meetups: [
             {
                 imageUrl : 'http://www.modelunitednations.it/wp-content/uploads/nmun-NY.jpg',
                 id: '3232323',
                 title : 'Meetup in New York'
             },
               {
                 imageUrl: 'https://www.telegraph.co.uk/content/dam/video_previews/v/2/v2exl2nje6lsczqgxklf2mh1qjkhmfu-xlarge.jpg',
                 id: '12412323',
                 title : 'Meetup in Paris'
             },
             
             
         ]
     }
 } 
}
</script>

<style scoped>
    .title {
        position:absolute;
        bottom:50px;
        background: rgba(0,0,0,.5);
        color: white;
        font-size: 2em;
        padding: 20px;
        text-align: center;
    }
    p{
        font-size: 1.5em;
        
    }
</style>