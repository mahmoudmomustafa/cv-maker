<template>
  <nav id="navbar" class="navbar navbar-expand-md navbar-dark shadow-sm">
    <div class="container">
      <a class="navbar-brand">Loki</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <ul class="navbar-nav mr-auto flex flex-row">
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cvs">CVS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cvs/create">Create</router-link>
          </li>
        </ul>
        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto flex flex-row">
          <!-- Authentication Links -->
          <li class="nav-item">
            <a class="nav-link text-sm text-gray-300" v-text="user.name">Mahmoud</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link pl-0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Log Out"
              @click="logout"
              style="padding:.2rem .5rem !important"
            >
              <i class="ml-1 fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import store from "../store";

export default {
  name: "navbar",
  data() {
    return {
      user: []
    };
  },
  created() {
    axios
      .get("/init", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {});
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      store.commit("logoutUser");
      this.$router.push({ name: "auth" });
    }
  }
};
</script>

<style scoped lang="scss">
nav {
  // background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background: white;
  padding-top: 0;
  padding-bottom: 0;
  .navbar-brand {
    font-family: "Merienda One", cursive;
    color: #735c87;
    &:hover {
      color: #735c87 !important;
    }
  }
  .navbar-toggler {
    color: #735c87 !important;
    border-color: none;
    box-shadow: none;
    outline: none;
  }
  .nav-link {
    color: #735c87 !important;
    font-weight: 600;
    -webkit-transition: 500ms ease;
    transition: 500ms ease;
    border-radius: 2px;
    margin: 0.5rem;
    background: aliceblue;
    padding: 0.3rem 1rem !important;
    box-shadow: 3px 3px;
    &:hover {
      background: #c6a4e4;
      color: #2c2c2c !important;
      box-shadow: none;
    }
  }
}
</style>
