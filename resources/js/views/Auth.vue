<template>
  <div class="container-md">
    <div class="contain">
      <!-- {{-- form --}} -->
      <div class="w-full m-5 bg:white flex justify-content-center">
        <!-- forms -->
        <div class="w-full md:w-2/4 form p-3">
          <LoginComp v-if="login"></LoginComp>
          <RegComp v-else></RegComp>
          <!-- social acc-->
          <div class="social p-1">
            <!-- {{-- links --}} -->
            <div class="or position-relative d-flex justify-content-center">
              <span class="font-weight-bold">Or</span>
            </div>
            <div
              class="d-flex flex-row justify-content-center my-2 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0s"
            >
              <!-- {{-- google account --}} -->
              <div class="link">
                <a
                  href="#"
                  class="btn"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Google"
                >
                  <i class="fab fa-google"></i>
                  <span class="d-none">Sign With Google</span>
                </a>
              </div>
              <!-- {{-- facebook account --}} -->
              <div class="link">
                <a
                  href="#"
                  class="btn px-2"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Facebook"
                >
                  <i class="fab fa-facebook-f"></i>
                  <span class="d-none">Sign With Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginComp from "../components/LoginComp.vue";
import RegComp from "../components/RegComp.vue";

export default {
  components: {
    LoginComp,
    RegComp
  },
  data() {
    return {
      login: true
    };
  },
  methods: {
    reg() {
      this.log = !this.log;
    },
    log() {
      this.log = !this.log;
    }
  },
  created() {
    this.$store.commit("logoutUser");
  }
};
</script>
<style lang="scss">
.form {
  background-image: url("/imgs/log.jpg") !important;
}
.log-img {
  .heading {
    width: 100%;
    height: 100%;
    background: #735c8770;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
.navbar-brand {
  font-family: "Pacifico", cursive;
}
</style>