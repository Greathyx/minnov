<template>
    <v-app>
        <v-app-bar
            app
            clipped-left
            clipped-right
        >
            <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title style="margin-right: 20px">
                <v-img src="./assets/minnov-logo.png" width="200"></v-img>
            </v-toolbar-title>

            <v-tabs id="tab" v-if="!isMobile">
                <v-tabs-slider></v-tabs-slider>
                <v-tab to="/">Home</v-tab>
                <v-tab to="/our-services">Our Services</v-tab>
                <v-tab to="/successful-cases">Successful Cases</v-tab>
                <v-tab to="/contacts">Contacts</v-tab>
            </v-tabs>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list nav dense>
                <v-list-item-group
                    v-model="group"
                    active-class="primary--text text--accent-4"
                >
                    <v-list-item to="/">
                        <v-list-item-title>HOME</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/our-services">
                        <v-list-item-title>OUR SERVICES</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/successful-cases">
                        <v-list-item-title>SUCCESSFUL CASES</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/contacts">
                        <v-list-item-title>CONTACTS</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <!--        <v-main>-->
        <router-view/>
        <!--        </v-main>-->
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        isMobile: false,
        drawer: false,
        group: null,
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },

    beforeDestroy() {
        if (typeof window === 'undefined') return

        window.removeEventListener('resize', this.onResize, {passive: true})
    },

    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize, {passive: true})
    },

    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 750
        },
    },
};
</script>

<style>
#tab a {
    /*font-weight: bold;*/
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
}

#tab a.router-link-exact-active {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
}

.link {
    height: 64px;
    align-items: center;
    display: flex;
    /*font-size: 1rem;*/
    font-size: 0.875rem;
}
</style>