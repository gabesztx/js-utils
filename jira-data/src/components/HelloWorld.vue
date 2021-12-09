<template>
  <div class="hello">
    <button @click="onClick">Get Data</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup(){
    const token = "NTUwNjgxNjY5MjQyOuFqi06FiytL7SrgsV3tiV35AJij";
    const config = {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    };
    const GET_ISSUE = "rest/agile/1.0/issue/HUGODEV-16298";
    const GET_ALL_BOARD = "rest/agile/1.0/board";
    const GET_BOARD = "rest/agile/1.0/board/229";
    const GET_ISSUES_FOR_BOARD = "rest/agile/1.0/board/229/issue";
    // const GET_PROJETCS = "rest/agile/1.0/board/229/project";
    const GET_PROJETCS = "rest/api/2/project/10602";
    const host = `http://localhost:8080/${GET_PROJETCS}`;
    const onClick = () => {
      axios.get(host, config).then(
        (response) => {
          console.log(response.data);
        },
        () => {
          console.log("ERROR");
        }
      );
    };
    return {
      onClick
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
