<template>
  <nav id="navbar" class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a class="navbar-brand" href="/">Loki</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="lni-angle-double-down"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <ul class="navbar-nav mr-auto"></ul>
        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
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
export default {
  name: "navbar",
  data() {
    return {
      user: app.user
    };
  },
  methods: {
    logout() {
      axios.get("/init").then(response => {
        app.user = null;
        this.$router.replace("auth");
      });
    }
  }
};
</script>

<style scoped lang="scss">
nav {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  .navbar-brand {
    font-family: "Merienda One", cursive;
  }
}
</style>
