//import axios from "axios";

const state = {
  uploadedImages: [],
  currentIndex: 0,
  currentInViewIndex: 0,
  rejectedImages: [],
  currentRejectedImageIndex: 0,
  approvedImages: [],
  currentApprovedImageIndex: 0,
};

const getters = {
  uploadedImages(state) {
    return state.uploadedImages.sort((imageA, imageB) => {
      return imageA.id > imageB.id;
    });
  },
  imagesInView(state, getters) {
    return getters.uploadedImages.slice(
      state.currentIndex,
      state.currentIndex + 10
    );
  },
  currentInViewImage(state, getters) {
    return (currentInviewIndex) => {
      return getters.imagesInView[currentInviewIndex];
    };
  },
  currentIndex(state) {
    return state.currentIndex;
  },
  currentInViewIndex(state) {
    return state.currentInViewIndex;
  },
};

const actions = {
  async fetchImages({ commit }) {
    // eslint-disable-next-line no-console
    console.log("in actions fetchImages");

    const imageCount = 20;
    let images = [];
    for (let index = 0; index < imageCount; index++) {
      let image = {
        url: `https://picsum.photos/id/${index}/1024/728`,
        id: index,
      };

      images.unshift(image);
    }

    commit("setUploadedImages", images);
  },
  async setCurrentIndex({ commit }, index) {
    commit("setCurrentIndex", index);
  },
  async setCurrentInViewIndex({ commit }, index) {
    commit("setCurrentInViewIndex", index);
  },
  async setNextInViewIndex({ commit, state }) {
    let nextInViewIndex = state.currentInviewIndex + 1;
    let nextIndex = state.currentIndex + 1;

    if (nextIndex >= state.uploadedImages.length) {
      nextIndex = state.uploadedIamgeslength - 1;
      nextInViewIndex = state.currentInViewIndex;
    } else {
      if (nextInViewIndex > 9) nextInViewIndex = 0;
    }

    commit("setCurrentIndex", nextIndex);
    commit("setCurrentInViewIndex", nextInViewIndex);
  },
  async setPreviousInViewIndex({ commit, state }) {
    let previousInViewIndex = state.currentInviewIndex - 1;
    let previousIndex = state.currentIndex - 1;

    if (previousIndex < 0) {
      previousIndex = 0;
      previousInViewIndex = 0;
    } else {
      if (previousInViewIndex < 0) previousInViewIndex = 9;
    }

    commit("setCurrentIndex", previousIndex);
    commit("setCurrentInViewIndex", previousInViewIndex);
  },
  async uploadImage({ commit, state }) {
    let nextId =
      state.uploadedImages.length +
      state.approvedImages.length +
      state.rejectedImages.length;

    let image = {
      url: `https://picsum.photos/id/${nextId}/1024/728`,
      id: nextId,
    };
    commit("uploadImage", image);
    commit("setCurrentIndex", state.currentIndex + 1);
  },
  async rejectImage({ commit, state }, id) {
    let image = state.uploadedImages.find((obj) => {
      return obj.id === id;
    });

    if (image) {
      commit("rejectImage", image);
    }
  },
  async approveImage({ commit, state }, id) {
    let image = state.uploadedImages.find((obj) => {
      return obj.id === id;
    });

    if (image) {
      commit("approveImage", image);
    }
  },
};

const mutations = {
  setFutureImages: (state, images) => (state.futureImages = images),
  setUploadedImages: (state, uploadedImages) =>
    (state.uploadedImages = uploadedImages),
  setCurrentIndex: (state, index) => (state.currentIndex = index),
  setCurrentInViewIndex: (state, index) => (state.currentInViewIndex = index),
  uploadImage: (state, image) => {
    state.uploadedImages.unshift(image);
  },
  approveImage: (state, image) => {
    state.uploadedImages = state.uploadedImages.filter(
      (item) => item.id !== image.id
    );
    state.approvedImages.unshift(image);
  },
  rejectImage: (state, image) => {
    state.uploadedImages = state.uploadedImages.filter(
      (item) => item.id !== image.id
    );
    state.rejectedImages.unshift(image);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
