$(document).ready(function() {
  var density = {
    "臺北市": 0,
    "嘉義市": 0,
    "新竹市": 0,
    "基隆市": 0,
    "新北市": 0,
    "桃園市": 0,
    "臺中市": 0,
    "彰化縣": 0,
    "高雄市": 0,
    "臺南市": 0,
    "金門縣": 0,
    "澎湖縣": 0,
    "雲林縣": 0,
    "連江縣": 0,
    "新竹縣": 0,
    "苗栗縣": 0,
    "屏東縣": 0,
    "嘉義縣": 0,
    "宜蘭縣": 0,
    "南投縣": 0,
    "花蓮縣": 0,
    "臺東縣": 0
  };
var densityCountry;

$.getJSON( "data/GymFuncPeopleFuncCount.json", function( data ) {
   density = data;
});


  d3.json("/data/county.json", function(topodata) {
    var features = topojson.feature(topodata, topodata.objects.county).features;
    
    //著色設定
    var color = d3.scale.linear().domain([0,4000]).range(["#fff","#f00"]);

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
