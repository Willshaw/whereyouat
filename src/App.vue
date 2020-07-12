<template>
  <div id="app">

    <router-view></router-view>

    <footer class="footer">
        <div class="container">
            <span class="text-muted">
                The media content belongs to its creator.
                <br />
                Designed, Built and Maintained by
                <a href="https://willshawmedia.com">Pete Williamson</a>
                &copy; {{now}}
            </span>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: "App",
    computed: {
      now() {
        const now = new Date()
        const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(now)
        // const m = new Intl.DateTimeFormat('en', { month: 'short' }).format(now)
        // const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(now)

        // return `${d}-${m}-${y}`;
        return y;
      }
    }
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
