<sript setup>
</sript>

<template>
  <body>
  <div class="container">
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nom</label>
        <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Prénom</label>
        <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Asso</label>
        <select class="form-select" id="validationCustom04" required>
          <option selected disabled value="">LA 404 </option>
          <option>Liste ASSO</option>
        </select>
        <div class="col-md-4">
          <label for="exampleFormControlFile1">Example file input</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1">
        </div>
      </div>
      <div class="col-md-3">

        <label for="exampleFormControlTextarea1">Descriotion</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="col-12">
        <div class="form-check">
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  </div>
</body>

</template>