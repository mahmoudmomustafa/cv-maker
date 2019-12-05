<template>
  <div class="container-md">
    <div class="contain">
      <!-- {{-- form --}} -->
      <div class="w-full m-5 shadow bg:white flex">
        <!-- left-side -->
        <div class="hidden md:block md:w-2/4 log-img">
          <div class="heading">
            <h2 class="text-white text-5xl mb-2">LoKi</h2>
            <span class="text-white text-2xl inline my-2">Create your Resume</span>
          </div>
        </div>
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
  }
};
</script>
<style lang="scss">
.log-img {
  position: relative;
  background-image: url("/imgs/log.jpeg");
  background-size: cover;
  .heading {
    width: 100%;
    height: 100%;
    background: #735c8770;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Merienda One", cursive;
  }
}
</style>