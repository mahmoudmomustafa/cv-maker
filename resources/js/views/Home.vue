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
    // background-color: #3f51b5;
    // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='952' height='952' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%232a367a' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%233f51b5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
      background-image: url('/imgs/create.jpg');

  }
  .welcome {
    .btn {
      border: 1px solid #29388c;
      cursor: pointer;
      transition: 500ms ease;
      background: #212a5e;
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
