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
import Schedule from './pages/Schedule.vue'
import Standings from './pages/Standings.vue'
import LiveScoring from './pages/LiveScoring.vue'
import ErrorPage from './pages/ErrorPage.vue'

const routes = [
    {path: '/', redirect: 'home'},
    {path: '/home', component: Home},
    {path: '/team', component: Team},
    {path: '/players', component: Players},
    {path: '/pending-transactions', component: PendingTransactions},
    {path: '/propose-trade', component: ProposeTrade},
    {path: '/transaction-history', component: TransactionHistory},
    {path: '/schedule', component: Schedule},
    {path: '/standings', component: Standings},
    {path: '/live-scoring', component: LiveScoring},
    {path: '/error', component: ErrorPage},
    {path: '*', redirect: '/error'}
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
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
#app {
    background-color: rgba(0,0,0,0.1);
}

.card .card-content .card-title {
    font-weight: 400;
}
</style>
