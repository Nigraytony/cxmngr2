<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app/dashboard"><span class="primary-word">Cx </span>Manager</router-link>
      </header>

      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Dashboard"
            link="/app/dashboard"
            iconName="flaticon-home"
            index="dashboard"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Tasks"
            link="/app/tasks"
            iconName="flaticon-list"
            index="tasks"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Issues"
            link="/app/issues"
            iconName="flaticon-warning"
            index="issues"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Events"
            link="/app/events"
            iconName="flaticon-calendar"
            index="events"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="OPR"
            link="/app/oprs"
            iconName="flaticon-sign"
            index="opr"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Assets"
            link="/app/assets"
            iconName="flaticon-diamond"
            index="assets"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Libraries"
            link="/app/libraries"
            iconName="flaticon-bookmark"
            index="libraries"
            isHeader
        />
      </ul>
      <h5 class="navTitle">
        REPORTS
      </h5>
      <ul class="sidebarLabels">
        <li>
          <a href="#">
            <i class="fa fa-circle text-primary"/>
            <span class="labelName">Asset Summary</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-primary"/>
            <span class="labelName">Checklist Completion</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-danger"/>
            <span class="labelName">Issues Log</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-success"/>
            <span class="labelName">OPR Results</span>
          </a>
        </li>
      </ul>
      <h5 class="navTitle">
        PROJECTS
      </h5>
      <div class="sidebarAlerts">
        <b-alert
            v-for="alert in alerts"
            :key="alert.id"
            class="sidebarAlert" variant="transparent"
            show dismissible
        >
          <span>{{alert.title}}</span><br/>
          <b-progress class="sidebarProgress progress-xs mt-1"
                      :variant="alert.color" :value="alert.value" :max="100"/>
          <small>{{alert.footer}}</small>
        </b-alert>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Suwanee Library Renovation',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'North GA Police Precinct',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
