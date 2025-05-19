import Theme from 'vitepress/theme'
import ProjectList from '../components/ProjectList.vue'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('ProjectList', ProjectList);
  }
}