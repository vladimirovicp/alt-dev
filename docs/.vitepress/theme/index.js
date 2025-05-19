// import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ProjectList from '../components/ProjectList.vue'

export default {
  // ...Theme,
  ...DefaultTheme,
  Layout,

  enhanceApp({ app }) {
    app.component('ProjectList', ProjectList);
  }
}