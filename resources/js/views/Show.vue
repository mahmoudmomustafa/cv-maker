<template>
  <div class="main">
    <!-- navbar -->
    <NavComp></NavComp>
    <!-- main page -->
    <main>
      <div class="container">
        <form method="post" class="w-100" @submit.prevent="updateCv">
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
                        <ckeditor :editor="editor" v-model="newSec.secDesc" :config="editorConfig"></ckeditor>
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
                  <div class="md:w-4/5 w-full m-auto relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      autocomplete="none"
                      v-model="cv.info.name"
                      @keydown="clear('info.name')"
                    />
                    <i
                      class="fas fa-times-circle absolute text-sm"
                      v-if="errors['info.name']"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      :title="errors['info.name'][0]"
                    ></i>
                  </div>
                </div>
                <!-- email -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto relative">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      autocomplete="none"
                      v-model="cv.info.email"
                      @keydown="clear('info.email')"
                    />
                    <i
                      class="fas fa-times-circle absolute text-sm"
                      v-if="errors['info.email']"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      :title="errors['info.email'][0]"
                    ></i>
                  </div>
                </div>
                <!-- number -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                      autocomplete="none"
                      v-model="cv.info.number"
                      @keydown="clear('info.number')"
                    />
                    <i
                      class="fas fa-times-circle absolute text-sm"
                      v-if="errors['info.number']"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      :title="errors['info.number'][0]"
                    ></i>
                  </div>
                </div>
                <!-- location -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Location"
                      autocomplete="none"
                      v-model="cv.info.location"
                      @keydown="clear('info.location')"
                    />
                    <i
                      class="fas fa-times-circle absolute text-sm"
                      v-if="errors['info.location']"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      :title="errors['info.location'][0]"
                    ></i>
                  </div>
                </div>
                <!-- title -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Headline / current title"
                      autocomplete="none"
                      v-model="cv.info.title"
                      @keydown="clear('info.title')"
                    />
                    <i
                      class="fas fa-times-circle absolute text-sm"
                      v-if="errors['info.title']"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      :title="errors['info.title'][0]"
                    ></i>
                  </div>
                </div>
                <!-- website -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Personal Website"
                      autocomplete="none"
                      v-model="cv.info.website"
                      @keydown="clear('info.website')"
                    />
                    <i
                      class="fas fa-times-circle absolute text-sm"
                      v-if="errors['info.website']"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      :title="errors['info.website'][0]"
                    ></i>
                  </div>
                </div>
                <!-- website2 -->
                <div class="form-group">
                  <div class="md:w-4/5 w-full m-auto relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Personal Website"
                      autocomplete="none"
                      v-model="cv.info.website2"
                      @keydown="clear('info.website2')"
                    />
                    <i
                      class="fas fa-times-circle absolute text-sm"
                      v-if="errors['info.website2']"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      :title="errors['info.website2'][0]"
                    ></i>
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
                    <ckeditor
                      :editor="editor"
                      v-model="cv.info.summary"
                      :config="editorConfig"
                      @keydown="clear('info.summary')"
                    ></ckeditor>
                    <i
                      class="fas fa-times-circle absolute text-sm"
                      v-if="errors['info.summary']"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      :title="errors['info.summary'][0]"
                      style="top:45px"
                    ></i>
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
                          type="text"
                          class="form-control"
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
                          type="text"
                          class="form-control"
                          placeholder="school_name"
                          autocomplete="none"
                          v-model="edu.school_name"
                        />
                      </div>
                    </div>
                    <!-- descr -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <ckeditor :editor="editor" v-model="edu.edu_des" :config="editorConfig"></ckeditor>
                      </div>
                    </div>
                    <!-- start date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          type="text"
                          class="form-control"
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
                          type="text"
                          class="form-control"
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
                    <div class="div">
                      <h4 class="text-sm font-bold" v-if="val.degree_name" v-text="val.degree_name"></h4>
                      <h5
                        class="text-sm font-bold text-gray-700 inline"
                        v-if="val.school_name"
                        v-text="val.school_name"
                      ></h5>
                      <div class="inline" v-text="val.edu_start +'-'+ val.edu_end"></div>
                    </div>
                    <div class="flex">
                      <i
                        class="fas fa-pen text-xs"
                        data-toggle="modal"
                        :data-target="'#edit-edu-'+key"
                      ></i>
                      <i
                        class="fas fa-minus-circle text-xs"
                        @click="deleteEdu(key,val.id)"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Remove"
                      ></i>
                    </div>
                  </div>
                  <!-- edit edu -->
                  <ModelComp model-head="Edit Education" :id="'edit-edu-'+key">
                    <template v-slot:body>
                      <!-- dgree name -->
                      <div class="form-group">
                        <div class="md:w-4/5 w-full m-auto">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Degree name"
                            v-model="cv.educations[key].degree_name"
                          />
                        </div>
                      </div>
                      <!-- school -->
                      <div class="form-group">
                        <div class="md:w-4/5 w-full m-auto">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="School name"
                            v-model="cv.educations[key].school_name"
                          />
                        </div>
                      </div>
                      <!-- descr -->
                      <div class="form-group">
                        <div class="md:w-4/5 w-full m-auto">
                          <ckeditor
                            :editor="editor"
                            v-model="cv.educations[key].edu_des"
                            :config="editorConfig"
                          ></ckeditor>
                        </div>
                      </div>
                      <!-- start date -->
                      <div class="form-group">
                        <div class="md:w-4/5 w-full m-auto">
                          <input
                            type="text"
                            class="form-control"
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
                            type="text"
                            class="form-control"
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
                          type="text"
                          class="form-control"
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
                          type="text"
                          class="form-control"
                          placeholder="Company"
                          autocomplete="none"
                          v-model="job.company"
                        />
                      </div>
                    </div>
                    <!-- job descr -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <ckeditor :editor="editor" v-model="job.desc" :config="editorConfig"></ckeditor>
                      </div>
                    </div>
                    <!-- start date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          type="text"
                          class="form-control"
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
                          type="text"
                          class="form-control"
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
                    <div class="div">
                      <h4 class="text-sm font-bold" v-if="val.title" v-text="val.title"></h4>
                      <h5
                        class="text-sm font-bold text-gray-700 inline"
                        v-if="val.company"
                        v-text="val.company"
                      ></h5>
                      <div class="inline text-sm" v-text="val.start_date +'-'+ val.end_date"></div>
                    </div>
                    <div class="flex">
                      <i
                        class="fas fa-pen text-xs"
                        data-toggle="modal"
                        :data-target="'#edit-exp-'+key"
                      ></i>
                      <i
                        class="fas fa-minus-circle text-xs"
                        @click="deleteExp(key,val.id)"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Remove"
                      ></i>
                    </div>
                  </div>
                  <!-- edit model -->
                  <ModelComp model-head="Edit Experience" :id="'edit-exp-'+key">
                    <template v-slot:body>
                      <!-- job title -->
                      <div class="form-group">
                        <div class="md:w-4/5 w-full m-auto">
                          <input
                            type="text"
                            class="form-control"
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
                            type="text"
                            class="form-control"
                            placeholder="Company"
                            autocomplete="none"
                            v-model="cv.experiences[key].company"
                          />
                        </div>
                      </div>
                      <!-- job descr -->
                      <div class="form-group">
                        <div class="md:w-4/5 w-full m-auto">
                          <ckeditor
                            :editor="editor"
                            v-model="cv.experiences[key].desc"
                            :config="editorConfig"
                          ></ckeditor>
                        </div>
                      </div>
                      <!-- start date -->
                      <div class="form-group">
                        <div class="md:w-4/5 w-full m-auto">
                          <input
                            type="text"
                            class="form-control"
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
                            type="text"
                            class="form-control"
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
                v-for="(value, keey) in cv.sections"
                :key="'sec'+keey"
                v-bind:section-head="value.secHeading"
              >
                <div class="form-group">
                  <div class="m-auto w-full">
                    <ckeditor :editor="editor" v-model="value.secDesc" :config="editorConfig"></ckeditor>
                  </div>
                </div>
                <div class="flex justify-end">
                  <i
                    class="fas fa-minus-circle text-xs"
                    @click="deleteSec(keey,value.id)"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Remove"
                  ></i>
                </div>
              </SectionComp>
              <!-- dated section -->
              <SectionComp
                v-for="(vals, keys) in cv.datedSections"
                :key="'dated-'+keys"
                v-bind:section-head="vals.datedHeading"
              >
                <!-- dated model -->
                <ModelComp model-head="Add custom date" :id="'add-dated-'+keys">
                  <template v-slot:body>
                    <!-- dgree name -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Title"
                          autocomplete="none"
                          v-model="data.datedTitle"
                        />
                      </div>
                    </div>
                    <!-- school -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Orgnization"
                          autocomplete="none"
                          v-model="data.datedOrg"
                        />
                      </div>
                    </div>
                    <!-- descr -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <ckeditor :editor="editor" v-model="data.datedDesc" :config="editorConfig"></ckeditor>
                      </div>
                    </div>
                    <!-- start date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Start date"
                          autocomplete="none"
                          v-model="data.startDate"
                        />
                      </div>
                    </div>
                    <!-- end date -->
                    <div class="form-group">
                      <div class="md:w-4/5 w-full m-auto">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="End date"
                          autocomplete="none"
                          v-model="data.endDate"
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:save>
                    <button
                      type="button"
                      class="btn btn-primary bg-blue-500 border-0 text-sm"
                      @click="addDate(keys)"
                    >Save</button>
                  </template>
                </ModelComp>
                <!-- dated div -->
                <div class="p-1" v-for="(val ,key) in cv.datedSections[keys].data" :key="key">
                  <div class="flex justify-between">
                    <h4 class="text-sm font-bold" v-if="val.datedTitle" v-text="val.datedTitle"></h4>
                    <div class="flex">
                      <i
                        class="fas fa-minus-circle text-xs"
                        @click="deleteDated(vals.id,val.id,keys,key)"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Remove"
                      ></i>
                    </div>
                  </div>
                  <h5
                    class="text-sm font-bold text-gray-700 inline"
                    v-if="val.datedOrg"
                    v-text="val.datedOrg"
                  ></h5>
                  <div class="inline text-sm" v-text="val.startDate +'-'+ val.endDate"></div>
                </div>
                <!-- add -->
                <div class="add flex justify-end items-center">
                  <span
                    class="text-sm text-blue-400"
                    data-toggle="modal"
                    :data-target="'#add-dated-'+keys"
                  >
                    <i class="fas fa-plus"></i> Add
                  </span>
                  <i
                    class="fas fa-minus-circle text-xs"
                    @click="deleteDateSec(keys,vals.id)"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Remove"
                  ></i>
                </div>
              </SectionComp>
            </div>
          </div>
          <!-- btn submit -->
          <div class="form-group flex align-items-center flex-wrap">
            <button type="submit" class="btn btn-primary">Save Changes</button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteCV"
              data-toggle="tooltip"
              data-placement="right"
              title="Delete"
            >Delete CV</button>
            <a
              :href="'/cvs/'+this.$route.params.cvId +'/pdf'"
              class="inline ml-2"
              target="_blank"
              data-toggle="tooltip"
              data-placement="right"
              title="Download PDF"
            >
              <img src="/imgs/pdf.svg" alt="download-cv" width="40" />
            </a>
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
        experiences: [],
        educations: [],
        sections: [],
        datedSections: []
      },
      data: [],
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
        data: []
      },
      data: {
        datedTitle: "",
        datedOrg: "",
        datedDesc: "",
        startDate: "",
        endDate: ""
      },
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the rich-text editor.
      },
      errors: []
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
    clear(index) {
      this.errors[index] = "";
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
        data: []
      };
    },
    addDate(bla) {
      this.cv.datedSections[bla].data.push(this.data);
      this.data = {
        datedTitle: "",
        datedOrg: "",
        datedDesc: "",
        startDate: "",
        endDate: ""
      };
    },
    // get cv data
    getCv() {
      axios
        .get("/api/cvs/" + this.$route.params.cvId + "/edit", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => {
          this.cv = response.data;
        })
        .catch(error => {
          // console.log(error.response);
        });
    },
    //uodate cv
    updateCv() {
      axios
        .put("/api/cvs/" + this.$route.params.cvId, this.cv)
        .then(response => {
          this.$router.push({ name: "cvs" });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    // delete ducation
    deleteEdu(key, id) {
      this.$delete(this.cv.educations, key);
      if (id) {
        axios
          .delete("/cvs/" + this.$route.params.cvId + "/edu/" + id)
          .then(response => {
            this.$delete(this.cv.educations, key);
          })
          .catch(error => {
            // console.log(error.response);
          });
      }
    },
    // delete experince
    deleteExp(key, id) {
      this.$delete(this.cv.experiences, key);
      if (id) {
        axios
          .delete("/cvs/" + this.$route.params.cvId + "/exp/" + id)
          .then(response => {
            this.$delete(this.cv.experiences, key);
          })
          .catch(error => {
            // console.log(error.response);
          });
      }
    },
    // delete section
    deleteSec(key, id) {
      this.$delete(this.cv.sections, key);
      if (id) {
        axios
          .delete("/cvs/" + this.$route.params.cvId + "/sec/" + id)
          .then(response => {
            this.$delete(this.cv.sections, key);
          })
          .catch(error => {
            // console.log(error.response);
          });
      }
    },
    deleteDateSec(key, id) {
      this.$delete(this.cv.datedSections, key);
      if (id) {
        axios
          .delete("/cvs/" + this.$route.params.cvId + "/datedsec/" + id)
          .then(response => {
            this.$delete(this.cv.datedSections, key);
          })
          .catch(error => {
            // console.log(error.response);
          });
      }
    },
    deleteDated(DataSecID, dataId, keys, key) {
      this.$delete(this.cv.datedSections[keys].data, key);
      if (dataId) {
        axios
          .delete("/datedsec/" + DataSecID + "/datedData/" + dataId)
          .then(response => {
            this.$delete(this.cv.datedSections[keys].data, key);
          })
          .catch(error => {
            // console.log(error.response);
          });
      }
    },
    // delete cv
    deleteCV() {
      axios
        .delete("/cvs/" + this.$route.params.cvId)
        .then(response => {
          this.$router.push({ name: "cvs" });
        })
        .catch(error => {
          // console.log(error.response);
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
  .btn-danger {
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
  .fa-times-circle {
    position: absolute;
    top: 30%;
    right: 10px;
    color: #f54f4f;
  }
  .dropdown,
  .dropmenu {
    display: flex;
    flex-direction: column;
  }
}
</style>