# vue-bootstrap-sidebar

`vue-bootstrap-sidebar` is a Vue sidebar menu component build using [`bootstrap-vue`](https://bootstrap-vue.js.org/) components. 
> **Note:** *This is very first version. It will need more effort to have it ready for production (tests, lint, etc.). You can find very nice and more mature alternative [here](https://github.com/yaminncco/vue-sidebar-menu).*

## Preview
For the preview just clone this repository and run "dev" server.
```
git clone https://github.com/JurajKavka/vue-bootstrap-sidebar.git
```
```
npm run serve
```
## Installation
You need to install package and integrate it to Your Vue application.
```
npm install vue-bootstrap-slider
```
or
```
yarn add vue-bootstrap-slider
```
Your main app component can looks like

```html
<template>
  <div id="app">
    <BootstrapSidebar
      :initialShow="show"
      :links="links"
      :header="'<h3>Sidebar</h3>'"
    >
    <template v-slot:navbar>
      <b-navbar id="mainNavbar" toggleable="lg" type="light" variant="light" fixed="top">
        <b-navbar-nav>
          <b-nav-item>
            Navbar Item 1
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </template>
    <template v-slot:content>
     <b-container>
       <router-view></router-view>
     </b-container>
    </template>
    </BootstrapSidebar>
  </div>
</template>

<script>
import BootstrapSidebar from 'vue-bootstrap-sidebar'

export default {
  name: 'app',
  components: {
    BootstrapSidebar
  },
  data () {
    return {
      show: true,
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Blog',
          children: [
            { name: 'Entries', href: '/entries' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/vue-bootstrap-sidebar/src/scss/default-theme.scss';
</style>
```

## TODOs
- publish npm package
- integrate ESLint
- write tests

## Notes
- npm package is created with [`vue-sfc-rollup`](https://www.npmjs.com/package/vue-sfc-rollup)

