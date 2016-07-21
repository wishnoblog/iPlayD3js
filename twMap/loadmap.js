/* globals d3 topojson */
(function() {
    'use strict';
    var density = {
        "臺北市": 0,
        "嘉義市": 0,
        "新竹市": 0,
        "基隆市": 21,
        "新北市": 32,
        "桃園市": 42,
        "臺中市": 12,
        "彰化縣": 23,
        "高雄市": 42,
        "臺南市": 124,
        "金門縣": 23,
        "澎湖縣": 45,
        "雲林縣": 65,
        "連江縣": 34,
        "新竹縣": 12,
        "苗栗縣": 22,
        "屏東縣": 4,
        "嘉義縣": 12,
        "宜蘭縣": 34,
        "南投縣": 110,
        "花蓮縣": 100,
        "臺東縣": 99
    };

    var densityTowns =
    {
      "南竿鄉": 0,
      "北竿鄉": 0,
      "莒光鄉": 0,
      "東引鄉": 0,
      "金城鎮": 0,
      "金沙鎮": 0,
      "金湖鎮": 0,
      "金寧鄉": 0,
      "烈嶼鄉": 0,
      "烏坵鄉": 0,
      "宜蘭市": 0,
      "羅東鎮": 0,
      "蘇澳鎮": 0,
      "頭城鎮": 0,
      "礁溪鄉": 0,
      "壯圍鄉": 0,
      "員山鄉": 0,
      "冬山鄉": 0,
      "五結鄉": 0,
      "三星鄉": 0,
      "大同鄉": 0,
      "南澳鄉": 0,
      "竹北市": 0,
      "竹東鎮": 0,
      "新埔鎮": 0,
      "關西鎮": 0,
      "湖口鄉": 0,
      "新豐鄉": 0,
      "芎林鄉": 0,
      "橫山鄉": 0,
      "北埔鄉": 0,
      "寶山鄉": 0,
      "峨眉鄉": 0,
      "尖石鄉": 0,
      "五峰鄉": 0,
      "苗栗市": 0,
      "苑裡鎮": 0,
      "通霄鎮": 0,
      "竹南鎮": 0,
      "頭份市": 0,
      "後龍鎮": 0,
      "卓蘭鎮": 0,
      "大湖鄉": 0,
      "公館鄉": 0,
      "銅鑼鄉": 0,
      "南庄鄉": 0,
      "頭屋鄉": 0,
      "三義鄉": 0,
      "西湖鄉": 0,
      "造橋鄉": 0,
      "三灣鄉": 0,
      "獅潭鄉": 0,
      "泰安鄉": 0,
      "彰化市": 0,
      "鹿港鎮": 0,
      "和美鎮": 0,
      "線西鄉": 0,
      "伸港鄉": 0,
      "福興鄉": 0,
      "秀水鄉": 0,
      "花壇鄉": 0,
      "芬園鄉": 0,
      "員林市": 0,
      "溪湖鎮": 0,
      "田中鎮": 0,
      "大村鄉": 0,
      "埔鹽鄉": 0,
      "埔心鄉": 0,
      "永靖鄉": 0,
      "社頭鄉": 0,
      "二水鄉": 0,
      "北斗鎮": 0,
      "二林鎮": 0,
      "田尾鄉": 0,
      "埤頭鄉": 0,
      "芳苑鄉": 0,
      "大城鄉": 0,
      "竹塘鄉": 0,
      "溪州鄉": 0,
      "南投市": 0,
      "埔里鎮": 0,
      "草屯鎮": 0,
      "竹山鎮": 0,
      "集集鎮": 0,
      "名間鄉": 0,
      "鹿谷鄉": 0,
      "中寮鄉": 0,
      "魚池鄉": 0,
      "國姓鄉": 0,
      "水里鄉": 0,
      "信義鄉": 0,
      "仁愛鄉": 0,
      "斗六市": 0,
      "斗南鎮": 0,
      "虎尾鎮": 0,
      "西螺鎮": 0,
      "土庫鎮": 0,
      "北港鎮": 0,
      "古坑鄉": 0,
      "大埤鄉": 0,
      "莿桐鄉": 0,
      "林內鄉": 0,
      "二崙鄉": 0,
      "崙背鄉": 0,
      "麥寮鄉": 0,
      "東勢鄉": 0,
      "褒忠鄉": 0,
      "臺西鄉": 0,
      "元長鄉": 0,
      "四湖鄉": 0,
      "口湖鄉": 0,
      "水林鄉": 0,
      "太保市": 0,
      "朴子市": 0,
      "布袋鎮": 0,
      "大林鎮": 0,
      "民雄鄉": 0,
      "溪口鄉": 0,
      "新港鄉": 0,
      "六腳鄉": 0,
      "東石鄉": 0,
      "義竹鄉": 0,
      "鹿草鄉": 0,
      "水上鄉": 0,
      "中埔鄉": 0,
      "竹崎鄉": 0,
      "梅山鄉": 0,
      "番路鄉": 0,
      "大埔鄉": 0,
      "阿里山鄉": 0,
      "屏東市": 0,
      "潮州鎮": 0,
      "東港鎮": 0,
      "恆春鎮": 0,
      "萬丹鄉": 0,
      "長治鄉": 0,
      "麟洛鄉": 0,
      "九如鄉": 0,
      "里港鄉": 0,
      "鹽埔鄉": 0,
      "高樹鄉": 0,
      "萬巒鄉": 0,
      "內埔鄉": 0,
      "竹田鄉": 0,
      "新埤鄉": 0,
      "枋寮鄉": 0,
      "新園鄉": 0,
      "崁頂鄉": 0,
      "林邊鄉": 0,
      "南州鄉": 0,
      "佳冬鄉": 0,
      "琉球鄉": 0,
      "車城鄉": 0,
      "滿州鄉": 0,
      "枋山鄉": 0,
      "三地門鄉": 0,
      "霧臺鄉": 0,
      "瑪家鄉": 0,
      "泰武鄉": 0,
      "來義鄉": 0,
      "春日鄉": 0,
      "獅子鄉": 0,
      "牡丹鄉": 0,
      "臺東市": 0,
      "成功鎮": 0,
      "關山鎮": 0,
      "卑南鄉": 0,
      "鹿野鄉": 0,
      "池上鄉": 0,
      "東河鄉": 0,
      "長濱鄉": 0,
      "太麻里鄉": 0,
      "大武鄉": 0,
      "綠島鄉": 0,
      "海端鄉": 0,
      "延平鄉": 0,
      "金峰鄉": 0,
      "達仁鄉": 0,
      "蘭嶼鄉": 0,
      "花蓮市": 0,
      "鳳林鎮": 0,
      "玉里鎮": 0,
      "新城鄉": 0,
      "吉安鄉": 0,
      "壽豐鄉": 0,
      "光復鄉": 0,
      "豐濱鄉": 0,
      "瑞穗鄉": 0,
      "富里鄉": 0,
      "秀林鄉": 0,
      "萬榮鄉": 0,
      "卓溪鄉": 0,
      "馬公市": 0,
      "湖西鄉": 0,
      "白沙鄉": 0,
      "西嶼鄉": 0,
      "望安鄉": 0,
      "七美鄉": 0,
      "中正區": 0,
      "七堵區": 0,
      "暖暖區": 0,
      "仁愛區": 0,
      "中山區": 0,
      "安樂區": 0,
      "信義區": 0,
      "東區": 0,
      "北區": 0,
      "香山區": 0,
      "西區": 0,
      "松山區": 0,
      "大安區": 0,
      "大同區": 0,
      "萬華區": 0,
      "文山區": 0,
      "南港區": 0,
      "內湖區": 0,
      "士林區": 0,
      "北投區": 0,
      "鹽埕區": 0,
      "鼓山區": 0,
      "左營區": 0,
      "楠梓區": 0,
      "三民區": 0,
      "新興區": 0,
      "前金區": 0,
      "苓雅區": 0,
      "前鎮區": 0,
      "旗津區": 0,
      "小港區": 0,
      "鳳山區": 0,
      "林園區": 0,
      "大寮區": 0,
      "大樹區": 0,
      "大社區": 0,
      "仁武區": 0,
      "鳥松區": 0,
      "岡山區": 0,
      "橋頭區": 0,
      "燕巢區": 0,
      "田寮區": 0,
      "阿蓮區": 0,
      "路竹區": 0,
      "湖內區": 0,
      "茄萣區": 0,
      "永安區": 0,
      "彌陀區": 0,
      "梓官區": 0,
      "旗山區": 0,
      "美濃區": 0,
      "六龜區": 0,
      "甲仙區": 0,
      "杉林區": 0,
      "內門區": 0,
      "茂林區": 0,
      "桃源區": 0,
      "那瑪夏區": 0,
      "板橋區": 0,
      "三重區": 0,
      "中和區": 0,
      "永和區": 0,
      "新莊區": 0,
      "新店區": 0,
      "樹林區": 0,
      "鶯歌區": 0,
      "三峽區": 0,
      "淡水區": 0,
      "汐止區": 0,
      "瑞芳區": 0,
      "土城區": 0,
      "蘆洲區": 0,
      "五股區": 0,
      "泰山區": 0,
      "林口區": 0,
      "深坑區": 0,
      "石碇區": 0,
      "坪林區": 0,
      "三芝區": 0,
      "石門區": 0,
      "八里區": 0,
      "平溪區": 0,
      "雙溪區": 0,
      "貢寮區": 0,
      "金山區": 0,
      "萬里區": 0,
      "烏來區": 0,
      "中區": 0,
      "南區": 0,
      "西屯區": 0,
      "南屯區": 0,
      "北屯區": 0,
      "豐原區": 0,
      "東勢區": 0,
      "大甲區": 0,
      "清水區": 0,
      "沙鹿區": 0,
      "梧棲區": 0,
      "后里區": 0,
      "神岡區": 0,
      "潭子區": 0,
      "大雅區": 0,
      "新社區": 0,
      "石岡區": 0,
      "外埔區": 0,
      "烏日區": 0,
      "大肚區": 0,
      "龍井區": 0,
      "霧峰區": 0,
      "太平區": 0,
      "大里區": 0,
      "和平區": 0,
      "新營區": 0,
      "鹽水區": 0,
      "白河區": 0,
      "柳營區": 0,
      "後壁區": 0,
      "東山區": 0,
      "麻豆區": 0,
      "下營區": 0,
      "六甲區": 0,
      "官田區": 0,
      "大內區": 0,
      "佳里區": 0,
      "學甲區": 0,
      "西港區": 0,
      "七股區": 0,
      "將軍區": 0,
      "北門區": 0,
      "新化區": 0,
      "善化區": 0,
      "新市區": 0,
      "安定區": 0,
      "山上區": 0,
      "玉井區": 0,
      "楠西區": 0,
      "南化區": 0,
      "左鎮區": 0,
      "仁德區": 0,
      "歸仁區": 0,
      "關廟區": 0,
      "龍崎區": 0,
      "永康區": 0,
      "安南區": 0,
      "安平區": 0,
      "中西區": 0,
      "桃園區": 0,
      "中壢區": 0,
      "大溪區": 0,
      "楊梅區": 0,
      "蘆竹區": 0,
      "大園區": 0,
      "龜山區": 0,
      "八德區": 0,
      "龍潭區": 0,
      "平鎮區": 0,
      "新屋區": 0,
      "觀音區": 0,
      "復興區": 0
    }

    var width = 800,
        height = 600,
        svg = d3.select('#js-map'),
        tooltip = d3.select('#js-tooltip'),
        load,
        parseQueryString,
        params;

    svg.attr('width', width)
        .attr('height', height);

   
    load = function(type, id) {

        var color = d3.scale.linear().domain([0,  d3.max(d3.values(density))]).range(["#fff", "#f00"]);
        
        var dataPath = '../data/'+
                (type === 'towns' ? 'GymFuncPeopleFuncCountTowns.json' :
                    (type === 'villages' ? 'GymFuncPeopleFuncCountVillages.json' :
                        'GymFuncPeopleFuncCount.json'));
        $.getJSON(dataPath, function( data ) {
           density = data;
           color = d3.scale.linear().domain([0,  d3.max(d3.values(data))]).range(["#fff", "#f00"])
        });

        var filepath = 'https://raw.githubusercontent.com/' +
            'jason2506/Taiwan.TopoJSON/master/topojson/' +
            (type === 'towns' ? 'towns/towns-' + id :
                (type === 'villages' ? 'villages/villages-' + id :
                    'counties')) + '.json';

        d3.json(filepath, function(data) {
            var features = topojson.feature(data, data.objects.map).features,
                bbox = data.bbox,
                scale = Math.min(width / (bbox[2] - bbox[0]),
                    height / (bbox[3] - bbox[1])) * 50,
                center = [(bbox[2] + bbox[0]) / 2, (bbox[3] + bbox[1]) / 2],
                projection,
                path;

            projection = d3.geo.mercator()
                .center(center)
                .scale(scale)
                .translate([width / 2, height / 2]);

            path = d3.geo.path()
                .projection(projection);

            for (var idx = features.length - 1; idx >= 0; idx--)
            {
                //console.log(features[idx].properties.C_Name);
                //console.log(features[idx].properties.name);
                features[idx].density = density[features[idx].properties.name];
            }

            console.log(features);
            svg.selectAll('path')
                .data(features)
                .enter()
                .append('path')
                .attr('d', path)
                .style("fill", function (d) { 
                    //console.log(d.density);
                    //console.log(color(d.density));
                    return color(d.density) 
                })
                .on('click', function(d) {
                    var id,
                        t;

                    if (!d3.event) {
                        return;
                    }

                    id = d.properties.id;
                    d3.event.stopPropagation();
                    if (type === 'villages') {
                        return;
                    } else if (type === 'towns') {
                        t = 'villages';
                    } else {
                        t = 'towns';
                    }

                    location.search = unescape(encodeURI('type=' + t + '&id=' + id));
                })
                .on('mouseover', function(d) {
                    var centroid = path.centroid(d);

                    tooltip
                        .classed('s-show', true)
                        .style('left', centroid[0] + 'px')
                        .style('top', (centroid[1]+50) + 'px')
                        .text(d.properties.name);
                })
                .on('mouseout', function() {
                    tooltip
                        .classed('s-show', false);
                });
        });
    };

    parseQueryString = function(queryString) {
        var queries = queryString.split('&'),
            result = {},
            tokens,
            length,
            i;

        for (i = 0, length = queries.length; i < length; i++) {
            tokens = queries[i].split('=');
            result[tokens[0]] = tokens[1];
        }

        return result;
    };

    params = parseQueryString(location.search.substr(1));
    load(params['type'], params['id']);
})();