import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        /*init state of the application*/ 
        loadedMeetups: [
            {
                imageUrl : 'http://www.modelunitednations.it/wp-content/uploads/nmun-NY.jpg',
                id: '1',
                title : 'Meetup in New York',
                date: new Date(),
                location: 'New York',
                description: 'This is New York'
            },
              {
                imageUrl: 'https://www.telegraph.co.uk/content/dam/video_previews/v/2/v2exl2nje6lsczqgxklf2mh1qjkhmfu-xlarge.jpg',
                id: '12412323',
                title : 'Meetup in Paris',
                date: new Date(),
                location: 'Paris',
                description: 'This is Paris'
            }
        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        createMeetup(state,payload){
            state.loadedMeetups.push(payload)
        },
        setUser(state,payload){
            state.user = payload;
        },
        setLoading(state,payload){
            state.loading = payload;
        },
        setError(state,payload){
            state.error = payload;
        },
        clearError(state){
            state.error = null;
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
        },
        signUserUp({commit},payload){
            commit('setLoading',true);
            commit('clearError');
            // Go for authentication using Firebase SDK
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
            .then(user => {
                commit('setLoading',false);
                const newUser = {
                    id : user.uid,
                    registeredMeetups: []
                }
                commit('setUser',newUser);
            })
            .catch(err =>{ 
                commit('setLoading',false);
                commit('setError',error);
                console.log(err)
            });
            
        },
        logUserIn({commit},payload){
            // Log the user in
            commit('setLoading',true);
            commit('clearError');
            firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
            .then(user => {
                commit('setLoading',false);
                const newUser = {
                    id : user.uid,
                    registeredMeetups : []
                }
                // Commit the mutation from here
                commit('setUser',newUser);
            })
            .catch(err => {
                commit('setError',err);
                console.log(err)
            });
        },
        clearError({commit}){
            commit('clearError');
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
        },
        user (state){
            return state.user;
        },
        loading(state){
            return state.loading;
        },
        error(state){
            return state.error;
        }
    }
})
