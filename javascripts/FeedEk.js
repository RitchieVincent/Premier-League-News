/*FeedEk jQuery RSS/ATOM Feed Plugin v2.0
 * http://jquery-plugins.net/FeedEk/FeedEk.html
 * https://github.com/enginkizil/FeedEk
 * Author : Engin KIZIL http://www.enginkizil.com */
(function ($) {
    $.fn.FeedEk = function (opt) {
        var def = $.extend({
            FeedUrl: "http://rss.cnn.com/rss/edition.rss",
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true,
            CharacterLimit: 0,
            TitleLinkTarget: "_blank",
            DateFormat: "",
            DateFormatLang: "en"
        }, opt);
        var id = $(this).attr("id"),
            i, s = "",
            dt;
        $("#" + id).empty().append('<i class="fa fa-spinner fa-pulse"></i>');
        var counter = 0;
        var accounts = [];
        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + def.MaxCount + "&output=json&q=" + encodeURIComponent(def.FeedUrl) + "&hl=en&callback=?",
            dataType: "json",
            success: function (data) {
                $("#" + id).empty();
                $.each(data.responseData.feed.entries, function (e, item) {
                    s += '<div class="storyCard"><li><div class="itemTitle"><a href="' + item.link + '" target="' + def.TitleLinkTarget + '" >' + item.title + "</a></div>";
                    if (def.ShowPubDate) {
                        dt = new Date(item.publishedDate);
                        if ($.trim(def.DateFormat).length > 0) {
                            try {
                                moment.lang(def.DateFormatLang);
                                s += '<div class="itemDate">' + moment(dt).format(def.DateFormat) + "</div>"
                            } catch (e) {
                                s += '<div class="itemDate">' + dt.toLocaleDateString() + "</div>"
                            }
                        } else {
                            s += '<div class="itemDate">' + dt.toLocaleDateString() + "</div>"
                        }
                    }
                    if (def.ShowDesc) {
                        if (def.DescCharacterLimit > 0 && item.content.length > def.DescCharacterLimit) {
                            s += '<div class="itemContent">' + item.content.substr(0, def.DescCharacterLimit) + "...</div>"
                        } else {
                            s += '<div class="itemContent">' + item.content + "</div>"
                        }
                    }
                    s += '<div class="upBtn' + counter + '" id="' + counter + '"><i class="fa fa-thumbs-up"></i></div></div>';
                    var name = item.link;
                    createVariables(name);
                    counter++;
                });
                $("#" + id).append('<ul class="feedEkList">' + s + "</ul>")

                function createVariables(name){
                    accounts[counter] = name;
                }
                
                var clicked0 = 0;
                var clicked1 = 0;
                var clicked2 = 0;
                var clicked3 = 0;
                var clicked4 = 0;
                var clicked5 = 0;
                var clicked6 = 0;
                var clicked7 = 0;
                var clicked8 = 0;
                var clicked9 = 0;

                

                document.getElementById(0).onclick = function(){
                    clicked0++
                    alert(clicked0);
                    alert(accounts[0]);
                }
                document.getElementById(1).onclick = function(){
                    clicked1++
                    alert(clicked1);
                    alert(accounts[1]);
                }
                document.getElementById(2).onclick = function(){
                    clicked2++
                    alert(clicked2);
                    alert(accounts[2]);
                }
                document.getElementById(3).onclick = function(){
                    clicked3++
                    alert(clicked3);
                    alert(accounts[3]);
                }
                document.getElementById(4).onclick = function(){
                    clicked4++
                    alert(clicked4);
                    alert(accounts[4]);
                }
                document.getElementById(5).onclick = function(){
                    clicked5++
                    alert(clicked5);
                    alert(accounts[5]);
                }
                document.getElementById(6).onclick = function(){
                    clicked6++
                    alert(clicked6);
                    alert(accounts[6]);
                }
                document.getElementById(7).onclick = function(){
                    clicked7++
                    alert(clicked7);
                    alert(accounts[7]);
                }
                document.getElementById(8).onclick = function(){
                    clicked8++
                    alert(clicked8);
                    alert(accounts[8]);
                }
                document.getElementById(9).onclick = function(){
                    clicked9++
                    alert(clicked9);
                    alert(accounts[9]);
                }

            }
        })
    }
})(jQuery);