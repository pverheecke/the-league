<template>
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/home">THE LEAGUE</router-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <router-link tag="li" to="/home">
                    <a>Home</a>
                </router-link>
                <router-link tag="li" to="/team">
                    <a>Team</a>
                </router-link>

                <router-link tag="li" to="/players">
                    <a>Players</a>
                </router-link>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        Transactions
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><router-link to="/pending-transactions">Pending Transactions</router-link></a>
                        <li><router-link to="/propose-trade">Propose Trade</router-link></li>
                        <li><router-link to="/transaction-history">Transaction History</router-link></li>
                    </ul>
                </li>
                <router-link tag="li" to="/schedule">
                    <a>Schedule</a>
                </router-link>
                <router-link tag="li" to="/standings">
                    <a>Standings</a>
                </router-link>
                <router-link tag="li" to="/live-scoring">
                    <a>Live Scoring</a>
                </router-link>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
</script>

<style lang="sass">
@media (min-width: px) and (max-width: 848px) {
    .collapse {
        display: none !important;
    }
}
.container-fluid>.navbar-collapse, .container-fluid>.navbar-header, .container>.navbar-collapse, .container>.navbar-header {
    margin-right: 5px;
}
.navbar-default {
    background-color: #0d4575;
    border: none;
    margin-top: 7px;
    .navbar-nav .dropdown-menu>li>a {
        color: #555;
    }
    .navbar-nav>.open>a, .navbar-nav>.open>a:hover, .navbar-nav>.open>a:focus {
        background-color: #0d4575;
        color: #c3c3c3;
    }
    a.navbar-brand:hover {
        color: #c3c3c3;
    }
    .navbar-brand {
        color: white;
        font-size: 35px;
        letter-spacing: 2px;
        font-family: "Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif;
    }
    .navbar-brand.active {
        color: #e7e7e7;
    }
    .navbar-nav>li {
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 1px;
        a {
            color: #e7e7e7;
        }
    }
    .navbar-nav>li.active {
        font-weight: 300;
    }
    .navbar-nav>li>a:hover {
        color: #c3c3c3;
    }
}
</style>
