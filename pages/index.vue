<template>
  <div class="container">
    <Header class="head"/>
    <div class="content">
      <Education />
      <hr class="secDivider" width="45%">
      <Experience />
      <hr class="secDivider" width="50%">
      <Service />
      <hr class="secDivider" width="55%">
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {}
</script>

<style>
  body {
    background-color: #90a4ae;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-left: 1%;
  }
  .secDivider {
    margin-top: 8%;
    margin-bottom: 8%;
    height: 5px;
    background-color: #fff;
  }
  .head {
    position: sticky;
    top: 0;
    overflow: hidden;
    z-index: 1;
    margin-bottom: 8%;
  }
  .content {
    overflow: hidden;
    z-index: 2;
  }
  
</style>
