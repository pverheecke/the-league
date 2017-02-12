<template>
<div id="home">
    <div id="left-section">
        <home-article></home-article>
    </div>
    <div id="right-section">
        <standings-simple></standings-simple>
        <matchups-current></matchups-current>
    </div>
</div>
</template>

<script>
import HomeArticle from "../components/HomeArticle.vue"
import StandingsSimple from "../components/StandingsSimple.vue"
import MatchupsCurrent from "../components/MatchupsCurrent.vue"

export default {
    components: {
        HomeArticle,
        StandingsSimple,
        MatchupsCurrent
    }
}
</script>

<style>
#home {
    padding: 0 15px;
}
</style>
