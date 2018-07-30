<template>
  <div class="container">
    <div class="big" :style="{ 'background-image': 'url('+ pictures[0] +')' }">
    </div>
    <div class="big">
      <div class="small" :style="{ 'background-image': 'url('+ pictures[1] +')' }">
      </div>
      <div class="small">
        <div class="extrasmall" :style="{ 'background-image': 'url('+ pictures[2] +')' }"></div>
        <div class="extrasmall" :style="{ 'background-image': 'url('+ pictures[3] +')' }"></div>
      </div>
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Preview',
    props: [ 'pictures', 'title'],
  }
</script>

<style scoped>
.container {
  font-size: 0;
  margin: 0;
  padding: 0;
  width: 240px;
  height: 150px;
  position: relative;
}
.container:hover {
  transform: scale(1.02);
}
.big {
  box-shadow: inset -2px -2px 10px -3px rgba(255,255,255,1);
  background-position: center;
  background-size: 250%, 250%, cover;
  width: 120px;
  height: 150px;
  display: inline-block;
}
.small {
  box-shadow: inset -2px -2px 10px -3px rgba(255,255,255,1);
  background-position: center;
  background-size: 250%, 250%, cover;
  width: 120px;
  height: 75px;
}
.extrasmall {
  box-shadow: inset -2px -2px 10px -3px rgba(255,255,255,1);
  background-position: center;
  background-size: 250%, 250%, cover;
  display: inline-block;
  width: 60px;
  height: 75px;
}
.title {
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 240px;
  height: 30px;
  text-align: center;
  color: white;
  position: absolute;
  top: 30px;
}
</style>
