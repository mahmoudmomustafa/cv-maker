<template>
  <div class="main">
    <!-- navbar -->
    <NavComp></NavComp>
    <!-- main page -->
    <main>
      <div class="container">
        <form method="post" class="w-100" @submit.prevent="createCv">
          <div class="flex flex-wrap m-2">
            <!-- left side -->
            <div class="w-full md:w-1/2">
              <!-- add section -->
              <div class="add-sec m-2">
                <div class="dropdown bg-white">
                  <span @click="drop()" class="dropdown">Add section</span>
                  <div class="dropmenu w-100">
                    <span
                      style="font-weight:100;color:#575757;"
                      data-toggle="modal"
                      data-target="#add-section"
                    >
                      <i class="fas fa-plus text-sm mr-1"></i> Add text section
                    </span>
                    <span
                      style="font-weight:100;color:#575757;"
                      data-toggle="modal"
                      data-target="#add-datedSection"
                    >
                      <i class="fas fa-plus text-sm mr-1"></i> Add custom dated section
                    </span>
                  </div>
                </div>
                <!-- text section -->
                <ModelComp model-head="Add text section" id="add-section">
                  <template v-slot:body>
                    <!-- header -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          type="text"
                          class="form-control"
                          name="secHeading"
                          placeholder="Section Heading"
                          v-model="newSec.secHeading"
                        />
                      </div>
                    </div>
                    <!-- desc -->
                    <div class="form-group">
                      <div class="m-auto w-full">
                        <textarea
                          placeholder="Section Description"
                          class="form-control"
                          id="section-des"
                          v-model="newSec.secDesc"
                        ></textarea>
                      </div>
                    </div>
                  </template>
                  <template v-slot:save>
                    <button
                      type="button"
                      class="btn btn-primary bg-blue-500 border-0 text-sm"
                      @click="addSec"
                    >Save</button>
                  </template>
                </ModelComp>
                <!-- dated section -->
                <ModelComp model-head="Add custom dated section" id="add-datedSection">
                  <template v-slot:body>
                    <!-- header -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          type="text"
                          class="form-control"
                          name="datedHeading"
                          placeholder="Dated Heading"
                          v-model="newDateSec.datedHeading"
                        />
                      </div>
                    </div>
                    <!-- dgree name -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="degree_name"
                          type="text"
                          class="form-control"
                          name="datedTitle"
                          placeholder="Title"
                          autocomplete="none"
                          v-model="newDateSec.datedTitle"
                        />
                      </div>
                    </div>
                    <!-- school -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="school_name"
                          type="text"
                          class="form-control"
                          name="DatedOrg"
                          placeholder="Orgnization"
                          autocomplete="none"
                          v-model="newDateSec.datedOrg"
                        />
                      </div>
                    </div>
                    <!-- descr -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <textarea
                          placeholder="Education Description"
                          class="form-control"
                          id="dated-des"
                          v-model="newDateSec.datedDesc"
                        ></textarea>
                      </div>
                    </div>
                    <!-- start date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="edu_end_date"
                          type="text"
                          class="form-control"
                          name="edu_end_date"
                          placeholder="Start date"
                          autocomplete="none"
                          v-model="newDateSec.startDate"
                        />
                      </div>
                    </div>
                    <!-- end date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="edu_end_date"
                          type="text"
                          class="form-control"
                          name="edu_end_date"
                          placeholder="End date"
                          autocomplete="none"
                          v-model="newDateSec.endDate"
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:save>
                    <button
                      type="button"
                      class="btn btn-primary bg-blue-500 border-0 text-sm"
                      @click="addDatedSec"
                    >Save</button>
                  </template>
                </ModelComp>
              </div>
              <!-- info -->
              <SectionComp class="inf" section-head="Personal info.">
                <!-- name -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto">
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="Full Name"
                      autocomplete="none"
                      v-model="cv.info.name"
                    />
                  </div>
                </div>
                <!-- email -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Email Address"
                      autocomplete="none"
                      v-model="cv.info.email"
                    />
                  </div>
                </div>
                <!-- number -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto">
                    <input
                      id="number"
                      type="text"
                      class="form-control"
                      name="number"
                      placeholder="Phone Number"
                      autocomplete="none"
                      v-model="cv.info.number"
                    />
                  </div>
                </div>
                <!-- location -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto">
                    <input
                      id="location"
                      type="text"
                      class="form-control"
                      name="location"
                      placeholder="Location"
                      autocomplete="none"
                      v-model="cv.info.location"
                    />
                  </div>
                </div>
                <!-- title -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto">
                    <input
                      id="title"
                      type="text"
                      class="form-control"
                      name="title"
                      placeholder="Headline / current title"
                      autocomplete="none"
                      v-model="cv.info.title"
                    />
                  </div>
                </div>
                <!-- website -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto">
                    <input
                      id="website"
                      type="text"
                      class="form-control"
                      name="website"
                      placeholder="Personal Website"
                      autocomplete="none"
                      v-model="cv.info.website"
                    />
                  </div>
                </div>
                <!-- website2 -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto">
                    <input
                      id="website2"
                      type="text"
                      class="form-control"
                      name="website2"
                      placeholder="Personal Website"
                      autocomplete="none"
                      v-model="cv.info.website2"
                    />
                  </div>
                </div>
              </SectionComp>
            </div>
            <!-- right sec -->
            <div class="w-full md:w-1/2">
              <!-- summary -->
              <SectionComp class="summary" section-head="Summary">
                <div class="form-group">
                  <div class="m-auto w-full">
                    <textarea
                      placeholder="Summary Description"
                      class="form-control"
                      id="summary-des"
                      v-model="cv.info.summary"
                    ></textarea>
                  </div>
                </div>
              </SectionComp>
              <!-- educaion -->
              <SectionComp class="edu" section-head="Education">
                <!-- edu model -->
                <ModelComp model-head="Add Education" id="add-edu">
                  <template v-slot:body>
                    <!-- dgree name -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="degree_name"
                          type="text"
                          class="form-control"
                          name="degree_name"
                          placeholder="Degree name"
                          autocomplete="none"
                          v-model="edu.degree_name"
                        />
                      </div>
                    </div>
                    <!-- school -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="school_name"
                          type="text"
                          class="form-control"
                          name="school_name"
                          placeholder="school_name"
                          autocomplete="none"
                          v-model="edu.school_name"
                        />
                      </div>
                    </div>
                    <!-- descr -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <textarea
                          placeholder="Education Description"
                          class="form-control"
                          id="edu-des"
                          v-model="edu.edu_des"
                        ></textarea>
                      </div>
                    </div>
                    <!-- start date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="edu_end_date"
                          type="text"
                          class="form-control"
                          name="edu_end_date"
                          placeholder="Start date"
                          autocomplete="none"
                          v-model="edu.edu_start_date"
                        />
                      </div>
                    </div>
                    <!-- end date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="edu_end_date"
                          type="text"
                          class="form-control"
                          name="edu_end_date"
                          placeholder="End date"
                          autocomplete="none"
                          v-model="edu.edu_end_date"
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:save>
                    <button
                      type="button"
                      class="btn btn-primary bg-blue-500 border-0 text-sm"
                      @click="addEdu"
                    >Save</button>
                  </template>
                </ModelComp>
                <!-- edu div -->
                <div class="p-1" v-for="(val,key) in educations" :key="key">
                  <h4 class="text-sm font-bold" v-if="edu.degree_name" v-text="edu.degree_name"></h4>
                  <h5
                    class="text-sm font-bold text-gray-700 inline"
                    v-if="edu.school_name"
                    v-text="edu.school_name"
                  ></h5>
                  <div class="inline" v-text="edu.edu_start_date +'-'+ edu.edu_end_date"></div>
                </div>
                <div class="add flex justify-end">
                  <span class="text-sm text-blue-400" data-toggle="modal" data-target="#add-edu">
                    <i class="fas fa-plus"></i> Add
                  </span>
                </div>
              </SectionComp>
              <!-- exprince -->
              <SectionComp class="exper" section-head="Experience">
                <!-- edu model -->
                <ModelComp model-head="Add Experience" id="add-ex">
                  <template v-slot:body>
                    <!-- job title -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="job_title"
                          type="text"
                          class="form-control"
                          name="job_title"
                          placeholder="Job title"
                          autocomplete="none"
                          v-model="job.title"
                        />
                      </div>
                    </div>
                    <!-- company -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="company_name"
                          type="text"
                          class="form-control"
                          name="company_name"
                          placeholder="Company"
                          autocomplete="none"
                          v-model="job.company"
                        />
                      </div>
                    </div>
                    <!-- job descr -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <textarea
                          placeholder="Education Description"
                          class="form-control"
                          id="job-des"
                          v-model="job.desc"
                        ></textarea>
                      </div>
                    </div>
                    <!-- start date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="job_start_date"
                          type="text"
                          class="form-control"
                          name="start_date"
                          placeholder="Start date"
                          autocomplete="none"
                          v-model="job.start_date"
                        />
                      </div>
                    </div>
                    <!-- end date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          id="job_end_date"
                          type="text"
                          class="form-control"
                          name="end_date"
                          placeholder="End date"
                          autocomplete="none"
                          v-model="job.end_date"
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:save>
                    <button
                      type="button"
                      class="btn btn-primary bg-blue-500 border-0 text-sm"
                      @click="addJob"
                    >Save</button>
                  </template>
                </ModelComp>
                <!-- edu div -->
                <div class="p-1" v-for="(val ,key) in cv.experiences" :key="key">
                  <h4 class="text-sm font-bold" v-if="val.title" v-text="val.title"></h4>
                  <h5
                    class="text-sm font-bold text-gray-700 inline"
                    v-if="val.company"
                    v-text="val.company"
                  ></h5>
                  <div class="inline text-sm" v-text="val.start_date +'-'+ val.end_date"></div>
                </div>
                <!-- add -->
                <div class="add flex justify-end">
                  <span class="text-sm text-blue-400" data-toggle="modal" data-target="#add-ex">
                    <i class="fas fa-plus"></i> Add
                  </span>
                </div>
              </SectionComp>
              <!-- new sections -->
              <SectionComp
                v-for="(val, key) in sections"
                :key="key"
                v-bind:section-head="val.secHeading"
              >
                <div class="form-group">
                  <div class="m-auto w-full">
                    <textarea :placeholder="val.secDesc" class="form-control" v-model="val.secDesc"></textarea>
                  </div>
                </div>
              </SectionComp>
            </div>
          </div>
          <!-- btn submit -->
          <div class="form-group">
              <button type="submit" class="btn btn-primary">Edit</button>
              <button type="button" class="btn btn-danger" @click="deleteCV" data-toggle="tooltip" data-placement="right" title="Delete">
                <img src="/imgs/perspective.svg" width="25" alt="delete">
              </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import NavComp from "../components/NavComp.vue";
