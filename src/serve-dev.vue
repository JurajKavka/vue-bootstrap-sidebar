<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import BootstrapSidebar from '@/vue-bootstrap-sidebar.vue'

Vue.use(BootstrapVue)

export default Vue.extend({
  name: 'App',
  components: {
    BootstrapSidebar
  },
  data () {
    return {
      show: false,
      header: '<h3>Sidebar</h3>',
      links: [
        { name: 'Link 1',
          children: [
            { name: 'Link Child 1', href: '#' },
            { name: 'Link Child 2', href: '#' }
          ]
        },
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Link 2',
          children: [
            { name: 'Link Child 1', href: '#' },
            { name: 'Link Child 2', href: '#' }
          ]
        },
        { name: 'About 2', href: '#' },
      ]
    }
  },
  methods: {
    onSidebarChanged () {
    }
  }
});
</script>

<template>
  <div id="App">
    <BootstrapSidebar 
      :show="true" 
      :links="links"
      :header="header"
      @sidebarChanged="onSidebarChanged"
    >
      <template v-slot:navbar>
        <b-navbar 
          id="mainNavbar" 
          toggleable="lg" 
          type="light" 
          variant="light" 
          fixed="top"
        >
          <b-navbar-nav>
            <b-nav-item>
              Navbar
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </template>
      
      <template v-slot:content>
        <b-container style="margin-top: 56px">
          <b-row>
            <b-col>
              <h1>What is Lorem Ipsum?</h1>
              <p>
                <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
              </p>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </BootstrapSidebar>
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import './scss/default-theme';
</style>
