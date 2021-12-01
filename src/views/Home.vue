<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex lg4 md4>
          <ImageUploadedEventList />
        </v-flex>
        <v-flex>
          <ImageViewer />
          <Preview />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ImageUploadedEventList from "../components/ImageUploadedEventList";
import ImageViewer from "../components/ImageViewer";
import Preview from "../components/Preview";
//import LatestPost from "../components/LatestPost";

export default {
  name: "Home",

  components: {
    ImageUploadedEventList,
    ImageViewer,
    Preview,
    // LatestPost,
  },
};
</script>
