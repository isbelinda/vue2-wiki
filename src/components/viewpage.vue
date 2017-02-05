<template>
    <div id="view">
        <h2>{{story.title}}</h2>
        <p>{{story.content}}</p>
    </div>
</template>

<script>
    export default {
        name: 'view',
        props: ['stories'],
        data(){
            return{
                title: 'View'
            }
        },
        computed: {
            story(){
                let id = this.$route.params.id;
                return this.stories.find(story => story.id.toString() === id.toString())
            }
        }
    }
</script>