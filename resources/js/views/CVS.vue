<template>
  <div class="main">
    <!-- navbar -->
    <NavComp></NavComp>
    <!-- main page -->
    <main>
      <div class="container">
        <!-- cvs -->
        <section>
          <div class="header">
            <div class="p-4">
              <h2 class="text-2xl">Your Resumes</h2>
            </div>
          </div>
          <div class="body p-4 flex flex-wrap">
            <div class="div flex flex-wrap" v-if="cvs !== []">
              <div
                class="w-full md:w-64 rounded overflow-hidden shadow-lg bg-white cv"
                v-for="cv in cvs"
                :key="cv.id"
              >
                <router-link :to="{ name: 'cv', params:  {cvId:cv.id} }" class="link">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">ID : {{cv.id}}</div>
                    <p class="text-black text-3xl font-bold" v-text="cv.title"></p>
                    <p class="text-gray-700 text-xs font-bold mt-3">Updated at : {{cv.updated_at}}</p>
                  </div>
                </router-link>
              </div>
            </div>
            <!-- create new cv -->
            <router-link to="/cvs/create">
              <div class="w-64 bg-white rounded overflow-hidden shadow create">
                <div class="px-6 py-4 text-center">
                  <div class="font-bold text-xl font-bold mb-2">New Cv</div>
                  <div class="font-bold text-xl mb-2">
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import NavComp from "../components/NavComp.vue";

export default {
  name: "cvs",
  components: {
    NavComp
  },
  data() {
    return {
      cvs: []
    };
  },
  created() {
    axios
      .get("/cvs")
      .then(response => {
        this.cvs = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    getCvs() {}
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
main {
  font-family: "Raleway", sans-serif;
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
      transition: 500ms ease;
      margin: 0.5rem;

      &:hover {
        transform: scale(1.03);
        box-shadow: 5px 6px 0px #8d8d8d !important;
      }
      .px-6 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }
    }
  }
  a:hover {
    color: #252525;
    text-decoration: none;
  }
}
</style>
