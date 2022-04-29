import { createStore } from "vuex";
import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:5005/api/auth'
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
       instance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
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
                instance.post('/login', userInfos)
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
            instance.post('/register', userInfos)
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
            instance.get('/profile')
            .then(function (response) { 

              commit('userInfos', response.data.infos);
            })
            .catch(function () {
            });
            
          },
        //   createCart: ({commit}, cartInfos) => {
        //     return new Promise((resolve, reject) => {
        //         commit;
        //     instance.post(`1/cart/add/product`, cartInfos)
        //     .then(function(response){
        //         commit('setStatus', 'created');
        //         console.log(response)
        //     })
        //     .catch(function(error){
        //         commit('setStatus', 'error_create');
        //         console.log(error);
        //     })
        //     })
        // },
    }
})
export default store