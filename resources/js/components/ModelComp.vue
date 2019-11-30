<template>
  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="add-edu"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title text-base font-bold" id="exampleModalLabel">{{ modelHead }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
         <slot name="body"></slot>
        </div>
        <div class="modal-footer border-0">
          <slot name="save"></slot>
          <button
            type="button"
            class="btn btn-outline-secondary border-0 text-sm"
            data-dismiss="modal"
          >Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modelcomp",
  props:[
    'modelHead'
  ],
  data() {
    return {};
  },
  methods: {}
};
</script>
