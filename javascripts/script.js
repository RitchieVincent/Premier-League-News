$(document).ready(function(){

    var str = "";
    var str2 = "";
    var facebookAccount = "";
    var twitterAccount = "";
    var instagramAccount = "";
    
    $( "#teamSelect" ).change(function () {
        str = "";
        $( "#teamSelect option:selected" ).each(function() {
            str += $( this ).text();
        });
        $( ".teamSelected" ).text( str );
        imageSelect(str);
        setAccount(str);
        runFeed();
    })
    .change(); 
    
    function imageSelect(str){
        switch (str) {
            case "Arsenal":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/a/arsenal/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Aston Villa":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/a/aston-villa/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Burnley":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/b/burnley/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Chelsea":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/c/chelsea/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Crystal Palace":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/c/crystal-palace/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Everton":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/e/everton/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Hull":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/h/hull/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Leicester":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/l/leicester/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Liverpool":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/l/liverpool/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Manchester City":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/m/man-city/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Manchester United":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/m/man-utd/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Newcastle":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/n/newcastle/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Queens Park Rangers":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/q/qpr/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Southampton":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/southampton/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Stoke":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/stoke/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Sunderland":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/sunderland/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Swansea":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/swansea/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "Tottenham":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/spurs/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "West Bromwich Albion":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/w/west-brom/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
            case "West Ham":
                document.getElementById("selectedImage").src = "http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/w/west-ham/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png";
                break;
        }
    }

    function setAccount(str){
        switch (str) {
            case "Arsenal":
                facebookAccount = "@Arsenal";
                twitterAccount = "@arsenal";
                instagramAccount = "@arsenal";
                break;
            case "Aston Villa":
                facebookAccount = "@avfcofficial";
                twitterAccount = "@avfcofficial";
                instagramAccount = "@avfcofficial";
                break;
            case "Burnley":
                facebookAccount = "@officialburnleyfc";
                twitterAccount = "@burnleyofficial";
                instagramAccount = "@burnleyofficial";
                break;
            case "Chelsea":
                facebookAccount = "@ChelseaFC";
                twitterAccount = "@chelseafc";
                instagramAccount = "@chelseafc";
                break;
            case "Crystal Palace":
                facebookAccount = "@officialcpfc";
                twitterAccount = "@cpfc";
                instagramAccount = "@official_cpfc";
                break;
            case "Everton":
                facebookAccount = "@Everton";
                twitterAccount = "@everton";
                instagramAccount = "@officialeverton";
                break;
            case "Hull":
                facebookAccount = "";
                twitterAccount = "@hullcity";
                instagramAccount = "@hullcityofficial";
                break;
            case "Leicester":
                facebookAccount = "@lcfcofficial";
                twitterAccount = "@officialfoxes";
                instagramAccount = "@officialfoxes";
                break;
            case "Liverpool":
                facebookAccount = "@LiverpoolFC";
                twitterAccount = "@lfc";
                instagramAccount = "@liverpoolfc";
                break;
            case "Manchester City":
                facebookAccount = "@mcfcofficial";
                twitterAccount = "@mcfc";
                instagramAccount = "@mcfcofficial";
                break;
            case "Manchester United":
                facebookAccount = "@manchesterunited";
                twitterAccount = "@manutd";
                instagramAccount = "@manchesterunited";
                break;
            case "Newcastle":
                facebookAccount = "@newcastleunited";
                twitterAccount = "@nufc";
                instagramAccount = "@newcastleunited_official";
                break;
            case "Queens Park Rangers":
                facebookAccount = "@OfficialQPRFC";
                twitterAccount = "@qprfc";
                instagramAccount = "@officialQPR";
                break;
            case "Southampton":
                facebookAccount = "@southamptonfc";
                twitterAccount = "@southamptonfc";
                instagramAccount = "@southamptonfc";
                break;
            case "Stoke":
                facebookAccount = "@stokecity";
                twitterAccount = "@stokecity";
                instagramAccount = "@stokecity";
                break;
            case "Sunderland":
                facebookAccount = "@sunderlandafc";
                twitterAccount = "@sunderlandafc";
                instagramAccount = "@sunderlandafcofficial";
                break;
            case "Swansea":
                facebookAccount = "@SwanseaCityFC";
                twitterAccount = "@swansofficial";
                instagramAccount = "@swansofficial";
                break;
            case "Tottenham":
                facebookAccount = "@TottenhamHotspur";
                twitterAccount = "@spursofficial";
                instagramAccount = "@spursofficial";
                break;
            case "West Bromwich Albion":
                facebookAccount = "@westbromwichalbionofficial";
                twitterAccount = "@wbafcofficial";
                instagramAccount = "@officialalbion";
                break;
            case "West Ham":
                facebookAccount = "@westhamunitedofficial";
                twitterAccount = "@whufc_official";
                instagramAccount = "@whufc_official";
                break;
        }
    }


function runFeed(){
    $('.social-feed-container').socialfeed({
                    // FACEBOOK
                    facebook:{
                        accounts:[facebookAccount],
                        limit:5,
                        access_token:'150849908413827|a20e87978f1ac491a0c4a721c961b68c'
                    },
                    // Twitter
                    twitter:{
                        accounts: [twitterAccount],
                        limit: 5,
                        consumer_key: 'eZe0Sk4GdH7LKWTlotow', // make sure to have your app read-only
                        consumer_secret: 'j35RWFf6JntvQP9qEWfdzroVCpz4YLnWWIhrdlNw', // make sure to have your app read-only
                     },
                    // INSTAGRAM
                    instagram:{
                        accounts:[instagramAccount],
                        limit:5,
                        client_id:'2c6d2173ae9d41de905236e6301e5a43'
                    },
                    // GENERAL SETTINGS
                    length:400,
                    show_media:true,
                    // Moderation function - if returns false, template will have class hidden
                    moderation: function(content){
                        return  (content.text) ? content.text.indexOf('fuck') == -1 : true;
                    },
                    //update_period: 5000,
                    // When all the posts are collected and displayed - this function is evoked
                    callback: function(){
                        console.log('all posts are collected');
                    }
                });
}

});