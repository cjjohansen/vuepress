/* eslint-disable no-console */
<template>
  <div class="event-list">
    <div class="d-flex flex-column ms-1 pa-1">
      <h3>Uploaded Images</h3>
      <v-btn v-on:click="uploadImage">simulate event</v-btn>
      <div
        v-for="(item, index) in events"
        :key="item.id"
        v-bind:class="`event-item ${isSelected(index)}`"
        v-on:click="setCurrentIndex(index)"
      >
        <span>{{ item.url }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("images");
export default {
  name: "ImageUploadedEventList",
  methods: {
    ...mapActions([
      "fetchImages",
      "uploadImage",
      "setCurrentIndex",
      "setCurrentInViewIndex",
    ]),
    isSelected: function(index) {
      return index == this.currentIndex ? "event-selected" : "";
    },
  },
  computed: {
    ...mapGetters(["uploadedImages", "currentIndex"]),
    events: {
      get() {
        return this.$store.state.images.uploadedImages;
      },
    },
  },
  created() {
    this.$store.dispatch("images/fetchImages");
  },
};
</script>

<style>
.event-list {
  height: auto;
  width: auto;
  border-style: none;
  border-width: 1px;
  border-color: darkgrey !important;
}

.event-selected {
  border-color: #0d47a1 !important;
  border-style: solid;
}

.event-item {
  width: auto;
  color: rgb(70, 67, 67);
  padding: 2px;
}
</style>
