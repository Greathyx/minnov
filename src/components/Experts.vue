<template>
    <v-item-group mandatory>
        <v-container>
            <v-row
                style="display: flex; flex-direction: row; justify-content: center;"
                justify="space-around"
            >
                <v-col
                    v-for="(author, i) in authors"
                    :key="i"
                    cols="6"
                    md="3"
                >
                    <v-item>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <v-avatar size="140">
                                <img
                                    :src="author.src"
                                    :alt="author.name"
                                >
                            </v-avatar>
                            <div style="margin-top: 20px">
                                <div class="title text--primary"
                                     v-html="author.name" style="text-align: center"></div>
                                <div class="text--primary"
                                     v-html="author.position" style="text-align: center"></div>
                            </div>
                        </div>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
import p1 from '../assets/experts/konrad.png';
import p2 from '../assets/experts/konrad.png';
import p3 from '../assets/experts/konrad.png';
import p4 from '../assets/experts/konrad.png';
import p5 from '../assets/experts/konrad.png'
import p6 from '../assets/experts/konrad.png'
import p7 from '../assets/experts/konrad.png'

export default {
    name: "Experts",
    data: () => ({
        authors: [
            {
                src: p1,
                name: 'Peter Åberg',
                position: 'CEO and Principal Business'
            },
            {
                src: p2,
                name: 'Min Li',
                position: 'Founder and Principal HR'
            },
            {
                src: p3,
                name: 'Jan Danielsson',
                position: 'Chairman and Principal Business',
            },
            {
                src: p4,
                name: 'Ingrid Steen',
                position: 'Finance and Accounting  Consultant'
            },
            {
                src: p5,
                name: 'Mats Flodin',
                position: 'Senior Legal Advisor (LLD)',
            },
            {
                src: p6,
                name: 'Nelson Lee Ming',
                position: 'HR and PM expert',
            },
            {
                src: p7,
                name: 'Penny Pingyue Qin',
                position: 'HR expert',
            }
        ]
    }),
}
</script>

<style scoped>

</style>