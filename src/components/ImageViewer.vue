<template>
  <div class="heroBlock">
    <v-carousel height="800px" hide-delimiters v-model="currentInViewIndex">
      <v-carousel-item
        v-for="(item, i) in imagesInView"
        :key="i"
        :src="item.url"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="title fill-height hidden-xs-only"
          align="center"
          justify="center"
          >{{ item.title }}</v-row
        >
      </v-carousel-item>
    </v-carousel>
    <v-spacer />

    <v-toolbar d-flex flex-row>
      <v-spacer col="8"></v-spacer>
      <v-btn
        class="reject-button"
        primary
        v-on:click="rejectImage(imagesInView[currentInViewIndex].id)"
        >Reject</v-btn
      >
      <v-btn
        class="approve-button"
        v-on:click="approveImage(imagesInView[currentInViewIndex].id)"
        >Approve</v-btn
      >
    </v-toolbar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("images");

export default {
  name: "ImageViewer",
  methods: {
    ...mapActions(["fetchImages", "rejectImage", "approveImage"]),
  },
  computed: {
    ...mapGetters(["imagesInView", "currentInViewIndex"]),
    currentInViewIndex: {
      get() {
        return this.$store.state.images.currentInViewIndex;
      },
      set(value) {
        this.$store.dispatch("images/setCurrentInViewIndex", value);
      },
    },
  },
};
</script>

<style scoped>
.approve-button {
  background-color: #0d47a1 !important;
  color: white;
  margin: 4px;
}

.reject-button {
  background-color: #b71c1c !important;
  color: white;
  margin: 4px;
}
</style>
