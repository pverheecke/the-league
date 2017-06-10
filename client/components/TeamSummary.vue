<template>
<div class="card">
    <div class="card-content">
        <span class="card-title teal-text text-lighten-1">Welcome, Bikini Bottom Bastards!</span>
        <div id="team-summary-body">
            <span>
                <strong>Current Record: </strong><strong class="light-blue-text text-darken-4">11-9-5</strong> (2nd in West)
            </span>
            <span>
                <strong>Available FAAB Cash: </strong>$9
            </span>
            <span>
                <strong>Current Opponent: </strong>Team Vertelney
            </span>
        </div>
    </div>
    <div class="card-action">
        <router-link to="/team">View Roster</router-link>
        <router-link to="/pending-transactions">View Pending Transactions</router-link>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
#team-summary-body > span {
    margin-right: 15px;
}
</style>
