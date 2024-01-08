<template>
        <ul class="sidebar" z-index="5">
            <li class="sidebar-item"><v-btn block elevation="10" variant="plain">About Me</v-btn></li>
            <li class="sidebar-item"><v-btn block elevation="10" variant="plain">Skills</v-btn></li>
            <li class="sidebar-item"><v-btn block elevation="10" variant="plain">Recent Projects</v-btn></li>
            <li class="sidebar-item"><v-btn block elevation="10" variant="plain">Experience</v-btn></li>
            <li class="sidebar-item"><v-btn block elevation="10" variant="plain">Support</v-btn></li>
        </ul>
</template>

<script>
export default {
  name: "sidebar-component",
};
</script>

<style>
.sidebar {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgb(60, 60, 60);
    z-index: 100;
    width: calc(100vw - 2rem);
    visibility: hidden;
}

.sidebar-item {
  border: 1px solid rgba(255, 255, 255, 0);
  border-top: 0px;
  list-style: none;
  width: 100%;
  justify-content: start;
}
li:last-child {
    border-radius: 0 0 0.4rem 0.4rem;
}
</style>
