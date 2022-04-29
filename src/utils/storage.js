import { createStore } from "vuex";
import axios from 'axios';
// const instance = axios.create({
//   baseURL: 'http://localhost:5005/api/auth'
// });
const instance = axios.create({
  baseURL: 'http://localhost:5005/api/',
  timeout: 1000,

});

let user = localStorage.getItem('user');

if (!user) {
    user = {
       userId: -1,
       token: '',
     }; 
   } else {
     try {
       user = JSON.parse(user);
       console.log(user.access_token)
       instance.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`;
     } catch (ex) {
       user = {
         userId: -1,
         token: '',
       };
     }
   }

const store = createStore({
    state: {
        status: '',
        user: user,
        userInfos: {
        //   nom:'',
          username: '',
          email: '',
        //   photo: '',
        },
        userInfos: {
            ProductId: '',
            ProductNumber: '',
          },
        cartInfos: {
          shopId: '',
          buyerId: '',
          productId: '',
          },
      },
    mutations: {
        setStatus: function (state, status){
            state.status = status;
        },
        logUser: function (state, user){
            instance.defaults.headers.common['Authorization'] = user.token;
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        userInfos: function (state, userInfos) {
            state.userInfos = userInfos;
          },
    },
    actions: {
        login: ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/auth/login', userInfos)
            .then(function(response){
                window.location.href = 'profile';
                commit('setStatus', '');
                commit('logUser', response.data);
                // console.log(response.data)
            })
            .catch(function(error){
                commit('setStatus', 'error_login');
                console.log(error);
            })
            })
        },
        createAccount: ({commit}, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
            instance.post('/auth/register', userInfos)
            .then(function(response){
                commit('setStatus', 'created');
                console.log(response)
            })
            .catch(function(error){
                commit('setStatus', 'error_create');
                console.log(error);
            })
            })
        },
        getUserInfos: ({commit}) => {
            instance.get('/auth/profile')
            .then(function (response) { 

              commit('userInfos', response.data.infos);
            })
            .catch(function () {
            });
            
          },
          createCart: ({commit}, cartInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instance.post(`/users/cart/add/5`, cartInfos)
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error);
            })
            })
        },
    }
})
export default store