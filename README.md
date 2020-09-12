# :bookmark_tabs: vue-bootstrap-sidebar :bookmark_tabs:

`vue-bootstrap-sidebar` is a Vue sidebar menu component, build using [`bootstrap-vue`](https://bootstrap-vue.js.org/).

> Be sure to check out the [Sidebar component in BootstrapVue](https://bootstrap-vue.org/docs/components/sidebar) firtst. My implementation is older, much simpler, but still in active development.

## Preview
For the preview just clone this repository and run *dev* server.
```
git clone https://github.com/JurajKavka/vue-bootstrap-sidebar.git
```
```
cd vue-bootstrap-sidebar
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

It is up to You, how Your top *navbar* component and *content* looks like. As we are using *bootstrap*, it is good if a whole webpage follows *bootstrap* patterns.

Except that, styles needs to be imported.

```
<style lang="scss">
  @import 'node_modules/vue-bootstrap-sidebar/src/scss/default-theme.scss';
</style>
```

So, Your main `app` component should look like on this example:

```html
<script>
import Vue from 'vue'
import BootstrapSidebar from 'vue-bootstrap-sidebar'

export default Vue.extend({
  name: 'App',
  components: {
    BootstrapSidebar
  },
  data () {
    return {
      initialShow: true,
      header: '<h3>Sidebar</h3>',
      links: [
        { name: 'Home', href: { name: 'home' }, faIcon: ['fas', 'home'] },
        {
          name: 'Dropdown',
          faIcon: ['fas', 'tint'],
          children: [
            {
              name: 'Child Item 1',
              href: {
                name: 'child-item-1'
              },
              faIcon: ['fas', 'child']
            },
            {
              name: 'Child Item 2',
              href: {
                name: 'child-item-2'
              },
              faIcon: ['fas', 'child']
            }
          ]
        },
        { name: 'About', href: { name: 'about' }, faIcon: 'users' },
        { name: 'Contact', href: { name: 'contact' }, faIcon: 'phone' }
      ]
    }
  },
  methods: {
    onSidebarChanged () {
    }
  }
})
</script>

<template>
  <div id="App">
    <BootstrapSidebar
      :initial-show="initialShow"
      :links="links"
      :header="header"
      :fa="true"
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
          <router-view />
        </b-container>
      </template>
    </BootstrapSidebar>
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import 'node_modules/vue-bootstrap-sidebar/src/scss/default-theme';
</style>

```

## Configuration (props)

Configuration options (*props*) of the `BootstrapSidebar` are:

  - `initialShow` - `true`/`false` if the sidebar is initially visible or not (default: `true`)
  - `header` - header for the sidebar. You can also use html tags like `h3`, `strong`, etc.
  - `links` - array of menu items.
    - `href` propery is rendered with `router-link`.
    - `children` property is rendered as dropdown with defined child.
    - `faIcon` renders Font Awesome icon, lef to the menu item. For this feature, You need to install [`vue-fontawesome`](https://github.com/FortAwesome/vue-fontawesome). You can provide icon as array e.g. `['fas', 'user']` or as string e.g.`'user'`.
  - `theme` - custom `scss` theme (default: `default-theme`).

## TODOs
- write tests

## Notes
- npm package is created with [`vue-sfc-rollup`](https://www.npmjs.com/package/vue-sfc-rollup)
