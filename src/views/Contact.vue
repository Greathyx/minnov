<template>
    <v-main>
        <!--    <v-parallax-->
        <!--        src="../assets/contacts.jpg" style="max-width: 100%">-->
        <!--    </v-parallax>-->
        <v-img src="../assets/contacts.jpg" style="height: 70vh"></v-img>
        <!--    <v-row align="center" justify="center">-->
        <!--      <v-col cols="2" align="left" justify="left">-->
        <!--        <v-img src="../assets/minnov-logo.png" ></v-img>-->
        <!--        <span>web: www.minnov.se</span><br>-->
        <!--        <span>Mail： info@minnov.se</span><br>-->
        <!--        <span>Headquarter office ：Strandvägen 7A SE-11456 Stockholm Sweden</span>-->
        <!--      </v-col>-->
        <!--    </v-row>-->
        <v-img src="../assets/background2.jpg" style="height: 70vh" aspect-ratio="0.5">
            <div style="display: flex; align-items: center; justify-content: center; margin-top: 60px; height: 50vh">
                <v-row align="top" justify="center" style="max-width: 1000px">
                <v-col cols="12" sm="4" align="center" justify="center">
                    <v-icon large color="rgba(0, 0, 0, 0.87)">mdi-email-outline</v-icon>
                    <p>info@minnov.se</p>
                </v-col>
                <v-col cols="12" sm="4" align="center" justify="center">
                    <v-icon large color="rgba(0, 0, 0, 0.87)">mdi-phone-outline</v-icon>
                    <p>info@minnov.se</p>
                </v-col>
                <v-col cols="12" sm="4" align="center" justify="center">
                    <v-icon large color="rgba(0, 0, 0, 0.87)">mdi-map-marker-outline</v-icon>
                    <p>Strandvägen 7A SE-11456 <br>Stockholm Sweden</p>
                </v-col>
            </v-row>
            </div>
        </v-img>

<!--        <div style="display: flex; align-items: center; justify-content: center; margin-top: 50px">-->
<!--            <v-row align="top" justify="center" style="max-width: 1000px">-->
<!--                <v-col cols="12" sm="4" align="center" justify="center">-->
<!--                    <v-icon large color="rgba(0, 0, 0, 0.87)">mdi-email-outline</v-icon>-->
<!--                    <p>info@minnov.se</p>-->
<!--                </v-col>-->
<!--                <v-col cols="12" sm="4" align="center" justify="center">-->
<!--                    <v-icon large color="rgba(0, 0, 0, 0.87)">mdi-phone-outline</v-icon>-->
<!--                    <p>info@minnov.se</p>-->
<!--                </v-col>-->
<!--                <v-col cols="12" sm="4" align="center" justify="center">-->
<!--                    <v-icon large color="rgba(0, 0, 0, 0.87)">mdi-map-marker-outline</v-icon>-->
<!--                    <p>Strandvägen 7A SE-11456 <br>Stockholm Sweden</p>-->
<!--                </v-col>-->
<!--            </v-row>-->
<!--        </div>-->


    </v-main>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
.background {

}
</style>