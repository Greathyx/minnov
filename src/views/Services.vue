<template>
    <v-app>
        <v-main style="padding-bottom: 60px">
            <div class="padding">
                <v-row align="center" justify="left" style="margin-top: 60px">
                    <h1 v-if="!isSmall" class="display-2 font-weight-medium"
                        style="margin-bottom: 30px;">Our Services</h1>
                    <h1 v-if="isSmall" class="display-1 font-weight-medium"
                        style="margin-bottom: 30px;">Our Services</h1>
                </v-row>

                <v-row>
                    <v-col cols="12" style="padding-bottom: 0">
                        <p style="text-align: justify">
                            Establishing and extending your business in a totally new country is not easy. The first
                            steps are always full of worries, uncertainties and even risks. With our broad expertise and
                            extensive experiences in various fields, we are committed to make your first steps in
                            European countries safe and easy. We have deep knowledge and practical solutions to assist
                            foreign enterprises to start and excel in this continent.
                        </p>
                    </v-col>
                    <v-col sm="12" md="6" style="padding-top: 0">
                        <!--                        <h3>Total Human Resources Solutions</h3>-->
                        <p style="text-align: justify">
                            Through the trust of our customers, we are well established in European countries. We are
                            now the largest human resources and finance services provider in Nordic countries. We have
                            many successful cases for both large enterprises and medium sized private companies.
                            Satisfied customers is our business foundation. We are transparent - word of mouth marketing
                            to make us popular, and it makes our organic growths in recent years.
                        </p>
                        <v-expansion-panels inset>
                            <v-expansion-panel
                                v-for="(item,i) in our_service"
                                :key="i"
                            >
                                <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    {{item.content}}
                                    <ul>
                                        <li v-for="(li,i) in item.list"
                                            :key="i">
                                            {{li}}
                                        </li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                    <v-col sm="12" md="6">
                        <v-img src="../assets/service.png"></v-img>
                    </v-col>
                </v-row>

                <v-row align="center" justify="left" style="margin-top: 60px">
                    <h1 v-if="!isSmall" class="display-2 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Cases</h1>
                    <h1 v-if="isSmall" class="display-1 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Cases</h1>
                </v-row>

            </div>

            <div style="display: flex; align-items: center; justify-content: center; margin-top: 50px">
                <v-row align="top" justify="center" style="max-width: 1000px">
                    <v-col cols="12" md="3" sm="6">
                        <a class="a" @click.prevent="anchor('case1')">
                            <v-card class="mx-auto case-card" height="320" width="260"
                                    :elevation="elevation1"
                                    @mouseover="onHoverCard(1)" @mouseleave="onLeaveCard(1)"
                            >
                                <v-img
                                    src="../assets/cases/case1-small.png"
                                    height="200px" contain
                                ></v-img>
                                <v-card-title>Successful Case 1</v-card-title>
                                <v-card-subtitle>Partner of Operations, from 0 to 100%</v-card-subtitle>
                            </v-card>
                        </a>
                    </v-col>

                    <v-col cols="12" md="3" sm="6">
                        <a class="a" @click.prevent="anchor('case2')">
                            <v-card class="mx-auto case-card" height="320" width="260"
                                    :elevation="elevation2"
                                    @mouseover="onHoverCard(2)" @mouseleave="onLeaveCard(2)"
                            >
                                <v-img
                                    src="../assets/cases/case2-small.png"
                                    height="200px" contain
                                ></v-img>
                                <v-card-title>Successful Case 2</v-card-title>
                                <v-card-subtitle>Strong in China, fly in Europe</v-card-subtitle>
                            </v-card>
                        </a>
                    </v-col>

                    <v-col cols="12" md="3" sm="6">
                        <a class="a" @click.prevent="anchor('case3')">
                            <v-card class="mx-auto case-card" height="320" width="260"
                                    :elevation="elevation3"
                                    @mouseover="onHoverCard(3)" @mouseleave="onLeaveCard(3)"
                            >
                                <v-img
                                    src="../assets/cases/case3-small.png"
                                    height="200px" contain
                                ></v-img>
                                <v-card-title>Successful Case 3</v-card-title>
                                <v-card-subtitle>Make it easy in difficult times</v-card-subtitle>
                            </v-card>
                        </a>
                    </v-col>

                    <v-col cols="12" md="3" sm="6">
                        <a class="a" @click.prevent="anchor('case4')">
                            <v-card class="mx-auto case-card" height="320" width="260"
                                    :elevation="elevation4"
                                    @mouseover="onHoverCard(4)" @mouseleave="onLeaveCard(4)"
                            >
                                <v-img
                                    src="../assets/cases/case4-small.png"
                                    height="200px" contain
                                ></v-img>
                                <v-card-title>Successful Case 4</v-card-title>
                                <v-card-subtitle>
                                    Mobilizing global resources in supporting business ambition
                                </v-card-subtitle>
                            </v-card>
                        </a>
                    </v-col>
                </v-row>
            </div>

        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'Services',
    data: () => ({
        our_service: [
            {
                name: 'Total Human Resources Solutions',
                content: 'Europe especially Nordic countries have most complicated employment management rules and regulations.  We provide end-to-end HR solutions to all size companies, complete full modules or any selected ones.',
                list: ['Recruitment', 'Dispatch / personnel outsourcing service', 'HR outsourcing / on-site HR support', 'Payroll outsourcing service', 'Mobility service /work permit application', 'Orientation program', 'Culture Training and organizational  Development', 'Termination support']
            },
            {
                name: 'Legal Advisory',
                content: 'Our legal advisors are well respected in their areas. Mitigating risks and ensuring cost-efficient solutions is our ways of handling various tasks.',
                list: ['Company registration', 'Visa and work permit consulting', 'Legal consulting', 'Contract review']
            },
            {
                name: 'Business Consulting',
                content: 'We engaged well-known industrial experts and veterens to help newly established branches to achieve their business ambitions. They are willing to replicate their successes in the past.',
                list: ['Business matching', 'Project management', 'Management service', 'M&A consulting']
            },
            {
                name: 'Finance Services and Solutions',
                content: 'The rules are different, while we have our strong team in providing full scope solutions for both accounting and other financial services',
                list: ['Taxation', 'Bank account management', 'Booking and Accounting', 'Company insurance', 'Payment service']
            },
        ],
        isSmall: false,
        elevation1: 2,
        elevation2: 2,
        elevation3: 2,
        elevation4: 2,
    }),

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
            this.isSmall = window.innerWidth < 600
        },
        onHoverCard: function (card) {
            if (card === 1)
                this.elevation1 = 8
            if (card === 2)
                this.elevation2 = 8
            if (card === 3)
                this.elevation3 = 8
            if (card === 4)
                this.elevation4 = 8
        },
        onLeaveCard: function (card) {
            if (card === 1)
                this.elevation1 = 2
            if (card === 2)
                this.elevation2 = 2
            if (card === 3)
                this.elevation3 = 2
            if (card === 4)
                this.elevation4 = 2
        },
        anchor(anchorName) {
            this.$router.push({
                path: `/successful-cases`,
                query: {
                    anchor: anchorName
                }
            });
        },
    },
}
</script>
