$(document).ready(function () {
    
    runRSS();
    var str = "";
    var str2 = "";
    
    $( "#teamSelect" ).change(function () {
        str = "";
        $( "#teamSelect option:selected" ).each(function() {
            str += $( this ).text();
        });
        $( ".teamSelected" ).text( str );
        imageSelect(str);
        runRSS(str, str2);
    })
    .change(); 
    
    $( "#filter" ).change(function () {
        str2 = "";
        $( "#filter option:selected" ).each(function() {
            str2 += $( this ).text();
        });
        $( ".filterSelected" ).text( str2 );
        if(str2 == "Any"){
            str2 = "a";
        };
        runRSS(str, str2);
    })
    .change(); 
    
    
    function runRSS(a, b){
        $('#divRss').FeedEk({
            FeedUrl: 'http://pipes.yahoo.com/pipes/pipe.run?_id=d5af746000fcb3a1606ee8eff37328dd&_render=rss&textinput2=' + b + '&textinput1=' + a,
            MaxCount : 10,
            ShowDesc : false,
            ShowPubDate:true,
            TitleLinkTarget:'_blank',
            DateFormat: 'Do MMMM YYYY',
            DateFormatLang:'en'
        });
    }
    
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
            case "Queesn Park Rangers":
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


});