import ModelComp from "../components/ModelComp.vue";
import SectionComp from "../components/SectionComp.vue";

export default {
  name: "edit",
  components: {
    NavComp,
    ModelComp,
    SectionComp
  },
  data() {
    return {
      cv: {
        info: {
          name: "",
          number: "",
          email: "",
          title: "",
          location: "",
          website: "",
          website2: "",
          summary: ""
        },
        experiences: {},
        educations: {}
      },
      educations: [],
      edu: {
        degree_name: "",
        school_name: "",
        edu_des: "",
        edu_start_date: "",
        edu_end_date: ""
      },
      job: {
        title: "",
        company: "",
        desc: "",
        start_date: "",
        end_date: ""
      },
      sections: [],
      newSec: {
        secHeading: "",
        secDesc: ""
      },
      datedSections: [],
      newDateSec: {
        datedHeading: "",
        datedTitle: "",
        datedOrg: "",
        dateDesc: "",
        startDate: "",
        endDate: ""
      }
    };
  },
  mounted() {
    // hide add section
    $(".dropmenu").slideUp();
  },
  created() {
    // get cv data
    this.getCv();
  },
  methods: {
    // show dropmenu
    drop() {
      $(".dropmenu").slideToggle();
    },
    // add education
    addEdu() {
      this.cv.educations.push(this.edu);
      this.edu = {
        degree_name: "",
        school_name: "",
        edu_des: "",
        edu_start_date: "",
        edu_end_date: ""
      };
    },
    // adding new job
    addJob() {
      this.cv.experiences.push(this.job);
      this.job = {
        title: "",
        company: "",
        desc: "",
        start_date: "",
        end_date: ""
      };
    },
    // add text sections
    addSec() {
      this.sections.push(this.newSec);
      this.newSec = {
        secHeading: "",
        secDesc: ""
      };
    },
    // add dated sections
    addDatedSec() {
      this.datedSections.push(this.newDateSec);
      this.newDateSec = {
        datedHeading: "",
        datedTitle: "",
        datedOrg: "",
        dateDesc: "",
        startDate: "",
        endDate: ""
      };
    },
    getCv() {
      axios
        .get("/cvs/" + this.$route.params.cvId)
        .then(response => {
          this.cv = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    deleteCV() {
      axios
        .delete("/cvs/" + this.$route.params.cvId)
        .then(response => {
          this.$router.push({ name: "cvs" });
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
main {
  font-family: "Raleway", sans-serif;
  .add-sec span {
    width: 100%;
    color: rgb(19, 19, 19);
    font-size: medium;
    font-weight: 600;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    transition: 500ms ease;
    &:hover {
      color: rgb(88, 88, 88);
      background: rgb(247, 247, 247);
    }
  }
  .btn-danger,
  .btn-primary {
    border: none;
    cursor: pointer;
    transition: 500ms ease;
    background: #34e181;
    margin: 0.5rem;
    padding: 0.5rem 2rem;
    box-shadow: 5px 4px 0px #33c674;
    &:hover {
      box-shadow: none;
    }
  }
  .btn-danger{
        background: #ff4545;
    box-shadow: 5px 3px 0 #f54646;
  }
  .form-control {
    border: 0;
    background: #f4f4f4;
    box-shadow: 0 0 3px #e7e7e7;
    font-size: 0.95rem;
    resize: none;
  }
  .p-1 {
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 3px;
  }
  .add {
    margin: 0.5rem;
    span {
      cursor: pointer;
    }
  }
}
</style>
