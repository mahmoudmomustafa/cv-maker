<template>
  <div class="main">
    <!-- navbar -->
    <NavComp></NavComp>
    <!-- main page -->
    <main>
      <div class="container">
        <header class="mt-5">
          <div class="m-4 flex shadow">
            <div class="w-full md:w-1/2 flex items-center">
              <div class="p-3 welcome">
                <h2 class="text-5xl font-bold m-1 px-2 py-3">Welcome {{user.name}}</h2>
                <h3 class="text-2xl font-bold m-1 p-3 text-white">Build your own Cv by one tap ..</h3>
                <p class="text-lg font-bold m-1 p-3 text-white">Easy, Right !</p>
                <router-link to="/cvs/create">
                  <button class="btn btn-primary m-3 shadow">Get started</button>
                </router-link>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="img w-full shadow"></div>
            </div>
          </div>
        </header>
      </div>
    </main>
  </div>
</template>

<script>
import NavComp from "../components/NavComp.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    NavComp
  },
  data() {
    return {
      // user: []
    };
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
main {
  font-family: "Raleway", sans-serif;
}
header {
  min-height: 300px;
  color: white;
  .flex {
    border-radius: 10px;
    flex-wrap: wrap;
    background-image: url("/imgs/create.jpg");
  }
  .welcome {
    .btn {
      border: 0;
      cursor: pointer;
      transition: 500ms ease;
      background: #357b5e;
      padding: 0.5rem 2.5rem;
      &:hover {
        box-shadow: none;
      }
    }
  }
  .img {
    background-image: url(/imgs/dash.gif);
    height: 450px;
    background-size: cover;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0.5rem;
  }
}
</style>
