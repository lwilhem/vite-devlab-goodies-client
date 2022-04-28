import { createStore } from "vuex";
import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:5005/api/auth'
});

const store = createStore({
    state: {
        status: '',
        user: {
            userId: -1,
            token: '',
        },
    },
    mutations: {
        setStatus: function (state, status){
            state.status = status;
        },
        logUser: function (state, user){
            state.user = user;
        }
    },
    actions: {
        login: ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/login', userInfos)
            .then(function(response){
                // window.location.href = 'profile';
                commit('setStatus', '');
                commit('logUser', response.data);
                console.log(response.data)
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
        }
    }
})
// axios.post('http://localhost:5005/api/auth/register', {
//     username: 'Fred',
//     email: 'Flintstone',
//     password: 'blabla'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
export default store