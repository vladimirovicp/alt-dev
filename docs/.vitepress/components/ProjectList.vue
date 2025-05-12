<!-- .vitepress/components/ProjectList.vue -->
<template>
    <h1 v-if="title" class="projects__title">{{ title }}</h1>
    <div class="container">
        <div class="project__list">
            <div 
                v-for="(item, index) in projectsList"
                :key="index" 
                class="project__item"
            >
                <div class="pteject__title">
                    {{ item.name }}
                </div>
                <div class="pteject__description">
                    {{ item.description }}
                </div>
                <div class="pteject__btn">
                    <!-- <a :href="item.link" class="btn">Подробнее</a> -->
                    <a  v-bind:href="`./${item.link}`" class="btn">Подробнее</a>
                   
                </div>


            </div>
        </div>
    </div>

</template>

<script setup>
    import { useData } from 'vitepress';
    const { frontmatter } = useData();
    const title = frontmatter.value.projectList?.title || '';
    const projectsList =  frontmatter.value.projectList?.projects;

</script>

<style scoped>

    .projects__title{
        margin-bottom: 16px;
    }

    .project__list{
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .project__item{
        display:flex;
        flex-direction: column;
        /* width: calc(25% - 16px); */
        width: 272px;

        border-radius: 20px;
        background-color: #F6F6F7;
        padding: 30px;

        flex-shrink: 0;
    }

    .pteject__title{
        font-size: 18px;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.54px;
        padding-bottom: 8px;
    }

    .pteject__description{
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.48px;
        padding-bottom:16px;
    }

    .pteject__btn{
        margin: auto auto 0;
    }

    .btn{
        color: #000;
        text-decoration: none;

        border-radius: 20px;
        padding: 10px 14px;

        border-radius: 60px;
        background-color:  #FFD800;
    }

    @media (hover:hover){
        .btn{
            transition: background-color 0.5s ease-in-out;
        }
        .btn:hover{
            color: #000; 
            background-color:rgb(221, 191, 20);
            /* background: linear-gradient(291deg, #FFD800 20.21%, #FFC900 97%); */
        } 
    }


</style>