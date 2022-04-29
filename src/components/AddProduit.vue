<script>

import axios from 'axios';

export default {

  data() {
    return {
      productshop: [],
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
  },

}
</script>

<template>
  <body>
  <div class="container mt-5">
    <form method="post">
      <div class="row mb-3">
        <label for="inputName" class="col-sm-2 col-form-label">Nom du produit</label>
        <div class="col-sm-10">
          <input type="text" class="form-control ">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputName" class="col-sm-2 col-form-label">Prix du produit</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="inputName">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputDescrition" class="col-sm-2 col-form-label">Descrition</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputDescrition">
        </div>
      </div>
      <h1 class="text-center">Ajout d'image</h1>
      <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile01">
      </div>

      <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile02">
      </div>
      <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload">
      </div>

      <div class="input-group">
        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
      </div>
      <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
    </div>
  </body>
</template>