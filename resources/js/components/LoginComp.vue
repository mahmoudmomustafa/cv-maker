<template>
  <div class="container">
    <div class="log p-3">
      <!-- {{-- register --}} -->
      <nav class="pb-2">
        <div
          class="float-right wow slideInDown text-white text-xs"
          data-wow-duration="3s"
          data-wow-delay="0s"
        >
          Not member ?
          <span
            class="text-sm text-gray-200"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Register"
            @click="reg"
          >Create an account</span>
        </div>
      </nav>
      <!-- {{-- form login --}} -->
      <!-- {{-- header --}} -->
      <div class="header p-2 pb-4">
        <h3 class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">Sign In...</h3>
      </div>
      <!-- {{-- login form --}} -->
      <div class="body wow fadeIn" data-wow-duration="2s" data-wow-delay="0s">
        <form method="POST" @submit.prevent="login">
          <!-- email  -->
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
                placeholder="Email address"
                required
                autocomplete="none"
                v-model="email"
              />
            </div>
          </div>
          <!-- password  -->
          <div class="form-group">
            <div class="md:w-4/5 w-full m-auto">
              <label for="password" class="text-white text-sm font-bold">Password</label>
              <input
                @keydown="close()"
                type="password"
                class="form-control"
                placeholder="Password"
                autocomplete="none"
                v-model="password"
              />
            </div>
          </div>
          <!-- errors -->
          <div class="relative text-red-500 text-center mb-3" role="alert" v-if="errors">
            <strong v-text="errors"></strong>
          </div>
          <!-- submit btn-->
          <div class="form-group mb-0">
            <div class="col-md-8 m-auto text-center">
              <button type="submit" class="btn btn-primary w-100 heartbeat">
                Login
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
import store from "../store";

export default {
  name: "login",
  props: {},
  data() {
    return {
      email: "",
      password: "",
      errors: ""
    };
  },
  methods: {
    reg() {
      this.$parent.login = !this.$parent.login;
    },
    close() {
      this.errors = "";
    },
    login() {
      axios
        .post("/login", this.$data)
        .then(response => {
          store.commit("loginUser", response.data);
          localStorage.setItem("token", response.data.access_token);
          this.$store.dispatch("GET_USER");
          this.$router.push({ name: "dashboard" });
        })
        .catch(error => {
          this.errors = error.response.data.error;
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
