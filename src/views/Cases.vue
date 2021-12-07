<template>
    <v-main>
        <div style="display: flex; align-items: center; justify-content: center; margin-top: 50px">
            <v-row align="top" justify="center" style="max-width: 1000px; text-align: center">
                <v-col cols="12" md="3" sm="6">
                    <a class="a" @click.prevent="anchor('case1')">
                        <v-card class="mx-auto case-card" height="340" width="260"
                                :elevation="elevation1"
                                @mouseover="onHoverCard(1)" @mouseleave="onLeaveCard(1)"
                        >
                            <v-card-text class="text-h6" style="color: rgba(0, 0, 0, 0.87)">
                                Case 1
                            </v-card-text>
                            <v-img
                                src="../assets/cases/case1-small.png"
                                height="200px" contain
                                style="margin: 0 10px"
                            ></v-img>
                            <v-card-subtitle style="color: rgba(0, 0, 0, 0.87)">
                                Partner of Operations, from 0 to 100%
                            </v-card-subtitle>
                        </v-card>
                    </a>
                </v-col>

                <v-col cols="12" md="3" sm="6">
                    <a class="a" @click.prevent="anchor('case2')">
                        <v-card class="mx-auto case-card" height="340" width="260"
                                :elevation="elevation2"
                                @mouseover="onHoverCard(2)" @mouseleave="onLeaveCard(2)"
                        >
                            <v-card-text class="text-h6" style="color: rgba(0, 0, 0, 0.87)">
                                Case 2
                            </v-card-text>
                            <v-img
                                src="../assets/cases/case2-small.png"
                                height="200px" contain
                                style="margin: 0 10px"
                            ></v-img>
                            <v-card-subtitle style="color: rgba(0, 0, 0, 0.87)">
                                Customized solutions for Nordic fit
                            </v-card-subtitle>
                        </v-card>
                    </a>
                </v-col>

                <v-col cols="12" md="3" sm="6">
                    <a class="a" @click.prevent="anchor('case3')">
                        <v-card class="mx-auto case-card" height="340" width="260"
                                :elevation="elevation3"
                                @mouseover="onHoverCard(3)" @mouseleave="onLeaveCard(3)"
                        >
                            <v-card-text class="text-h6" style="color: rgba(0, 0, 0, 0.87)">
                                Case 3
                            </v-card-text>
                            <v-img
                                src="../assets/cases/case3-small.png"
                                height="200px" contain
                                style="margin: 0 10px"
                            ></v-img>
                            <v-card-subtitle style="color: rgba(0, 0, 0, 0.87)">
                                Make it easy in difficult times
                            </v-card-subtitle>
                        </v-card>
                    </a>
                </v-col>

                <v-col cols="12" md="3" sm="6">
                    <a class="a" @click.prevent="anchor('case4')">
                        <v-card class="mx-auto case-card" height="340" width="260"
                                :elevation="elevation4"
                                @mouseover="onHoverCard(4)" @mouseleave="onLeaveCard(4)"
                        >
                            <v-card-text class="text-h6" style="color: rgba(0, 0, 0, 0.87)">
                                Case 4
                            </v-card-text>
                            <v-img
                                src="../assets/cases/case4-small.png"
                                height="200px" contain
                                style="margin: 0 10px"
                            ></v-img>
                            <v-card-subtitle style="color: rgba(0, 0, 0, 0.87)">
                                Mobilizing global resources in supporting business ambition
                            </v-card-subtitle>
                        </v-card>
                    </a>
                </v-col>
            </v-row>
        </div>

        <v-divider class="divider"/>

        <div class="padding">
            <!--------Case1---------->
            <div id="case1">
                <v-row align="center" justify="center" style="margin-top: 50px">
                    <h1 v-if="!isSmall" class="display-2 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Case 1</h1>
                    <h1 v-if="isSmall" class="display-1 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Case 1</h1>
                </v-row>
                <v-row style="margin-top: 20px">
                    <v-col sm="12" md="6">
                        <h3>From Business Ambition to Established Operations in Sweden</h3>
                        <p style="text-align: justify">
                            A leading Asian company decided to expand its market in Nordic countries. Minnovation is
                            engaged by the customer from the earliest stage of its development in Europe, works along
                            with each other till now. Thanks to Minnovation’s strong efforts and solid experiences in
                            human resources management and talent capabilities development, the company is now well
                            established in Nordic countries with great business achievements.
                        </p>
                        <h3>The Ambition and Challenge</h3>
                        <p style="text-align: justify">
                            The company is a consumer electronics and smart manufacturing company , founded in 2010 and
                            listed on Hong Kong Stock Exchange in 2018. With its innovations,
                            high-quality user experience and operational efficiency, the company quickly becomes No. 1
                            in many of its focus areas in China, and No. 2 in smartphones in the world.
                        </p>
                        <p style="text-align: justify;">
                            Its products are present in more than 100 countries around the world, however, its market
                            share in many strategic products in Nordic countries were yet to be enhanced. The sales were
                            developed purely through its agents or distributors.
                        </p>
                        <p style="text-align: justify;">
                            The company has lots of successful achievements in China and other countries by setting up
                            its own stores in making strategic progress through end user experiences. In 2019, the
                            company decided to explore Sweden market as its first step in Nordic countries.
                        </p>
                        <p style="text-align: justify;">
                            Establish an operation in a new country is challenging.
                        </p>
                        <h3>Strategy and Solution</h3>
                        <p style="text-align: justify">
                            Minnovation worked closely with client representative since the first project kick-off
                            meeting. From defining requirements and objectives to feasibility studies, we involved
                            strongly in every steps. We provided advisory services on the overall strategy and
                            step-by-step establishment of its operations in Europe.
                        </p>
                        <p style="text-align: justify">
                            First consultants were dispatched from Minnovation, and we managed the legal compliance and
                            risks before the company had established its legal entity in the country. The full personnel
                            operations are with Minnovation including but not limited to employment, on-boarding,
                            payroll, and termination. Of course, the consultants are finally interviewed and selected by
                            the customer representative in meeting its requirement as well as the potential for future
                            development.
                        </p>
                    </v-col>

                    <v-col sm="12" md="6">
                        <v-img src="../assets/cases/case1.png"></v-img>
                        <br>
                        <h3>Business Operations Consulting</h3>
                        <p style="text-align: justify">
                            Operating in a new country can have a short-cut by engaging an experienced and knowledgeable
                            consulting company. Minnovation has its expertise. We helped the customer to establish its
                            first Nordic branch company in Sweden.
                        </p>
                        <p style="text-align: justify">
                            Nordic countries are famous for their complicated labor market and labor laws. It is one of
                            the most difficult area for a foreign company to establish it new presence here. To fully
                            prepare the customer for its self-operations, we worked closely with the customer on every
                            details in its operation process.
                        </p>
                        <h3>A Seamless Taking Over</h3>
                        <p style="text-align: justify">
                            When the customer has established its legal entity in Sweden and other Nordic countries, all
                            dispatched consultants are transferred to the new legal entity as its own employees. We
                            supported our customer with all the employees and leaders communications as well as needed
                            documentation such as new employment contracts.
                        </p>
                        <p style="text-align: justify">
                            In the meantime, we also helped the customer to build up its own local human resources
                            management system, embedding the customer’s global missions and values, while fitting well
                            into Nordic culture and compliance requirements.
                        </p>
                        <p style="text-align: justify">
                            Some personnel service that could not be taken over by the customer at the moment are still
                            carried on by Minnovation. We know deep about the customer, and the customer knows us deep
                            as well.
                        </p>
                    </v-col>
                </v-row>
            </div>

            <!--------Case2---------->
            <div id="case2">
                <v-row align="center" justify="center" style="margin-top: 80px">
                    <h1 v-if="!isSmall" class="display-2 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Case 2</h1>
                    <h1 v-if="isSmall" class="display-1 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Case 2</h1>
                </v-row>
                <v-row style="margin-top: 20px">
                    <v-col sm="12" md="6">
                        <h3>Total Human Resources Solution</h3>
                        <p style="text-align: justify">
                            Minnovation has strong expertise in Human Resources management. We have successfully helped
                            a Fortune 500 company to establish a full range Human Resources system and solutions for its
                            newly established branch in Europe.
                        </p>
                        <h3>The needs of a newly established branch office.</h3>
                        <p style="text-align: justify">
                            Our client is one of the Fortune 500 Global Companies and one of the world's Top 500
                            Prominent Brand Companies. It is very successful in its home country, while they did not
                            have any business yet in Nordic countries when they started its first branch office in
                            Stockholm.
                        </p>
                        <p style="text-align: justify">
                            New to the country and new to the market, the company was facing huge challenges in every
                            aspects. However, the client decided to put high priority in establishing a solid Human
                            Resources system both reflecting the culture of the parent company group, and fit Nordic
                            operations well especially on labor employment compliance to local laws and regulations.
                        </p>
                        <h3>Our Solutions</h3>
                        <p style="text-align: justify">
                            All companies need to anticipate and address talent needs for years to come. In addition,
                            operating in a safe environment is the base line. This is a strong expertise area for
                            Minnovation. Our consultants have long experiences as HR executives in various multinational
                            companies, and we have a strong legal advisory team to support our client.
                        </p>
                        <p style="text-align: justify">
                            A full time in-house HR professional was sent to client’s site, backed by a solid supporting
                            team from Minnovation. The consultant acted as client’s HR responsible person, working
                            closely with the client in addressing its talent needs.
                        </p>
                        <h3>A well operating HR system has been established</h3>
                        <p style="text-align: justify">
                            A well operating human resource management system is a platform that automates most
                            processes throughout the employee lifecycle and facilitates employee management and boosts
                            employee engagement. HR related templates and processes might look simple, while they need
                            years of accumulated experiences and expertise in making them solid and efficient.
                        </p>
                    </v-col>

                    <v-col sm="12" md="6">
                        <v-img src="../assets/cases/case2.png"></v-img>
                        <br>
                        <p style="text-align: justify">
                            We helped the client to create whole set of processes in facilitating people management in
                            the newly established branch. Running with observations and optimizing every details is
                            essential for customer satisfactions.
                        </p>
                        <h4>Outsource Solutions</h4>
                        <p style="text-align: justify">
                            With our excellent references, the client outsources many of its operations to us including
                            but not limited to recruitment, training and payroll services. They trust that HR operations
                            handled by a professional company would free up their energy in focusing on core business
                            and talent strategy. So far we have a very happy client.
                        </p>
                    </v-col>
                </v-row>
            </div>

            <!--------Case3---------->
            <div id="case3">
                <v-row align="center" justify="center" style="margin-top: 80px">
                    <h1 v-if="!isSmall" class="display-2 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Case 3</h1>
                    <h1 v-if="isSmall" class="display-1 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Case 3</h1>
                </v-row>
                <v-row style="margin-top: 20px">
                    <v-col sm="12" md="6">
                        <v-img src="../assets/cases/case3.png"></v-img>
                        <br>
                        <h3>Help transfer business smoothly in Sweden</h3>
                        <p style="text-align: justify">
                            A leading telecom company decided to close its office in Nordic countries. Establishing a
                            business in a foreign country is not easy while exiting is even complicated especially in
                            Nordic countries. Minnovation successfully helped the customer to make the settlement well
                            and safe.
                        </p>
                        <h3>The Unpredicted Challenge in Uncertain Times</h3>
                        <p style="text-align: justify">
                            The geopolitical situation in recent years impacts telecom industry tremendously.
                        </p>
                    </v-col>

                    <v-col sm="12" md="6">
                        <p style="text-align: justify">
                            Our client is one of the largest telecom vendors that operate globally. However, the climate
                            of uncertainty pushed the company to close its branch offices in Nordic countries.
                        </p>
                        <p style="text-align: justify">
                            The quick decision-making reality and accelerated strategy implementation brought the
                            challenges in dealing with unexpected problems. Managing both the current situation and
                            long-term risks were on the customer’s table.
                        </p>
                        <h3>Minnovated Transformation</h3>
                        <p style="text-align: justify">
                            Well managed transformation needs a system approach and expertise in many areas. It requires
                            a proven process and dedicated resources to smoothly settle the risks. Experience matters.
                        </p>
                        <p style="text-align: justify">
                            Managing people risks are the top priority in closing an existing operation. Minnovation
                            consultants worked closely with client representatives from the pre-separation strategy. We
                            stayed firm in client’s shoes. We started from analyzing workforce risks as an essential
                            first step. After rounds of client meetings and leaders interviews, we developed a framework
                            with the structure, tools and processes for the implementation.
                        </p>

                        <h3>Successful Settlement</h3>
                        <p style="text-align: justify">
                            Our experiences make us experts in mitigating risks, maximizing value and moderating costs
                            to create sustainable solutions. We know that good employees and leaders communications are
                            always the most critical factor to success.
                        </p>
                        <p style="text-align: justify">
                            With our end-to-end solutions, the closure of client’s branches was successfully
                            accomplished. We managed all disputes, and all employees signed separation agreements. In
                            the meantime, we helped the customers in arranging all outplacement activities including
                            trainings and other activities. Together with the client, we evaluated the remaining
                            business to determine potential workforce issues and mitigation strategies. With the high
                            trust from the client, our customized solutions were deployed in supporting its business
                            continuity after branch office closure.
                        </p>
                    </v-col>
                </v-row>
            </div>
            <!--------Case4---------->
            <div id="case4" style="margin-bottom: 50px">
                <v-row align="center" justify="center" style="margin-top: 80px">
                    <h1 v-if="!isSmall" class="display-2 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Case 4</h1>
                    <h1 v-if="isSmall" class="display-1 font-weight-medium"
                        style="margin-bottom: 30px;">Successful Case 4</h1>
                </v-row>
                <v-row style="margin-top: 20px">
                    <v-col sm="12" md="6">
                        <h3>International Mobility</h3>
                        <p style="text-align: justify">
                            Minnovation is an expert in handling international mobilities. We have gone beyond our
                            expectation in mobilizing global resources in supporting our customer’s business ambition.
                        </p>
                        <h3>The Vision and Challenge</h3>
                        <p style="text-align: justify">
                            In 2017, a start-up announced a bold and simple plan: develop the world’s greenest battery
                            cell and establish a European supply of batteries to enable the future of energy.
                        </p>
                        <p style="text-align: justify">
                            The company is positioned to play a leading role in Europe’s transition to a sustainable,
                            decarbonized future. So it has built Europe’s first homegrown battery gigafactory. Global
                            suppliers are working around the company in supporting its mission. However, mobilizing
                            global talents and workforce into the Gigafactory became a huge challenge due to the
                            complexity of international mobilities.
                        </p>

                        <h3>Our Solution for Efficiency</h3>
                        <p style="text-align: justify">
                            From the first customer meeting, we understand the challenge of recruiting needed talents
                            from local market.
                        </p>
                        <p style="text-align: justify">
                            We examined all possible solutions on how to staff for its operations in a quick and
                            efficient way. We agreed with the customer to recruit from global market and manage through
                            international mobility - Minnovation has its expertise in this area. There are complicated
                            processes and legal requirements, and they need lots of detailed attentions on every
                            aspects.
                        </p>
                    </v-col>
                    <v-col sm="12" md="6">
                        <v-img src="../assets/cases/case4.png"></v-img>
                        <br>
                        <h3>Handling with Expertise Support</h3>
                        <p style="text-align: justify">
                            We have supported and are supporting the hundreds of Non-EU foreign engineers and workers
                            from China, Japan, Korea, etc to move to Sweden. We handled all processes and compliance
                            management including legal employment, work permit applications and onboarding process etc
                            in Sweden since 2020.
                        </p>
                        <p style="text-align: justify">
                            We also provided support to its international suppliers to hire local employees and
                            international employees to finish their project assignments. From the trust of the
                            customers, we extended our consulting service many other area such as legal and taxation
                            etc.
                        </p>
                        <p style="text-align: justify">
                            The customer is on its journey towards its vision for a cleaner world. We share this vision
                            and commit to assist its success.
                        </p>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-main>
</template>

<script>
export default {
    name: "Cases",
    data: () => ({
        isSmall: false,
        elevation1: 2,
        elevation2: 2,
        elevation3: 2,
        elevation4: 2,
        anchorName: '',
    }),
    beforeDestroy() {
        if (typeof window === 'undefined') return
        window.removeEventListener('resize', this.onResize, {passive: true})
    },
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize, {passive: true});
        this.anchorName = this.$route.query.anchor;
        this.anchor(this.anchorName);
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
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) {
                anchorElement.scrollIntoView();
            }
        },
    },
}
</script>

<style>
.divider {
    margin: 50px 150px;
}

.padding {
    padding: 0 150px;
}

@media (max-width: 960px) {
    .padding {
        padding: 0 50px;
    }

    .divider {
        margin: 20px 50px;
    }
}

.case-card:hover {
    cursor: pointer;
}

.a {
    text-decoration: none;
}

</style>
