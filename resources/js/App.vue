<template>
    <div class="container">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from "./components/Nav";

    export default {
        components: {
            NavBar
        }
    }
</script>
