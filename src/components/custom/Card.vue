<template>
  <div
  class="container elevation-3"
  :style="{ 'background-image': 'url(' + image + ')', 'height': height }" >

    <div class="card-title">
      <h1>{{title}}</h1>
    </div>

    <div class="card-subtitle">
      {{ subtitle }}
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: [ 'image', 'height', 'title', 'subtitle' ],
  }
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  position: relative;
  background-size: cover;
  background-position: 50% 20% !important;
  border-radius: 5px;
}
.card-title {
  position: absolute;
  color: black;
  background-color: rgba(255, 255, 255, 0.6);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 3px;
  border-right: none;
  width: 60%;
  height: 40px;
  text-align: center;
  bottom: 60px;
  right: 0;
}
.card-subtitle {
  position: absolute;
  color: rgb(150, 150, 150);
  background-color: rgba(0, 0, 0, 0.7);
  border: solid 1px rgb(100, 100, 100);
  border-top-left-radius: 3px;
  border-bottom-left-radius: 10px;
  border-right: none;
  padding: 4px;
  width: 45%;
  height: 28px;
  text-align: center;
  bottom: 20px;
  right: 0;
}
</style>
