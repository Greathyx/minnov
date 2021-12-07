<template>
    <v-main>
        <v-parallax dark
                    src="../assets/parallax.jpg"
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
            <v-overlay value="true" absolute opacity=0.2>
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col class="text-center" cols="12" style="margin-top: 60px">
                        <h1 v-if="!isSmall" class="font-weight-bold display-3"
                            style="line-height: 1.2em">
                            Make Your First Steps in Europe<br>
                            SAFE and EASY.
                        </h1>
                        <h1 v-if="isSmall" class="font-weight-bold display-1"
                            style="line-height: 1.1em">
                            Make Your First Steps in <br>
                            Europe SAFE and EASY.
                        </h1>
                        <h4 v-if="!isSmall" class="font-weight-medium headline"
                            style="margin-top: 40px">
                            <!--                            Minnovated ®-->
                            Staffing | Payroll | HR | Campus Recruitment | International <br>
                            Talent Development Advisory | Project Management.
                        </h4>
                        <h4 v-if="isSmall" class="font-weight-medium subtitle-2"
                            style="margin-top: 40px">
                            <!--                            Minnovated ®-->
                            Staffing | Payroll | HR | Campus Recruitment | International <br>
                            Talent Development Advisory | Project Management.
                        </h4>
                    </v-col>
                </v-row>
            </v-overlay>
        </v-parallax>

        <v-row class="about-us">
            <v-col sm="12" md="6">
                <h1 v-if="!isSmall" class="display-2 font-weight-medium h1-about-us"
                    style="margin-bottom: 20px;">About Us</h1>
                <h1 v-if="isSmall" class="display-1 font-weight-medium h1-about-us"
                    style="margin-bottom: 20px;">About Us</h1>
                <p style="text-align: justify" class="p1-about-us">
                    Headquartered in Stockholm, Sweden, we have extensive business operations in Nordic Countries
                    (Sweden, Norway, Denmark, Finland) and other European countries such as Germany, UK and the
                    Netherlands. We are the largest Human Resource Service provider focusing on Asian/China enterprises
                    in Nordic countries. We provide One-stop Solutions in supporting Asian enterprises to start and
                    expand their overseas business in Europe. Our services cover full range of business operations
                    including but not limited to branch office setup, HR solutions, finance management, compliance
                    management, business consulting, and business expansions etc.
                </p>
                <!--                <div style="margin-bottom: 20px;">About Us</div>-->
                <h3 class="p1-about-us" style="margin-bottom: 10px">SAFE and EASY</h3>
                <div style="width: 135px; height: 4px; background-color: #2196F3; margin-bottom: 10px"
                     id="div-about-us"></div>
                <p class="p1-about-us caption">
                    We are committed to make Asia/China´s enterprises first steps safe and
                    easy in starting and developing their business in Europe.
                </p>
            </v-col>
            <v-col sm="12" md="6" class="img-about-us">
                <v-img src="../assets/about.jpg" alt="about-us"
                       style="height: 400px"></v-img>
            </v-col>
        </v-row>

        <v-row class="about-us">
            <v-col v-if="!isSmall" sm="12" md="6" class="img-about-us">
                <v-img src="../assets/our-business.png" alt="business" contain
                       style="height: 500px"></v-img>
            </v-col>
            <v-col sm="12" md="6" class="map">
                <h1 v-if="!isSmall" class="display-2 font-weight-medium h1-business"
                    style="margin-bottom: 20px;">Our Business Presence</h1>
                <h1 v-if="isSmall" class="display-1 font-weight-medium h1-business"
                    style="margin-bottom: 20px;">Our Business Presence</h1>
                <v-img src="../assets/map.png" contain style="width: 600px"></v-img>
            </v-col>
        </v-row>

        <v-row align="center" justify="center" style="margin-top: 20px" class="h1-expertises">
            <h1 v-if="!isSmall" class="display-2 font-weight-medium"
                style="margin-bottom: 30px;">Our Expertise</h1>
            <h1 v-if="isSmall" class="display-1 font-weight-medium"
                style="margin-bottom: 30px;">Our Expertise</h1>
            <!--            <Experts/>-->
            <h3 style="margin-top: 40px">
                WE HELP YOU TO SUCCEED IN THE NORDICS AND EUROPE COUNTRIES
            </h3>
            <ul class="ul-expertise" v-if="isSmall">
                <li style="margin-top: 16px;">
                    We have 15+ years of rich experience in Human Resources management,
                    Finance Management , Business development and Project management.
                </li>
                <li style="margin-top: 16px;">
                    Our team members have extensive experiences as senior executives or
                    experts in multinational companies of various industries.
                </li>
                <li style="margin-top: 16px;">
                    We are a team with a diverse cultural background. We have a deep
                    understanding of business practices in Europe, especially in the
                    Nordic markets and Asia , as well as a series of processes such as
                    human resources management and financial supervision.
                </li>
                <li style="margin-top: 16px;">
                    We are fluent in English, Swedish, Chinese, German and many other languages.
                </li>
            </ul>
            <v-row v-if="!isSmall" align="top" justify="center" style="margin-top: 40px">
                <v-col sm="12" md="3" style="display: flex; flex-direction: column; align-items: center">
                    <v-avatar color="primary" size="48">
                        <span class="white--text text-h5">1</span>
                    </v-avatar>
                    <p style="text-align: center; margin-top: 30px">
                        We have 15+ years of rich experience in Human Resources management,
                        Finance Management , Business development and Project management.
                    </p>
                </v-col>
                <v-col sm="12" md="3" style="display: flex; flex-direction: column; align-items: center">
                    <v-avatar color="primary" size="48">
                        <span class="white--text text-h5">2</span>
                    </v-avatar>
                    <p style="text-align: center; margin-top: 30px">
                        Our team members have extensive experiences as senior executives or
                        experts in multinational companies of various industries.
                    </p>
                </v-col>
                <v-col sm="12" md="3" style="display: flex; flex-direction: column; align-items: center">
                    <v-avatar color="primary" size="48">
                        <span class="white--text text-h5">3</span>
                    </v-avatar>
                    <p style="text-align: center; margin-top: 30px">
                        We are a team with a diverse cultural background. We have a deep
                        understanding of business practices in Europe, especially in the
                        Nordic markets and Asia , as well as a series of processes such as
                        human resources management and financial supervision.
                    </p>
                </v-col>
                <v-col sm="12" md="3" style="display: flex; flex-direction: column; align-items: center">
                    <v-avatar color="primary" size="48">
                        <span class="white--text text-h5">4</span>
                    </v-avatar>
                    <p style="text-align: center; margin-top: 30px">
                        We are fluent in English, Swedish, Chinese, German and many other languages.
                    </p>
                </v-col>
            </v-row>
        </v-row>

        <v-row style="margin-top: 80px" align="center" justify="center">
            <h1 v-if="isSmall" class="display-1 font-weight-medium h1-about-us"
                style="margin-bottom: 20px;">Our Customers</h1>
            <v-col v-if="!isSmall" sm="12" md="4"
                   style="display: flex; background-color: #2196F3; height: 90vh;
                   color: white; justify-content: center; align-items: center">
                <h1 class="display-2 font-weight-medium"
                    style="margin-bottom: 30px;">Our Customers</h1>
            </v-col>
            <v-col sm="12" md="8">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">Industry</th>
                            <th class="text-left">Sample Customer Profile</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="item in customers"
                            :key="item.name"
                        >
                            <td>{{ item.name }}</td>
                            <td>{{ item.description }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
            <!--            <v-col sm="12" md="8"-->
            <!--                   style="padding: 40px 50px 40px 25px;-->
            <!--                   display: flex; flex-direction: column; justify-content: center">-->
            <!--                <v-row align="center">-->
            <!--                    <v-col cols="6" sm="2">-->
            <!--                        <v-img src="../assets/customers/c6.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="5">-->
            <!--                        <v-img src="../assets/customers/c1.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="2">-->
            <!--                        <v-img src="../assets/customers/c4.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="3">-->
            <!--                        <v-img src="../assets/customers/c2.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                </v-row>-->
            <!--                <v-row align="center">-->
            <!--                    <v-col cols="6" sm="3">-->
            <!--                        <v-img src="../assets/customers/c8.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="2">-->
            <!--                        <v-img src="../assets/customers/c7.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="5">-->
            <!--                        <v-img src="../assets/customers/c3.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="2">-->
            <!--                        <v-img src="../assets/customers/c5.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                </v-row>-->
            <!--                <v-row align="center">-->
            <!--                    <v-col cols="6" sm="3">-->
            <!--                        <v-img src="../assets/customers/c12.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="3">-->
            <!--                        <v-img src="../assets/customers/c11.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="3">-->
            <!--                        <v-img src="../assets/customers/c9.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="3">-->
            <!--                        <v-img src="../assets/customers/c13.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                </v-row>-->
            <!--                <v-row align="center">-->
            <!--                    <v-col cols="6" sm="4">-->
            <!--                        <v-img src="../assets/customers/c15.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="2">-->
            <!--                        <v-img src="../assets/customers/c14.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="3">-->
            <!--                        <v-img src="../assets/customers/c16.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                    <v-col cols="6" sm="3">-->
            <!--                        <v-img src="../assets/customers/c17.png"></v-img>-->
            <!--                    </v-col>-->
            <!--                </v-row>-->
            <!--            </v-col>-->
        </v-row>
    </v-main>
</template>

<script>
// import Experts from "@/components/Experts";

export default {
    name: 'Home',
    // components: {Experts},
    data: () => ({
        isSmall: false,
        customers: [
            {
                name: 'Consumer electronics',
                description: 'No. 1 European mobile phone seller in Q3 2021．Fortune top 350 companies.',
            },
            {
                name: 'Gaming and entertainment',
                description: 'World‘s largest video game vendor, it is among the largest social media, venture capital and investment corporations. Fortune top 200 companies.',
            },
            {
                name: 'Electric vehicles',
                description: 'Youngest high growth EV producer in China, listed in NYSE and HKSE.',
            },
            {
                name: 'Telecommunication',
                description: 'One of the top 10 telecommunication  and technology developer worldwide.',
            },
            {
                name: 'Battery and green energy',
                description: 'One of world’s top 5, Europe largest battery developer and manufacturer.',
            },
            {
                name: 'Construction',
                description: 'China largest construction group, Fortune top 50 companies.',
            },
            {
                name: 'Manufacturing',
                description: 'One of largest steel company in China.',
            },
            {
                name: 'Banking and Finance',
                description: 'Fortune top 40 companies.',
            },
            {
                name: 'Logistics',
                description: 'Leading integrated express logistics service provider in China also an intelligent logistics operator with excellent network scale.',
            },
        ],
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
    },
}
</script>

<style scoped>
.about-us {
    margin-top: 60px;
}

.h1-about-us {
    padding: 0 120px;
}

.p1-about-us {
    padding-left: 120px;
}

#div-about-us {
    margin-left: 120px;
}

.img-about-us {
    padding: 40px 120px 80px 80px
}

.h1-expertises {
    padding: 0 200px;
}

.map {
    margin-left: -70px;
    margin-top: -40px
}

.h1-business {
    padding-right: 120px;
    margin-top: 60px;
}

.ul-expertise {
    margin: 0 150px;
}

@media (max-width: 960px) {
    .about-us {
        margin-top: 30px;
    }

    .h1-about-us {
        padding: 0 40px;
    }

    .p1-about-us {
        padding: 0 40px;
    }

    #div-about-us {
        margin-left: 40px;
    }

    .img-about-us {
        padding: 0 50px 40px 50px;
    }

    .h1-expertises {
        padding: 0 40px;
    }

    .map {
        margin-left: 0;
        margin-top: 0;
    }

    .h1-business {
        padding: 0 20px;
        margin-top: 0;
    }

    .ul-expertise {
        margin: 0 40px;
    }
}
</style>