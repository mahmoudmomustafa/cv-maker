<template>
  <div class="main">
    <!-- navbar -->
    <NavComp></NavComp>
    <!-- main page -->
    <main>
      <div class="container">
        <header class="mt-5">
          <div class="m-4 flex shadow">
            <div class="w-full md:w-1/2">
              <div class="p-3 welcome">
                <h2 class="text-5xl font-bold m-1 px-2 py-3">Welcome {{user.name}}</h2>
                <h3 class="text-2xl font-bold m-1 p-3 text-gray-800">Build your own Cv by one tap ..</h3>
                <p class="text-lg font-bold m-1 p-3 text-gray-800">Easy, Right !</p>
                <router-link to="/cvs/create">
                  <button class="btn btn-primary m-3">Create Cv</button>
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

export default {
  name: "home",
  components: {
    NavComp
  },
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
  .flex {
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    border-radius: 10px;
    flex-wrap: wrap;
    background-color: #ebebeb;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23ebebeb' width='11' height='11'/%3E%3Crect fill='%23eaebeb' x='10' width='11' height='11'/%3E%3Crect fill='%23eaebeb' y='10' width='11' height='11'/%3E%3Crect fill='%23e9ebeb' x='20' width='11' height='11'/%3E%3Crect fill='%23e8ebeb' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23e7ebeb' y='20' width='11' height='11'/%3E%3Crect fill='%23e7ebeb' x='30' width='11' height='11'/%3E%3Crect fill='%23e6ebeb' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23e5ebeb' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23e5eceb' y='30' width='11' height='11'/%3E%3Crect fill='%23e4eceb' x='40' width='11' height='11'/%3E%3Crect fill='%23e3eceb' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23e2eceb' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23e2eceb' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23e1eceb' y='40' width='11' height='11'/%3E%3Crect fill='%23e0eceb' x='50' width='11' height='11'/%3E%3Crect fill='%23dfeceb' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23dfeceb' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23deeceb' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23ddeceb' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23dceceb' y='50' width='11' height='11'/%3E%3Crect fill='%23dceceb' x='60' width='11' height='11'/%3E%3Crect fill='%23dbeceb' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23daeceb' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23d9eceb' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23d9eceb' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23d8eceb' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23d7edeb' x='70' width='11' height='11'/%3E%3Crect fill='%23d6edeb' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23d6edeb' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23d5edea' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23d4edea' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23d3edea' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23d3edea' x='80' width='11' height='11'/%3E%3Crect fill='%23d2edea' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23d1edea' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23d0edea' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23d0edea' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23cfedea' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23ceedea' x='90' width='11' height='11'/%3E%3Crect fill='%23cdedea' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23ccedea' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23ccedea' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23cbedea' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23caedea' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23c9edea' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23c9edea' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23c8edea' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23c7eeea' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23c6eeea' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23c5eeea' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23c5eeea' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23c4eeea' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23c3eeea' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23c2eeea' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23c1eeea' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23c0eeea' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23c0eeea' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23bfeeea' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23beeeea' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
  }
  .welcome {
    .btn {
      border: none;
      cursor: pointer;
      transition: 500ms ease;
      background: #735c87;
      padding: 0.7rem 2rem;
      box-shadow: 5px 4px 0px #735c87;
      &:hover {
        box-shadow: none;
      }
    }
  }
  .img {
    background-image: url(/imgs/dash.gif);
    height: 400px;
    background-size: cover;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0.5rem;
  }
}

section {
  .body {
    .create {
      min-height: 300px;
      background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 500ms ease;
      margin: 0.5rem;

      &:hover {
        transform: scale(1.03);
        box-shadow: 5px 6px 0px #fda085 !important;
      }
    }
    .cv {
      min-height: 300px;
      transition: 500ms ease;
      margin: 0.5rem;
      min-height: 300px;

      &:hover {
        transform: scale(1.03);
        box-shadow: 5px 6px 0px #8d8d8d !important;
      }
    }
  }
}
</style>
