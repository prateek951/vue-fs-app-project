// This is auth guard to basically prevent the unauthenticated access to the 
//protected routes
import { store } from '../store';

export default (to, from , next) => {
    if(store.getters.user){
        //we are authenticated
        next();
    }else{
        //if we don't have the user
        //Redirect to the login route
        next('/login');
    }

}