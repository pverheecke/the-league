<template>
<div>
    <ul class="side-nav" id="side-nav">
        <router-link to="/home" tag="li"><a>Home</a></router-link>
        <router-link to="/team" tag="li"><a>Team</a></router-link>
        <router-link to="/players" tag="li"><a>Players</a></router-link>
        <li>
            <ul class="collapsible collapsible-accordion">
                <li>
                    <a class="collapsible-header">Transactions</a>
                    <div class="collapsible-body">
                        <ul>
                            <router-link to="/pending-transactions" tag="li"><a>Pending Transactions</a></router-link>
                            <router-link to="/propose-trade" tag="li"><a>Propose Trade</a></router-link>
                            <router-link to="/transaction-history" tag="li"><a>Transaction History</a></router-link>
                        </ul>
                    </div>
                </li>
            </ul>
        </li>
        <router-link to="/schedule" tag="li"><a>Schedule</a></router-link>
        <router-link to="/standings" tag="li"><a>Standings</a></router-link>
        <router-link to="/live-scoring" tag="li"><a>Live Scoring</a></router-link>
    </ul>
    <div class="navbar-fixed">
        <ul id="transactions-dropdown" class="dropdown-content light-blue-text text-darken-4">
            <router-link to="/pending-transactions" tag="li"><a>Pending Transactions</a></router-link>
            <router-link to="/propose-trade" tag="li"><a>Propose Trade</a></router-link>
            <router-link to="/transaction-history" tag="li"><a>Transaction History</a></router-link>
        </ul>
        <nav class="light-blue darken-4">
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo">THE LEAGUE</router-link>
                <a href="javascript:" data-activates="side-nav" class="button-collapse"><i class="material-icons">menu</i></a>

                <ul class="hide-on-med-and-down">
                    <router-link to="/home" tag="li"><a>Home</a></router-link>
                    <router-link to="/team" tag="li"><a>Team</a></router-link>
                    <router-link to="/players" tag="li"><a>Players</a></router-link>
                    <li>
                        <a class="dropdown-button" href="javascript:" data-activates="transactions-dropdown" data-beloworigin="true">
                            Transactions<i class="material-icons right">arrow_drop_down</i>
                        </a>
                    </li>
                    <router-link to="/schedule" tag="li"><a>Schedule</a></router-link>
                    <router-link to="/standings" tag="li"><a>Standings</a></router-link>
                    <router-link to="/live-scoring" tag="li"><a>Live Scoring</a></router-link>
                </ul>
            </div>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    mounted: function() {
        $(".button-collapse").sideNav({
            closeOnClick: true,
            draggable: true
        });

        $('.collapsible').collapsible();

        $('.dropdown-button').dropdown();
    }
}
</script>

<style>
.side-nav .collapsible-body {
    padding: 0;
}

.nav-wrapper {
    padding: 0 40px;
}

.nav-wrapper>ul {
    padding-left: 230px;
}

.material-icons.right {
    margin-left: 0;
}
</style>
