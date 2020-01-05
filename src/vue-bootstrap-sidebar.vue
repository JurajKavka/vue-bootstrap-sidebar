<template>
  <div>
    <!-- Sidebar -->
    <nav
      id="sidebar"
      class="vue-bootstrap-sidebar default-theme"
      :class="[ theme ] && [ show ? 'sidebar-visible' : 'sidebar-hidden' ]"
    >
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="sidebar-header"
        v-html="header"
      />
      <!-- eslint-enable -->
      <b-list-group class="items-wrapper">
        <template v-for="(link, index) in links">
          <template v-if="link.href !== undefined">
            <b-list-group-item :key="index">
              <b-button
                block
                :to="link.href"
                variant="info"
                class="btn sidebar-menu-item"
              >
                <component 
                  v-if="link.faIcon" 
                  :is="'font-awesome-icon'" 
                  :icon="link.faIcon"
                />
                {{ link.name }}
              </b-button>
            </b-list-group-item>
          </template>
          <template v-else>
            <b-list-group-item
              :key="index"
            >
              <b-button
                v-b-toggle="`accordion-${link.name}`"
                block
                href="#"
                variant="info"
                class="sidebar-menu-item dropdown-toggle"
              >
                <component 
                  v-if="link.faIcon" 
                  :is="'font-awesome-icon'" 
                  :icon="link.faIcon"
                />
                {{ link.name }}
              </b-button>
            </b-list-group-item>
            <b-collapse
              :id="`accordion-${link.name}`"
              :key="index + 10"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-list-group>
                <b-list-group-item
                  v-for="(child, idx) in link.children"
                  :key="idx"
                >
                  <b-button
                    block
                    variant="primary"
                    class="sidebar-menu-item child-level-1"
                    :to="child.href"
                  >
                    <component 
                      v-if="child.faIcon" 
                      :is="'font-awesome-icon'" 
                      :icon="link.faIcon"
                    />
                    {{ child.name }}
                  </b-button>
                </b-list-group-item>
              </b-list-group>
            </b-collapse>
          </template>
        </template>
      </b-list-group> <!--/ .items-wrapper -->
      <b-button
        id="sidebarButton"
        class="sidebar-button"
        :class="[ show ? 'visible' : 'hidden' ]"
        @click="onButtonClick"
      >
        X
      </b-button>
    </nav>
    <div
      id="navbar"
      :class="[ show ? 'sidebar' : 'no-sidebar' ]"
    >
      <slot name="navbar" />
    </div>
    <!-- Hamburger Menu -->
    <div
      id="content"
      :class="[ show ? 'sidebar' : 'no-sidebar' ]"
    >
      <slot name="content" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BootstrapSidebar',
  props: {
    links: {
      type: Array,
      default: null
    },
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
  data () {
    return {
      show: this.initialShow
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
