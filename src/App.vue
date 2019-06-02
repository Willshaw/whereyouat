<template>
  <div id="app">

    <router-view></router-view>

    <footer class="footer">
        <div class="container">
            <span class="text-muted">
                This site uses Google Analytics cookies - don't use it if you're not happy with that.
                <br />
                The media content belongs to it's creator.
                <br />
                Designed, Built and Maintained by 
                <a href="https://willshawmedia.com">Pete Williamson</a>
            </span>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 150px;
}

footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: .5em 0;
    font-size: .9em;
    background-color: #EEE;
    border-top: thin solid #CCC;
}
</style>
