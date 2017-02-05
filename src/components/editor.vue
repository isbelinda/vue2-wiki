<template>
    <div id="editor">
        <h2>{{title}}</h2>
        <label>Title</label>
        <input type="text" name="title" v-model="titleContent">
        <label>Content</label>
        <input type="text" name="content" v-model="content">
        <button @click="save()">Save</button>
    </div>
</template>

<script>
    export default {
        name: 'editor',
        props: ['stories'],
        data(){
            return{
                title: 'Editor'
            }
        },
        methods: {
            save: function(){
                let info = {
                    id: Date.now(),
                    title: this.titleContent,
                    content: this.content
                };
                this.stories.push(info);
                this.$router.push({ name: 'pages' });
            }
        }
    }
</script>