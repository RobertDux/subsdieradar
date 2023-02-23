<template>
 <div id="sidebar">
      <a href="#">Menu Item 1</a>
      <a href="#">Menu Item 2</a>
      <a href="#">Menu Item 3</a>
      <a href="#">Menu Item 4</a>
      <a href="#">Menu Item 5</a>
    </div>
    <div id="main-dashboard">
      <div class="left-column">
        <div class="row">Left Column Row 1</div>
        <div class="row">Left Column Row 2</div>
        <div class="row">Left Column Row 3</div>
      </div>
      <div class="right-column">
        <div class="row">Right Column Row 1</div>
        <div class="row">Right Column Row 2</div>
      </div>
    </div>
</template>
<style scoped>
#sidebar {
        background-color: #2c3e50;
        width: 200px;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
      }
      
      #sidebar a {
        display: block;
        color: #fff;
        padding: 10px;
        text-decoration: none;
      }

      /* Styles for main dashboard area */
      #main-dashboard {
        margin-left: 200px;
        padding: 20px;
      }

      /* Styles for left column */
      .left-column {
        background-color: #f1c40f;
        width: calc(50% - 10px);
        float: left;
        margin-right: 10px;
      }

      /* Styles for right column */
      .right-column {
        background-color: #16a085;
        width: calc(50% - 10px);
        float: right;
      }
      
      /* Styles for rows in left column */
      .left-column .row {
        background-color: #34495e;
        margin-bottom: 10px;
        padding: 10px;
      }
      
      /* Styles for rows in right column */
      .right-column .row {
        background-color: #1abc9c;
        margin-bottom: 10px;
        padding: 10px;
      }
</style>

<script>
// @ is an alias to /src
export default {
  name: 'Dashboard-page'
}
</script>

