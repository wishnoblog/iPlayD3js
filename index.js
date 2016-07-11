/**/$(document).ready(function() {
  var density = {
    "臺北市": 9952.60,
    "嘉義市": 4512.66,
    "新竹市": 4151.27,
    "基隆市": 2809.27,
    "新北市": 1932.91,
    "桃園市": 1692.09,
    "臺中市": 1229.62,
    "彰化縣": 1201.65,
    "高雄市": 942.97,
    "臺南市": 860.02,
    "金門縣": 847.16,
    "澎湖縣": 802.83,
    "雲林縣": 545.57,
    "連江縣": 435.21,
    "新竹縣": 376.86,
    "苗栗縣": 311.49,
    "屏東縣": 305.03,
    "嘉義縣": 275.18,
    "宜蘭縣": 213.89,
    "南投縣": 125.10,
    "花蓮縣": 71.96,
    "臺東縣": 99963.75
  };

//   d3.csv("data/dataCity.csv", function(data) {
//     console.log(data);
// });

var dataCity ;

// $.getJSON( "ajax/test.json", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });



// d3.csv("data/dataCity2.csv", function(data) {
//   console.log(data[0]);
// });
  //var dataCity = d3.csv.parseRows("data/dataCity.csv");
  //console.log(dataCity);
  d3.json("county.json", function(topodata) {
    var features = topojson.feature(topodata, topodata.objects.county).features;
    
    //著色，依照密度
    var color = d3.scale.linear().domain([0,10000]).range(["#fff","#f00"]);

    //魚眼設定
    var fisheye = d3.fisheye.circular().radius(30).distortion(2);
    
    //座標變換函數
    var prj = function(v) {
      var ret = d3.geo.mercator().center([122,23.25]).scale(6000)(v);
      var ret = fisheye({x:ret[0],y:ret[1]});
      return [ret.x, ret.y];
    };

    //路徑產生器
    var path = d3.geo.path().projection(prj);
    for(idx=features.length - 1;idx>=0;idx--) 
        features[idx].density = density[features[idx].properties.C_Name];

    d3.select("svg")
        .selectAll("path")
        .data(features)
        .enter()
        .append("path");
    
    function update() {
      d3.select("svg")
      .selectAll("path").attr({
        "d": path,
        "fill": function (d) { return color(d.density); }
      }).on("mouseover", function(d) {
        $("#name").text(d.properties.C_Name);
        $("#density").text(d.density);

      });
    }
    
    //邊界顏色調整
    d3.select("svg").selectAll("path").data(features).attr({
        stroke: "red",
        strokeWidth: "1"
    });


    d3.select("svg").on("mousemove", function() {
      //fisheye.focus(d3.mouse(this));
      update();
    });

    update();
  });
});


////堆疊資料
$.ajax({ 
        type: 'GET', 
        url: 'data/dataCity.json', 
        data: { get_param: 'value' }, 
        dataType:'json',
        success: function (data) { 
            var dataCity = data;
            D3stack(data);
        }
    });

function D3stack(CityData){
    
}


