<template>
<div id="home">
    <div class="row">
        <div class="col s8">
            <team-summary></team-summary>
            <recent-news></recent-news>
            <recent-transactions></recent-transactions>
        </div>
        <div class="col s4">
            <matchups-current></matchups-current>
            <standings-simple></standings-simple>
        </div>
    </div>
</div>
</template>

<script>
import TeamSummary from "../components/TeamSummary.vue"
import StandingsSimple from "../components/StandingsSimple.vue"
import MatchupsCurrent from "../components/MatchupsCurrent.vue"
import RecentNews from "../components/RecentNews.vue"
import RecentTransactions from "../components/RecentTransactions.vue"

export default {
    components: {
        TeamSummary,
        StandingsSimple,
        MatchupsCurrent,
        RecentNews,
        RecentTransactions
    }
}
</script>

<style>
#home {
    padding: 0 10px;
}

.row {
    margin-top: 10px;
}
</style>
