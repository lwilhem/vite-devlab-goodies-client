<script>

import axios from 'axios';

export default {

  data() {
    return {
      userProduct: [],
      errors: []
    }
  },

  created() {
    axios.get(`http://localhost:5005/users/user`).then(response => {
      // JSON responses are automatically parsed.
      this.userProduct = response.data
      console.log(this.userProduct)

    })

        .catch(e => {
          this.errors.push(e)
        })
  },

}
</script>

<template>
<form method="get">
  <div class="container bg-purple-dark text-white p-5 ">
    <h1 class="text-center">Liste des utillisateurs</h1>
    <div class="row">
      <div class="col">
        <h5 class=""><a href="#">Malaterre Romain</a></h5>
        <div class=" mb-4 candidate-list-option">

        </div>
      </div>
      <div class="col">
        <select class=" form-control" >
          <option>Admin</option>
          <option>Asso</option>
        </select>
      </div>
      <div class="col">
        <ul class="list-unstyled mb-0 d-flex justify-content-end">
          <button>Delete</button>
          <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
        </ul>
      </div>
    </div>
    <span class="border-bottom"></span>


    <div class="row">
      <div class="col">
        <h5 class=""><a href="#">Malaterre Romain</a></h5>
        <div class="candidate-list-option">

        </div>
      </div>
      <div class="col">
        <select class=" form-control" >
          <option>Admin</option>
          <option>Asso</option>
        </select>
      </div>
      <div class="col">
        <ul class="list-unstyled mb-0 d-flex justify-content-end">
          <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
        </ul>
      </div>
    </div>
    <span class="border-bottom"></span>
    <div class="row">
      <div class="col">
        <h5 class=""><a href="#">Malaterre Romain</a></h5>
        <div class="candidate-list-option">

        </div>
      </div>
      <div class="col">
        <select class=" form-control" >
          <option>Admin</option>
          <option>Asso</option>
        </select>
      </div>
      <div class="col">
        <ul class="list-unstyled mb-0 d-flex justify-content-end">
          <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
        </ul>
      </div>
    </div>
    <span class="border-bottom"></span>
    <div class="row">
      <div class="col">
        <h5 class=""><a href="#">Malaterre Romain</a></h5>
        <div class="candidate-list-option">

        </div>
      </div>
      <div class="col">
        <select class=" form-control" >
          <option>Admin</option>
          <option>Asso</option>
        </select>
      </div>
      <div class="col">
        <ul class="list-unstyled mb-0 d-flex justify-content-end">
          <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
        </ul>
      </div>
    </div>
    <span class="border-bottom"></span>
    <div class="row">
      <div class="col">
        <h5 class=""><a href="#">Malaterre Romain</a></h5>
        <div class="candidate-list-option">
        </div>
      </div>
      <div class="col">
        <select class=" form-control" >
          <option>Admin</option>
          <option>Asso</option>
        </select>
      </div>
      <div class="col">
        <ul class="list-unstyled mb-0 d-flex justify-content-end">
          <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
        </ul>
      </div>
    </div>
    <span class="border-bottom"></span>
    <div class="row">
      <div class="col">
        <h5 class=""><a href="#">Malaterre Romain</a></h5>
        <div class="candidate-list-option">
        </div>
      </div>
      <div class="col">
        <select class=" form-control" >
          <option>Admin</option>
          <option>Asso</option>
        </select>

      </div>
      <div class="col">
        <ul class="list-unstyled mb-0 d-flex justify-content-end">
          <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
        </ul>
      </div>
    </div>
    <span class="border-bottom"></span>
    <button type="button" class="btn  btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Enregister
    </button>
  </div>

</form>
</template>