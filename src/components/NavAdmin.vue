<template>
  <div class="container mb-4 mt-3 ">
  <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <router-link :to="{ path: '/vendeur' }">
    <a class="navbar-brand">Accueil</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link :to="{ path: '/vendeur/produit' }">
          <a class="nav-link">Produit <span class="sr-only">(current)</span></a>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link :to="{ path: '/vendeur/Stock' }">
            <a class="nav-link">Stock <span class="sr-only">(current)</span></a>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link :to="{ path: '/admin/asso' }">
            <a class="nav-link">Association <span class="sr-only">(current)</span></a>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link :to="{ path: '/admin/user' }">
            <a class="nav-link">user <span class="sr-only">(current)</span></a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>