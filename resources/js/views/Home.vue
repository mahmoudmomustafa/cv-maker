<template>
  <div class="main">
    <!-- navbar -->
    <NavComp></NavComp>
    <!-- main page -->
    <main>
      <div class="container">
        <header>
          <div class="m-4 flex shadow">
            <div class="w-full md:w-1/2">
              <div class="p-3 welcome">
                <h2 class="text-3xl font-bold m-1 px-2 py-3">Welcome {{user.name}}</h2>
                <h3 class="text-xl font-bold m-1 p-3 text-gray-800">Build your own Cv by one tap ..</h3>
                <p class="text-lg font-bold m-1 p-3 text-gray-800">Easy, Right !</p>
                <button class="btn btn-primary m-3">Create Cv</button>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="img w-full shadow"></div>
            </div>
          </div>
        </header>
        <!-- cvs -->
        <section>
          <div class="header">
            <div class="p-4">
              <h2 class="text-2xl">Your Resumes</h2>
            </div>
          </div>
          <div class="body p-4 flex flex-wrap">
            <div class="w-64 rounded overflow-hidden shadow-lg bg-white cv">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">ID : 512351</div>
                <p
                  class="text-gray-800 text-sm font-bold"
                >Updated at :</p>
                <p
                  class="text-gray-700 text-base text-center"
                >29-Nov-19</p>
              </div>
              <div class="px-6 py-4 text-center">
                <button class="btn btn-outline-primary rounded-full">Edit</button>
              </div>
            </div>
            <div class="w-64 bg-white rounded overflow-hidden shadow create">
              <div class="px-6 py-4 text-center">
                <div class="font-bold text-xl font-bold mb-2">New Cv</div>
                <div class="font-bold text-xl mb-2">
                  <i class="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      user: app.user
    };
  },
  methods: {}
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
    .welcome {
      .btn {
        border: none;
        cursor: pointer;
        transition: 500ms ease;
        background: #735c87;
        &:hover {
          transform: scale(0.98);
        }
      }
    }
    .img {
      background-image: url(/imgs/cv.jpg);
      height: 300px;
      background-size: cover;
      border-radius: 10px;
      background-repeat: no-repeat;
      background-position: center;
      margin: 0.5rem;
    }
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
      margin: .5rem;

      &:hover {
        transform: scale(1.03);
        box-shadow: 5px 6px 0px #fda085 !important;
      }
    }
    .cv {
      min-height: 300px;
      transition: 500ms ease;
      margin: .5rem;
      min-height: 300px;

      &:hover {
        transform: scale(1.03);
        box-shadow: 5px 6px 0px #8d8d8d !important;
      }
    }
  }
}
</style>
