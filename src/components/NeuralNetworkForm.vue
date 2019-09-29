<template>
<div class="container">
  <div class="row">
      <div class="col-4">
        <div class="form-group">
          <input type="number" class="form-control" placeholder="# of Input Layer *Neurons*">
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <input type="number" class="form-control" placeholder="# of Hidden Layers">
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <input type="number" class="form-control" placeholder="# of Output Layer *Neurons*">
        </div>
      </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'NeuralNetworkForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
