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
                      v-model="cv.info.summary_des"
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
                          placeholder="School name"
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
                          v-model="edu.edu_start"
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
                          v-model="edu.edu_end"
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
                <div class="p-1" v-for="(val,key) in cv.educations" :key="key">
                  <div class="flex justify-between">
                    <h4 class="text-sm font-bold" v-if="val.degree_name" v-text="val.degree_name"></h4>
                    <div class="flex">
                      <i
                        class="fas fa-pen text-xs"
                        data-toggle="modal"
                        :data-target="'#add-edu-'+key"
                      ></i>
                      <i
                        class="fas fa-minus-circle text-xs"
                        @click="deleteEdu(key)"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Remove"
                      ></i>
                    </div>
                  </div>
                  <h5
                    class="text-sm font-bold text-gray-700 inline"
                    v-if="val.school_name"
                    v-text="val.school_name"
                  ></h5>
                  <div class="inline" v-text="val.edu_start +'-'+ val.edu_end"></div>
                  <!-- edit model -->
                  <ModelComp model-head="Edit Education" :id="'add-edu-'+key">
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
                            v-model="cv.educations[key].degree_name"
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
                            placeholder="School name"
                            v-model="cv.educations[key].school_name"
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
                            v-model="cv.educations[key].edu_des"
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
                            v-model="cv.educations[key].edu_start"
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
                            v-model="cv.educations[key].edu_end"
                          />
                        </div>
                      </div>
                    </template>
                    <template v-slot:save>
                      <button
                        type="button"
                        class="btn btn-primary bg-blue-500 border-0 text-sm"
                      >Save</button>
                    </template>
                  </ModelComp>
                </div>
                <div class="add flex justify-end">
                  <span class="text-sm text-blue-400" data-toggle="modal" data-target="#add-edu">
                    <i class="fas fa-plus"></i> Add
                  </span>
                </div>
              </SectionComp>
              <!-- exprince -->
              <SectionComp class="exper" section-head="Experience">
                <!-- exp model -->
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
                          placeholder="Job Description"
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
                          name="job_start_date"
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
                          name="job_end_date"
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
                <!-- exp div -->
                <div class="p-1" v-for="(val ,key) in cv.experiences" :key="key">
                  <div class="flex justify-between">
                    <h4 class="text-sm font-bold" v-if="val.title" v-text="val.title"></h4>
                    <div class="flex">
                      <i
                        class="fas fa-pen text-xs"
                        data-toggle="modal"
                        :data-target="'#edit-exp-'+key"
                      ></i>
                      <i
                        class="fas fa-minus-circle text-xs"
                        @click="deleteExp(key)"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Remove"
                      ></i>
                    </div>
                  </div>
                  <h5
                    class="text-sm font-bold text-gray-700 inline"
                    v-if="val.company"
                    v-text="val.company"
                  ></h5>
                  <div class="inline text-sm" v-text="val.start_date +'-'+ val.end_date"></div>
                  <!-- edit model -->
                  <ModelComp model-head="Edit Experience" :id="'edit-exp-'+key">
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
                            v-model="cv.experiences[key].title"
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
                            v-model="cv.experiences[key].company"
                          />
                        </div>
                      </div>
                      <!-- job descr -->
                      <div class="form-group">
                        <div class="md:w-4/5 w-full m-auto">
                          <textarea
                            placeholder="Job Description"
                            class="form-control"
                            id="job-des"
                            v-model="cv.experiences[key].desc"
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
                            name="job_start_date"
                            placeholder="Start date"
                            autocomplete="none"
                            v-model="cv.experiences[key].start_date"
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
                            name="job_end_date"
                            placeholder="End date"
                            autocomplete="none"
                            v-model="cv.experiences[key].end_date"
                          />
                        </div>
                      </div>
                    </template>
                    <template v-slot:save>
                      <button
                        type="button"
                        class="btn btn-primary bg-blue-500 border-0 text-sm"
                      >Save</button>
                    </template>
                  </ModelComp>
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
                v-for="(val, key) in cv.sections"
                :key="key"
                v-bind:section-head="val.secHeading"
              >
                <div class="form-group">
                  <div class="m-auto w-full">
                    <textarea
                      :placeholder="val.secHeading"
                      class="form-control"
                      v-model="val.secDesc"
                    ></textarea>
                  </div>
                </div>
                <div class="flex justify-end">
                  <i
                    class="fas fa-minus-circle text-xs"
                    @click="deleteSec(key)"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Remove"
                  ></i>
                </div>
              </SectionComp>
            </div>
          </div>
          <!-- btn submit -->
          <div class="form-group m-2">
            <div class>
              <button type="submit" class="btn btn-primary">Create Cv</button>
            </div>
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
  name: "create",
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
          summary_des: ""
        },
        experiences: [],
        educations: [],
        sections: [],
        datedSections: []
      },
      edu: {
        degree_name: "",
        school_name: "",
        edu_des: "",
        edu_start: "",
        edu_end: ""
      },
      job: {
        title: "",
        company: "",
        desc: "",
        start_date: "",
        end_date: ""
      },
      newSec: {
        secHeading: "",
        secDesc: ""
      },
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
        edu_start: "",
        edu_end: ""
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
      this.cv.sections.push(this.newSec);
      this.newSec = {
        secHeading: "",
        secDesc: ""
      };
    },
    // add dated sections
    addDatedSec() {
      this.cv.datedSections.push(this.newDateSec);
      this.newDateSec = {
        datedHeading: "",
        datedTitle: "",
        datedOrg: "",
        dateDesc: "",
        startDate: "",
        endDate: ""
      };
    },
    // delete education
    deleteEdu(key) {
      this.$delete(this.cv.educations, key);
    },
    // delete experince
    deleteExp(key) {
      this.$delete(this.cv.experiences, key);
    },
    // delete experince
    deleteSec(key) {
      this.$delete(this.cv.sections, key);
    },
    // submit cv
    createCv() {
      axios
        .post("/cvs/create", this.cv)
        .then(response => {
          // this.$router.replace("/dashboard");
          this.$router.push({ name: "cvs" });
          console.log(response);
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
  .form-control {
    border: 0;
    background: #f4f4f4;
    box-shadow: 0 0 3px #e7e7e7;
    font-size: 0.95rem;
    resize: none;
  }
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
  .p-1 {
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 3px;
  }
  i.fas.fa-pen,
  i.fas.fa-minus-circle.text-xs {
    color: #e1e1e1;
    transition: 500ms ease;
    cursor: pointer;
    margin-left: 0.5rem;
    &:hover {
      color: #f35a5a;
      transform: scale(1.03);
    }
  }
  i.fas.fa-pen:hover {
    color: rgb(71, 255, 178);
  }
  .add {
    margin: 0.5rem;
    span {
      cursor: pointer;
    }
  }
}
</style>