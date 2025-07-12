<template>
  <header class="header">
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">World</a></li>
        <li><a href="#">Tech</a></li>
        <li><a href="#">Sports</a></li>
      </ul>
    </nav>
    <input type="text" placeholder="Search news..." />
  </header>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: #333;
    color: white;
  }
  nav ul {
    display: flex;
    list-style: none;
  }
  nav ul li {
    margin-right: 1em;
  }
  input {
    padding: 0.5em;
  }
</style>
