<template>
  <div class="container">
    <!-- {{-- form login --}} -->
    <div class="log p-3">
      <!-- {{-- login --}} -->
      <nav class="pb-2">
        <div
          class="float-right wow slideInDown text-gray-200 text-xs"
          data-wow-duration="3s"
          data-wow-delay="0s"
        >
          already a member ?
          <span
            class="text-sm text-gray-200"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Login"
            @click="log"
          >Have an account</span>
        </div>
      </nav>
      <!-- {{-- header --}} -->
      <div class="header p-2 pb-4">
        <h3 class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">Sign Up...</h3>
      </div>
      <!-- {{-- login form --}} -->
      <div class="body wow fadeIn" data-wow-duration="2s" data-wow-delay="0s">
        <form method="POST" @submit.prevent="register">
          <!-- {{-- name --}} -->
          <div class="form-group">
            <div class="md:w-4/5 w-full m-auto">
              <label for="name" class="text-white text-sm font-bold">Full Name</label>
              <input
                @keydown="close()"
                type="text"
                class="form-control"
                :class="[errors.name ? 'border-1 border-red-600':'border-0']"
                placeholder="Full Name"
                required
                autocomplete="none"
                v-model="name"
              />
            </div>
          </div>
          <!-- {{-- email --}} -->
          <div class="form-group">
            <div class="md:w-4/5 w-full m-auto">
              <label for="email" class="text-white text-sm font-bold">
                Email
                Address
              </label>
              <input
                @keydown="close()"
                type="email"
                class="form-control"
                :class="[errors.email ? 'border-1 border-red-600':'border-0']"
                placeholder="Email address"
                required
                autocomplete="none"
                v-model="email"
              />
            </div>
          </div>
          <!--  password  -->
          <div class="form-group">
            <div class="md:w-4/5 w-full m-auto">
              <label for="password" class="text-white text-sm font-bold">Password</label>
              <input
                @keydown="close()"
                type="password"
                class="form-control"
                :class="[errors.password ? 'border-1 border-red-600':'border-0']"
                placeholder="Password"
                autocomplete="none"
                v-model="password"
              />
            </div>
          </div>
          <!-- errors -->
          <div class="relative text-red-500 text-center mb-3" role="alert" v-if="error">
            <strong v-text="error"></strong>
          </div>
          <!-- {{-- submit btn --}} -->
          <div class="form-group mb-0">
            <div class="col-md-8 m-auto text-center">
              <button type="submit" class="btn btn-primary w-100 heartbeat">
                Sign Up
                <i class="fas fa-sign-in-alt"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
      errors: []
    };
  },
  methods: {
    log() {
      this.$parent.login = !this.$parent.login;
    },
    close() {
      this.errors = [];
      this.error = "";
    },
    register() {
      axios
        .post("/register", this.$data)
        .then(response => {
          store.commit("loginUser", response.data);
          localStorage.setItem("token", response.data.access_token);
          this.$store.dispatch("GET_USER");
          this.$router.push({ name: "dashboard" });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.error = error.response.data.message;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.toasts {
  top: 5%;
  right: 0;
}
.toast {
  top: 5%;
  right: 0px;
  opacity: 1;
  min-width: 240px;
  max-width: 300px;
  background: #ff5555;
  box-shadow: 0 0 5px #ff5555;
  color: white;
  z-index: 1;
  font-family: sans-serif;
  animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
