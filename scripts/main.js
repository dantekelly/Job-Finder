/**
 * Created by dante on 4/27/16.
 */
$(document).ready(function() {
  $('.hamburger').click(function() {
    alert('Clicked');
    $(this).find('ul').slideToggle();
  });

  var successCallback = function(position){
    var x = position.coords.latitude;
    var y = position.coords.longitude;
    console.log($.whatever(x,y));
  };
  navigator.geolocation.getCurrentPosition(successCallback);

  function findJob() {
    $.getJSON( "http://api.indeed.com/ads/apisearch?publisher=1345414146707985&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2n&format=json", function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      });

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });
    //http://api.indeed.com/ads/apisearch?
      // publisher=1345414146707985
      // &q=java          ****Keyword
      // &l=austin%2C+tx  ****City,State
      // &sort=           ****Sort by relevance default
      // &radius=         ****Radius in miles, default is 25
      // &st=
      // &jt=
      // &start=
      // &limit=
      // &fromage=
      // &filter=
      // &latlong=1
      // &co=us
      // &chnl=&
      // userip=1.2.3.4
      // &useragent=Mozilla/%2F4.0%28Firefox%29&
      // v=2&
      // format=json
  }
  $('button').click(function() {
    //alert('Clicked');
    //$(this).find('ul').slideToggle();
    //findJob();
  });
});