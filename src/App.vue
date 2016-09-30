<template>
    <div id="app">
        <div class="weui_tab">
            <Search></Search>
            <Content></Content>
            <Foot></Foot>
        </div>   
    </div>
</template>

<script>
    import Hello from './components/Hello'
    import Search from './components/Search'
    import Foot from './components/Foot'
    import News from './components/content/News'
    import Content from './components/Content'
    // import router from './Router'
    export default {
        
        
        components: {
            Hello,
            Search,
            Foot,
            News,
            Content
        }
    }
</script>

<style>
@import './assets/css/weui.css';
@import './assets/css/main.css';
html {
  height: 100%;
}

body {
  overflow: hidden;
  height: 100%;
}

#app {
  height:100%;
}
</style>
