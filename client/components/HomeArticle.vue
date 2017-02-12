<template>
<div class="league-container" id="article">
    <h3 id="headline">{{ headline }}</h3>
    <div id="article-body">
        <img id="article-img" :src="imgSrc">
        <p id="article-text" v-html="articleText"></p>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            headline: "What Would A Post-Expansion MLB Look Like?",
            articleText: "Baseball will grow again.<br><br> \
            In the modern era, there never has been a longer expansion drought.<br><br> \
            Perhaps once the stadium situations involving Oakland and Tampa Bay are settled, \
            baseball will consider expanding for the first time since admitting the \
            Diamondbacks and Rays in 1998. (It’s possible that teams like Tampa or Oakland \
            would relocate, but research by Craig Edwards earlier this week revealed how \
            infrequently MLB teams change addresses.) Perhaps now that baseball owners have \
            cashed in some of their investment in MLB Advanced Media, expansion talk will \
            become more serious in the coming years.\
            <a target=\"_blank\" href=\"http://www.fangraphs.com/blogs/what-would-a-post-expansion-mlb-look-like/\">Read more</a>",
            imgSrc: "http://content.sportslogos.net/logos/54/66/full/8183_montreal_expos-jersey-1989.gif"
        }
    }
}
</script>

<style lang="sass">
#article {
    background-color: #e7e7e7;
    margin-left: 15px;
    min-height: 300px;
    padding: 1px 20px;
    max-width: 950px;
    border-radius: 10px;
    a {
        margin-left: 10px;
    }
    a:hover {
        text-decoration: none;
    }
    a:focus {
        text-decoration: none;
    }
    p {
        text-align: justify;
    }
}
#headline {
    margin-bottom: 30px;
}
#article-img {
    height: 200px;
    float: left;
    margin-right: 20px;
}

</style>
