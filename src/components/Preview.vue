/* eslint-disable no-console */
<template>
  <div class="block previewBlock">
    <v-container>
      <v-row>
        <v-col
          v-for="(item, index) in imagesInView"
          :key="item.id"
          v-bind:class="`d-flex child-flex ${isSelected(index)}`"
          cols="1"
          sm="1"
          v-on:click="setCurrentInViewIndex(index)"
        >
          <v-card flat tile class="d-flex">
            <v-img :src="item.url" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("images");
export default {
  name: "Preview",
  methods: {
    ...mapActions([
      "fetchImages",
      "setCurrentInViewIndex",
      "rejectImage",
      "acceptImage",
    ]),
    isSelected: function(index) {
      return index == this.$store.state.images.currentInViewIndex
        ? "image-selected"
        : "";
    },
  },
  computed: {
    ...mapGetters(["imagesInView", "currentInViewIndex"]),
  },
  created() {},
};
</script>

<style>
.image-selected {
  border-style: solid;
  border-width: 5px;
  border-color: darkgrey !important;
}
</style>
