<template>
<div id="app">
    <league-header></league-header>
    <div id="body">
        <router-view></router-view>
    </div>
    <league-footer></league-footer>
</div>
</template>

<script>
import VueRouter from 'vue-router'
import LeagueHeader from './components/LeagueHeader.vue'
import Home from './pages/Home.vue'
import Team from './pages/Team.vue'
import Players from './pages/Players.vue'
import PendingTransactions from './pages/PendingTransactions.vue'
import ProposeTrade from './pages/ProposeTrade.vue'
import TransactionHistory from './pages/TransactionHistory.vue'
import Standings from './pages/Standings.vue'
import LiveScoring from './pages/LiveScoring.vue'

const routes = [
    {path: '/', redirect: 'home'},
    {path: '/home', component: Home},
    {path: '/team', component: Team},
    {path: '/players', component: Players},
    {path: '/pending-transactions', component: PendingTransactions},
    {path: '/propose-trade', component: ProposeTrade},
    {path: '/transaction-history', component: TransactionHistory},
    {path: '/standings', component: Standings},
    {path: '/live-scoring', component: LiveScoring},
];

const router = new VueRouter({
    routes,
    linkActiveClass: "active"
});

export default {
    router,
    components: {
        LeagueHeader
    }
}
</script>

<style>
body {
    background-color: #0d4575;
}
#body {
    padding: 50px 0;
}
</style>
