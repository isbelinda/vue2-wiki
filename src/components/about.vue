<template>
    <div id="about">
        <h2>{{title}}</h2>
        <p>
            {{content}}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'about',
        data(){
            return{
                title: 'About page',
                content: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.'
            }
        }
    }
</script>

<style>
    p{
        margin-top: 8px;
    }
</style>