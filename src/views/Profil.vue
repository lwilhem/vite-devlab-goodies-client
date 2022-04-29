<template>
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p class="card__subtitle">Voilà donc qui je suis...</p>
    <!-- <p>{{user.prenom}} {{user.nom}} {{user.email}}</p> -->
    <!-- <img :src="user.photo"/> -->
    <div class="form-row">
      <button @click="logout()" class="button">
        Déconnexion
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios';
import { defineComponent } from 'vue'
import { useJwt } from '@vueuse/integrations/useJwt'

export default {
  name: 'Profile',
  created() {
      // axios.get(`http://localhost:5005/api/auth/profile`).then(response => {
      //         // JSON responses are automatically parsed.
      //         console.log(response.data)
      //       })
            
      //       .catch(e => {
      //         this.errors.push(e)
      //       })
    },
  mounted: function () {
    console.log(this.$store.state.userInfos);
    console.log(this.$store.state.user);
    if (this.$store.state.user.userId == -1) {
      this.$router.push('/login');
      return ;
    }
    this.$store.dispatch('getUserInfos');
  },
  computed: {
    ...mapState({
      user: 'userInfos',
    }),
  },
  methods: {
    logout: function () {
        window.localStorage.clear();
        window.onload();
    },
    getInfo: async function() {
      console.log(this.$store.state.user.access_token)
      const test = await axios.get('http://localhost:5005/api/auth/profile', {
        headers: {'Authorization':`Bearer ${this.$store.state.user.access_token}`}
      })
      console.log(test.data)
    }
  }
}
</script>
