<template>
    <div id="home">
        <h2>{{title}}</h2>
        <p>{{message}}</p>
    </div>

</template>

<script>
    export default {
        name: 'Home',
        props: 'txt',
        data() {
            return {
                title: `Welcome wiki`,
                message: 'You loaded this page on ' + new Date()
            }
        }

    }
</script>