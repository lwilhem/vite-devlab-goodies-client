
<script>
import axios from 'axios';
import {data} from "autoprefixer";

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const product = urlParams.get('id')

export default {

  data() {
    return {
      productshop: [],
      productshop5:[],
      productshop8:[],
      errors: []
    }
  },

  created() {
    axios.get(`http://localhost:5005/api/products/find/2`).then(response => {
      // JSON responses are automatically parsed.
      this.productshop = response.data
      console.log(this.productshop)

    })

        .catch(e => {
          this.errors.push(e)
        })


    axios.get(`http://localhost:5005/api/products/find/5`).then(response => {
      // JSON responses are automatically parsed.
      this.productshop5 = response.data
      console.log(this.productshop5)

    })

        .catch(e => {
          this.errors.push(e)
        })


    axios.get(`http://localhost:5005/api/products/find/8`).then(response => {
      // JSON responses are automatically parsed.
      this.productshop8 = response.data
      console.log(this.productshop8)

    })

        .catch(e => {
          this.errors.push(e)
        })
  },

}

</script>
<template>
  <body>
  <div class="container ">
    <h1>Classment Meilleur Vente</h1>
    <table class="table table-responsive">
      <thead>
      <tr>
        <th>Nom</th>
        <th>Shop ID</th>
        <th>Prix</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <p>{{ productshop.name }}</p>
        <td>{{ productshop.shopId}}</td>
        <td>{{productshop.price}}</td>
      </tr>
      <tr>
        <td>{{productshop5.name}}</td>
        <td>{{ productshop5.shopId}}</td>
        <td>{{ productshop5.price}}</td>
      </tr>
      <tr>
        <td>{{productshop8.name}}}</td>
        <td>{{productshop8.shopId}}</td>
        <td>{{productshop8.price}}</td>
      </tr>
      </tbody>
    </table>
    <div class="flex m-12 flex-wrap">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{productshop.name}}</h5>
        <img src="{{ productshop.picture }}">
        <p class="card-text">{{ productshop.description}}</p>

        <a href="#" class="card-link">Another link</a>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{productshop.name}}</h5>
        <img src="{{ productshop.picture }}">
        <p class="card-text">{{ productshop.description}}</p>

        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{productshop.name}}</h5>
        <img src="{{ productshop.picture }}">
        <p class="card-text">{{ productshop.description}}</p>

        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    </div>
  </div>
  </body>
</template>