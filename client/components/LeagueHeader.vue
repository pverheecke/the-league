<template>
<div class="ui huge top fixed menu">

    <div class="item">
        <span>THE LEAGUE</span>
    </div>

    <router-link to="/home" class="item">Home</router-link>
    <router-link to="/team" class="item">Team</router-link>
    <router-link to="/players" class="item">Players</router-link>

    <div class="ui dropdown item">
        Transactions <i class="dropdown icon"></i>
        <div class="menu">
            <router-link to="/pending-transactions" class="item">Pending Transactions</router-link>
            <router-link to="/propose-trade" class="item">Propose Trade</router-link>
            <router-link to="/transaction-history" class="item">Transaction History</router-link>
        </div>
    </div>

    <router-link to="/schedule" class="item">Schedule</router-link>
    <router-link to="/standings" class="item">Standings</router-link>
    <router-link to="/live-scoring" class="item">Live Scoring</router-link>

</div>
</template>

<script>
export default {
    mounted: function() {
        $(this.$el).find('.ui.dropdown').dropdown({transition: 'drop', on: 'hover'});
    }
}
</script>

<style lang="sass">

</style>
