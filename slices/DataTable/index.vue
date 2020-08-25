<template>
  <table class="table">
    <thead>
      <th v-for="(header, index) in headers" :key="index + header">
        {{ header }}
      </th>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index + row[0]">
        <td v-for="(cell, index) in row" :key="index + cell">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "Table",
  props: ["slice"],
  computed: {
    headers: function() {
      return this.slice.primary.headers[0].text.split(",");
    },
    rows: function() {
      return this.slice.items.map(row => row.row[0].text.split(","));
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid lightgrey;
  text-align: center;
}

th:first-child {
  border-top: none;
  border-left: none;
}

td:first-child {
  font-weight: bold;
  color: grey;
}
</style>
