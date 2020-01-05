# vue-bootstrap-sidebar

`vue-bootstrap-sidebar` is a Vue sidebar menu component build using [`bootstrap-vue`](https://bootstrap-vue.js.org/). 
> **Note:** *This is very first version. It will need more effort to have it ready for production (tests, lint, etc.). You can find very nice and more mature alternative [here](https://github.com/yaminncco/vue-sidebar-menu).*

## Preview
For the preview just clone this repository and run "dev" server.
```
git clone https://github.com/JurajKavka/vue-bootstrap-sidebar.git
```
```
npm install
```
```
npm run serve
```
## Installation & integration to Vue app
> **NOTE**: *I assume, that You are already building Vue application with bootstrap. If not, You will need to install and configure [bootstrap-vue](https://bootstrap-vue.js.org/docs).*

> **NOTE:** If You want to use Font Awesome icons, be sure that you have installed and configured [`vue-fontawesome`](https://github.com/FortAwesome/vue-fontawesome).

### Installation from npm registry
You can use `npm`
```
npm install vue-bootstrap-sidebar
```
or `yarn`
```
yarn add vue-bootstrap-sidebar
```

### Integration to  the project

`BootstrapSidebar` component is a wrapper for a whole page with two named *slots*:
 
  - `navbar` - slot for your top *navbar* component
  - `content` - slot for the entire *content* of your page
  
It is up to You, how Your top *navbar* component and *content* looks like. As we are using bootstrap, it is good if a whole webpage follows bootstrap patterns. 

Except that, styles needs to be imported.

```
<style lang="scss">
  @import 'node_modules/vue-bootstrap-sidebar/src/scss/default-theme.scss';
</style>
```

So, Your main `app` component should look like on this example:

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
      header: '<h3>Sidebar</h3>',
      links: [
        { name: 'Home', href: '/', faIcon: 'user-secret' },
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

## Configuration (props)

Configuration options (*props*) of the `BootstrapSidebar` are:

  - `show` - `true`/`false` if the sidebar is initially visible or not (default: `true`)
  - `header` - header for the sidebar. You can also use html tags like `h3`, `strong`, etc.
  - `links` - array of menu items. 
    - `href` propery is rendered with `router-link`. 
    - `children` property is rendered as dropdown with defined child. 
    - `faIcon` renders Font Awesome icon, lef to the menu item. For this feature, You need to install [`vue-fontawesome`](https://github.com/FortAwesome/vue-fontawesome).
  - `theme` - custom `scss` theme (default: `default-theme`). 

## TODOs
- write tests

## Notes
- npm package is created with [`vue-sfc-rollup`](https://www.npmjs.com/package/vue-sfc-rollup)
