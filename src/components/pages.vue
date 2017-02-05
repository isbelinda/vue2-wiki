<template>
    <div id="pages">
        <h2>{{title}}</h2>
        <router-link :to="{ name: 'add'}">
            <h3>Add</h3>
        </router-link>
        <div>
            <p v-for="story in stories">
                <router-link :to="{ name: 'view', params: { id: story.id }}">
                    {{story.title}}
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
    import Editor from './editor.vue';
    export default{
        name: 'pages',
        props: ['stories'],
        data(){
            return{
                title: 'Pages'
            }
        },
        components: {
            Editor
        }
    }
</script>