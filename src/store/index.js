import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        /*init state of the application*/ 
        loadedMeetups: [
            {
                imageUrl : 'http://www.modelunitednations.it/wp-content/uploads/nmun-NY.jpg',
                id: '1',
                title : 'Meetup in New York',
                date: '2018-07-12'
            },
              {
                imageUrl: 'https://www.telegraph.co.uk/content/dam/video_previews/v/2/v2exl2nje6lsczqgxklf2mh1qjkhmfu-xlarge.jpg',
                id: '12412323',
                title : 'Meetup in Paris',
                date: '2018-07-19'
            }
        ],
        user: {
            id: 'afasdasvdsgesfres',
            registerMeetups: ['12412323']
        }
    },
    mutations: {
        createMeetup(state,payload){
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup({commit},payload){
            const meetup = {
                title : payload.title,
                location: payload.location,
                imageUrl : payload.imageUrl,
                description : payload.description,
                date: payload.date,
                id: 'a12e12eqewfasc'
            }
            //Reach out to firebase and store it
            commit('createMeetup',payload)   
        }
    },
    getters: {
        /*Setting up the getters for the loadedMeetups*/ 
        loadedMeetups (state){
            return state.loadedMeetups.sort((meetupA,meetupB) =>  meetupA.date > meetupB.date);
        },
        featuredMeetups (state) {
            return state.loadedMeetups.slice(0,5);
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                });
            }
        }
    }
})