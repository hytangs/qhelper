<template>
  <div>
    <div class="wrapper">
      <side-bar :background-color="backgroundColor">
        <sidebar-link to="/admin">
          <i class="tim-icons icon-chart-pie-36"></i>
          <p>Dashboard</p>
        </sidebar-link>
        <sidebar-link to="/admin">
          <i class="tim-icons icon-atom"></i>
          <p>Icons</p>
        </sidebar-link>
        <sidebar-link to="/admin">
          <i class="tim-icons icon-pin"></i>
          <p>Maps</p>
        </sidebar-link>
        <sidebar-link to="/admin">
          <i class="tim-icons icon-bell-55"></i>
          <p>Notifications</p>
        </sidebar-link>
        <sidebar-link to="/admin">
          <i class="tim-icons icon-single-02"></i>
          <p>User Profile</p>
        </sidebar-link>
        <sidebar-link to="/table">
          <i class="tim-icons icon-puzzle-10"></i>
          <p>Table List</p>
        </sidebar-link>
        <sidebar-link to="/typography">
          <i class="tim-icons icon-align-center"></i>
          <p>Typography</p>
        </sidebar-link>
      </side-bar>
      <div class="main-panel" :data="backgroundColor">

      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/plugins/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/plugins/SidebarPlugin/SidebarLink.vue";

export default {
  name: "AdminConsole.vue",
  components: {
    SideBar,
    SidebarLink,
  },

  data() {
    return {
      backgroundColor: "blue"
    };
  },

  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>

<style scoped>

</style>