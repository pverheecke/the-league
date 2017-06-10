<template>
<div class="card">
    <div class="card-content">
        <span class="card-title teal-text text-lighten-1">Standings</span>
        <div class="division-group">
            <p class="division-title light-blue-text text-darken-4">
                West
            </p>
            <table>
                <tr>
                    <td class="team-name">Bikini Bottom Bastards</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
                <tr>
                    <td>Team22</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
                <tr>
                    <td>Team54323</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
                <tr>
                    <td>Team41</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
            </table>
        </div>
        <div class="division-group">
            <p class="division-title light-blue-text text-darken-4">
                Central
            </p>
            <table>
                <tr>
                    <td class="team-name">Woodgate Welterweights</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
                <tr>
                    <td>Team23</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
                <tr>
                    <td>Team35</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
                <tr>
                    <td>Team4</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
            </table>
        </div>
        <div class="division-group">
            <p class="division-title light-blue-text text-darken-4">
                East
            </p>
            <table>
                <tr>
                    <td class="team-name">Phoenix Phoenicians</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
                <tr>
                    <td>Team2</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
                <tr>
                    <td>Team3</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
                <tr>
                    <td>Team4</td>
                    <td>11-8-7</td>
                    <td>.524</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="card-action">
        <router-link to="/standings">View Full Standings</router-link>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.division-group {
    margin-bottom: 20px;
}
.card .card-content .division-group .division-title {
    font-weight: 600;
    margin-left: 5px;
}

.card td {
    padding: 0 5px;
}

.team-name {
    width: 55%;
}

</style>
