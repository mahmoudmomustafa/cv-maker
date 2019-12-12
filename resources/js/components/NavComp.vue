<template>
  <nav id="navbar" class="navbar navbar-expand-md navbar-dark shadow-sm">
    <div class="container">
      <a class="navbar-brand">Cv Maker</a>
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
            <router-link class="nav-link" to="/cvs">Your Cvs</router-link>
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
              class="nav-link pl-0 cursor-pointer"
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
import { mapGetters } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      // user: []
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("AUTH_LOGOUT").then(() => {
        this.$router.push({ name: "auth" });
      });
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

nav {
  background: white;
  .navbar-brand {
    // font-family: "Merienda One", cursive
    font-family: 'Pacifico', cursive;
    color: #0f2119;
    &:hover {
      color: #0f2119 !important;
    }
  }
  .navbar-toggler {
    color: #49ab82  !important;
    border-color: none;
    box-shadow: none;
    outline: none;
  }
  .nav-link {
    color: #49ab82  !important;
    font-weight: 600;
    -webkit-transition: 500ms ease;
    transition: 500ms ease;
    border-radius: 2px;
    margin: 0.5rem;
    background: aliceblue;
    padding: 0.3rem 1rem !important;
    // box-shadow: 3px 3px;
    position:relative;
    &:hover::after {
      // background: #49ab82;
      // color: #2c2c2c !important;
      box-shadow: none;
      width: 100%;
    }
    &::after{
    content: '';
    position: absolute;
    background: #56b188;
    width: 0px;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: 500ms ease;
    &:hover{
width:100%
    }
    }
  }
}
</style>
