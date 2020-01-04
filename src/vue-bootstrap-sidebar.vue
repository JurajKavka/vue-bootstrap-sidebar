<template>
  <div>
    <!-- Sidebar -->
    <nav id="sidebar" 
      class="vue-bootstrap-sidebar default-theme"
      v-bind:class="[ theme ] && [ show ? 'sidebar-visible' : 'sidebar-hidden' ]"
    >
      <div class="sidebar-header" v-html="header">
      </div>
      <!--<b-card no-body id="mainCard" class="mb-1">-->
      <!--<div class="items-wrapper">-->
      <b-list-group class="items-wrapper">
        <template v-for="(link, index) in links">
          <template v-if="link.href !== undefined">
            <!--<b-card-header header-tag="header" class="p-1 slider-menu-item"
            role="tab" :key="index">-->
            <b-list-group-item :key="index">
              <b-button block 
                :to="link.href" 
                variant="info" 
                class="btn sidebar-menu-item"
              >{{ link.name }}</b-button>
            <!--</b-card-header>-->
            </b-list-group-item>
          </template>
          <template v-else>
            <!--<b-card-header header-tag="header" class="p-1 slider-menu-item" role="tab" :key="index">-->
            <b-list-group-item :key="index">
              <b-button block href="#" v-b-toggle="`accordion-${link.name}`" variant="info" class="sidebar-menu-item dropdown-toggle">{{ link.name }}</b-button>
            </b-list-group-item>
            <!--</b-card-header>-->
            <b-collapse :id="`accordion-${link.name}`" accordion="my-accordion" role="tabpanel" :key="index + 10">
              <b-list-group>
                <b-list-group-item v-for="(child, idx) in link.children" :key="idx">
                  <b-button block variant="primary" class="sidebar-menu-item child-level-1" :to="child.href">{{ child.name }}</b-button>
                </b-list-group-item>
              </b-list-group>
            </b-collapse>
          </template>
        </template>

      <!-- </div>  .items-wrapper -->
      </b-list-group> <!--/ .items-wrapper -->
      <b-button
        id="sidebarButton"
        class="sidebar-button"
        v-bind:class="[ show ? 'visible' : 'hidden' ]"
        @click="onButtonClick"
      >X
      </b-button>
    </nav>
    <div id="navbar" v-bind:class="[ show ? 'sidebar' : 'no-sidebar' ]">
      <slot name="navbar"></slot>
    </div>
    <!-- Hamburger Menu -->
    <div id="content" v-bind:class="[ show ? 'sidebar' : 'no-sidebar' ]">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BootstrapSidebar',
  data () {
    return {
      show: this.initialShow
    }
  },
  props: {
    links: Array,
    initialShow: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'default-theme'
    },
    header: {
      type: String,
      default: 'Sidebar'
    }
  },
  methods: {
    onButtonClick () {
      this.show = !this.show
      this.$emit('sidebarChanged', this.show)
    }
  }
}
</script>
<style lang="scss">
</style>
