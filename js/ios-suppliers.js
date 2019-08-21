// button system
$(document).ready(function() {
	var Slideicon = function(element, options) {
		this.element = element;
		this.options = {
			cover: options.cover,
			index: options.index,
			callback: options.callback
		};
		this.init();
	};

	Slideicon.prototype.init = function() {
		var _this = this;
		this.element.on('click', 'li', function() {
			$(this).nextAll().removeClass('active');
			$(this).prevAll().removeClass('active');
			var width = $(this).width();
			var left = ($(this).index()) * width;
			_this.options.cover.attr("style", "left:" + left + "px");
			$(this).addClass("active");
			params = $(this).attr('type');
			_this.options.callback(params)
		});
	};

	
	new Slideicon($("#hourlist"), {
		index: 0,
		cover: $("#thirdbg"),
		callback: function(data) {
			console.log(data)
		}
	});

	new Slideicon($("#hourlist2"), {
		index: 0,
		cover: $("#thirdbg2"),
		callback: function(data) {
			console.log(data)
		}
	});
	
	new Slideicon($("#hourlist3"), {
		index: 0,
		cover: $("#thirdbg3"),
		callback: function(data) {
			console.log(data)
		}
	});
	

	
	var swiper3 = new Swiper('#map-switch', {
		allowTouchMove: false,
		mousewheel: false,
	});
	$("#mapBtn1").click(function() {
		swiper3.slideTo(0, 1000, false);
	});
	$("#mapBtn2").click(function() {
		swiper3.slideTo(1, 1000, false);
	});
	
	var swiper4 = new Swiper('#iPhoneX-switch', {
		allowTouchMove: false,
		mousewheel: false,
	});
	
	$("#mapBtn3").click(function() {
		swiper4.slideTo(0, 1000, false);
	});
	$("#mapBtn4").click(function() {
		swiper4.slideTo(1, 1000, false);
	});
});

//	var swiper5 = new Swiper('#android-switch', {
//		allowTouchMove: false,
//		mousewheel: false,
//	});
//	
//	$("#mapBtn5").click(function() {
//		swiper5.slideTo(0, 1000, false);
//	});
//	$("#mapBtn6").click(function() {
//		swiper5.slideTo(1, 1000, false);
//	});
//});


// end

// wolrd map
var dom = document.getElementById("container");
//初始
var myChart = echarts.init(dom);
var app = {};
option = null;
// 随机0-1000的数
function randomData() {
	return Math.round(Math.random() * 1000);
}
var nameMap = {
	'Afghanistan': 'Afghanistan',
	'Albania': 'Albania',
	'Algeria': 'Algeria',
	'Andorra': 'Andorra',
	'Angola': 'Angola',
	'Antarctica': 'Antarctica',
	'Antigua and Barbuda': 'Antigua and Barbuda',
	'Argentina': 'Argentina',
	'Armenia': 'Armenia',
	'Australia': 'Australia',
	'Austria': 'Austria',
	'Azerbaijan': 'Azerbaijan',
	'The Bahamas': 'The Bahamas',
	'Bahrain': 'Bahrain',
	'Bangladesh': 'Bangladesh',
	'Barbados': 'Barbados',
	'Belarus': 'Belarus',
	'Belgium': 'Belgium',
	'Belize': 'Belize',
	'Benin': 'Benin',
	'Bermuda': 'Bermuda',
	'Bhutan': 'Bhutan',
	'Bcontainerolivia': 'Bcontainerolivia',
	'Bosnia and Herzegovina': 'Bosnia and Herzegovina',
	'Botswana': 'Botswana',
	'Brazil': 'Brazil',
	'Brunei': 'Brunei',
	'Bulgaria': 'Bulgaria',
	'Burkina Faso': 'Burkina Faso',
	'Burundi': 'Burundi',
	'Cambodia': 'Singapore', //singapore
	'Cameroon': 'Cameroon',
	'Canada': 'Canada',
	'Cape Verde': 'Cape Verde',
	'Central African Republic': 'Central African Republic',
	'Chad': 'Chad',
	'Chile': 'Chile',
	'China': 'China',
	'Colombia': 'Colombia',
	'Comoros': 'Comoros',
	'Republic of the Congo': 'Republic of the Congo',
	'Costa Rica': 'Costa Rica',
	'Croatia': 'Croatia',
	'Cuba': 'Cuba',
	'Cyprus': 'Cyprus',
	'Czech Republic': 'Czech Republic',
	'Denmark': 'Denmark',
	'Djibouti': 'Djibouti',
	'Dominica': 'Dominica',
	'Dominican Republic': 'Dominican Republic',
	'Ecuador': 'Ecuador',
	'Egypt': 'Egypt',
	'El Salvador': 'El Salvador',
	'Equatorial Guinea': 'quatorial Guinea',
	'Eritrea': 'Eritrea',
	'Estonia': 'Estonia',
	'Ethiopia': 'Ethiopia',
	'Falkland Islands': 'Falkland Islands',
	'Faroe Islands': 'Faroe Islands',
	'Fiji': 'Fiji',
	'Finland': 'Finland',
	'France': 'France',
	'French Guiana': 'French Guiana',
	'French Southern and Antarctic Lands': 'French Southern and Antarctic Land',
	'Gabon': 'Gabon',
	'Gambia': 'Gambia',
	'Gaza Strip': 'Gaza Strip',
	'Georgia': 'Georgia',
	'Germany': 'Germany',
	'Ghana': 'Ghana',
	'Greece': 'Greece',
	'Greenland': 'Greenland',
	'Grenada': 'Grenada',
	'Guadeloupe': 'Guadeloupe',
	'Guatemala': 'Guatemala',
	'Guinea': 'Guinea',
	'Guinea Bissau': 'Guinea Bissau',
	'Guyana': 'Guyana',
	'Haiti': 'Haiti',
	'Honduras': 'Honduras',
	'Hong Kong': 'Hong Kong',
	'Hungary': 'Hungary',
	'Iceland': 'Iceland',
	'India': 'India',
	'Indonesia': 'Indonesia',
	'Iran': 'Iran',
	'Iraq': 'Iraq',
	'Iraq-Saudi Arabia Neutral Zone': 'Iraq-Saudi Arabia Neutral Zone',
	'Ireland': 'Ireland',
	'Isle of Man': 'Isle of Man',
	'Israel': 'Israel',
	'Italy': 'Italy',
	'Ivory Coast': 'Ivory Coast',
	'Jamaica': 'Jamaica',
	'Jan Mayen': 'Jan Mayen',
	'Japan': 'Japan',
	'Jordan': 'Jordan',
	'Kazakhstan': 'Kazakhstan',
	'Kenya': 'Kenya',
	'Kerguelen': 'Kerguelen',
	'Kiribati': 'Kiribati',
	'North Korea': 'North Korea',
	'South Korea': 'South Korea',
	'Kuwait': 'Kuwait',
	'Kyrgyzstan': 'Kyrgyzstan',
	'Laos': 'Laos',
	'Latvia': 'Latvia',
	'Lebanon': 'Lebanon',
	'Lesotho': 'Lesotho',
	'Liberia': 'Liberia',
	'Libya': 'Libya',
	'Liechtenstein': 'Liechtenstein',
	'Lithuania': 'Lithuania',
	'Luxembourg': 'Luxembourg',
	'Macau': 'Macau',
	'Macedonia': 'Macedonia',
	'Madagascar': 'Madagascar',
	'Malawi': 'Malawi',
	'Malaysia': 'Malaysia',
	'Maldives': 'Maldives',
	'Mali': 'Mali',
	'Malta': 'Malta',
	'Martinique': 'artinique',
	'Mauritania': 'Mauritania',
	'Mauritius': 'Mauritius',
	'Mexico': 'Mexico',
	'Moldova': 'Moldova',
	'Monaco': 'Monaco',
	'Mongolia': 'Mongolia',
	'Morocco': 'Morocco',
	'Mozambique': 'Mozambique',
	'Myanmar': 'Myanmar',
	'Namibia': 'Namibia',
	'Nepal': 'Nepal',
	'Netherlands': 'Netherlands',
	'New Caledonia': 'New Caledonia',
	'New Zealand': 'New Zealand',
	'Nicaragua': 'Nicaragua',
	'Niger': 'Niger',
	'Nigeria': 'igeria',
	'Northern Mariana Islands': 'Northern Mariana Islands',
	'Norway': 'Norway',
	'Oman': 'Oman',
	'Pakistan': 'Pakistan',
	'Panama': 'Panama',
	'Papua New Guinea': 'Papua New Guinea',
	'Paraguay': 'Paraguay',
	'Peru': 'Peru',
	'Philippines': 'Philippines',
	'Poland': 'Poland',
	'Portugal': 'Portugal',
	'Puerto Rico': 'Puerto Rico',
	'Qatar': 'Qatar',
	'Reunion': 'Reunion',
	'Romania': 'Romania',
	'Russia': 'Russia',
	'Rwanda': 'Rwanda',
	'San Marino': 'San Marino',
	'Sao Tome and Principe': 'Sao Tome and Principe',
	'Saudi Arabia': 'Saudi Arabia',
	'Senegal': 'Senegal',
	'Seychelles': 'Seychelles',
	'Sierra Leone': 'Sierra Leone',
	'Singapore': 'Singapore00',
	'Slovakia': 'Slovakia',
	'Slovenia': 'Slovenia',
	'Solomon Islands': 'Solomon Islands',
	'Somalia': 'Somalia',
	'South Africa': 'South Africa',
	'Spain': 'Spain',
	'Sri Lanka': 'Sri Lanka',
	'St. Christopher-Nevis': 'St. Christopher-Nevis',
	'St. Lucia': 'St. Lucia',
	'St. Vincent and the Grenadines': 'St. Vincent and the Grenadines',
	'Sudan': 'Sudan',
	'Suriname': 'Suriname',
	'Svalbard': 'Svalbard',
	'Swaziland': 'Swaziland',
	'Sweden': 'Sweden',
	'Switzerland': 'Switzerland',
	'Syria': 'Syria',
	'Taiwan': 'Taiwan',
	'Tajikistan': 'Tajikistan',
	'United Republic of Tanzania': 'United Republic of Tanzania',
	'Thailand': 'Thailand',
	'Togo': 'Togo',
	'Tonga': 'Tonga',
	'Trinidad and Tobago': 'Trinidad and Tobago',
	'Tunisia': 'Tunisia',
	'Turkey': 'Turkey',
	'Turkmenistan': 'Turkmenistan',
	'Turks and Caicos Islands': 'Turks and Caicos Islands',
	'Uganda': 'Uganda',
	'Ukraine': 'Ukraine',
	'United Arab Emirates': 'United Arab Emirates',
	'United Kingdom': 'United Kingdom',
	'United States of America': 'United States of America',
	'Uruguay': 'Uruguay',
	'Uzbekistan': 'Uzbekistan',
	'Vanuatu': 'Vanuatu',
	'Venezuela': 'Venezuela',
	'Vietnam': 'Vietnam',
	'Western Sahara': 'Western Sahara',
	'Western Samoa': 'Western Samoa',
	'Yemen': 'Yemen',
	'Yugoslavia': 'Yugoslavia',
	'Democratic Republic of the Congo': 'Democratic Republic of the Congo',
	'Zambia': 'Zambia',
	'Zimbabwe': 'Zimbabwe',
	'South Sudan': 'South Sudan',
	'Somaliland': 'Somaliland',
	'Montenegro': 'Montenegro',
	'Kosovo': 'Kosovo',
	'Republic of Serbia': 'Republic of Serbia',

};
// legend内容
var legendData = ['All Category', 'Shell', "Screen", 'Camera', 'A11 Chip', "Vibrator", 'Network Speed', 'Battery / Power', "Wifi / Bluetooth", "Flash memory(ROM)", "Hard disk(RAM)", "Heat dissipation", "Headphone / Microphone", "Mobile payment(NFC)", "Other"];
// legend color
var legendColor = ['#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea', '#65feea'];
// 映射颜色  不设置有默认色
var visColor = ["red", "#e8192f", "#d6664d", "#B9044E", "#f0ba2e", "#d3ce2b", "#169A7f", "#0b6573", "#1BB3c8"];
// seriesData Array [{name:'',type:'map',mapType:'china',
//           label: { normal: {show: true},emphasis: { show: true}},data:[{name:'',value:''},...]},{...}]

//map
var seriseData = [
	//all
	{
		name: 'All Category',
		barWidth: 30,
		type: 'map',

		mapType: 'world',
		zoom: 1.1,

		//map style
		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},

		tooltip: { //显示悬浮窗口
			trigger: 'item',
			//使用这个函数返回悬浮内容
			formatter: function(params) {
				//定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
				// var res='随机数字'+'<br />';

				if(params.name == 'Japan') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>Japan : 40</div>'
					// '<div class=company><div class=circle> </div></div>'
					return res;
				}
				if(params.name == 'China') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>China : 62</div>' +
						'<div class=mainland><span class=circle></span>Mainland : 18</div>' +
						'<div class=taiwan><div class=circle2></div>Taiwan : 44</div>'
					return res;
				}
				
				if(params.name == 'United States') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>United States : 41</div>' 
					return res;
				}
				
				if(params.name == 'Singapore') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>Singapore : 6</div>' 
					return res;
				}
				if(params.name == 'Germany') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>Germany : 5</div>' 
					return res;
				}
				if(params.name == 'Netherlands') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>Netherlands : 4</div>' 
					return res;
				}
				if(params.name == 'Italy') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>Italy : 1</div>' 
					return res;
				}
				if(params.name == 'French') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>Frenche : 1</div>' 
					return res;
				}
				if(params.name == 'Austria') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>Austria : 1</div>' 
					return res;
				}
				if(params.name == 'Korea') {
					var res = '<div class=lableContent1>All Category</div>' +
						'<div class=lableContent2>Korea : 10</div>' 
					return res;
				}
			},

		},

		data: [{
				name: 'Japan',
				value: 40
			},
			{
				name: 'China',
				value: 62
			},
			{
				name: 'Singapore',
				value: 6
			},
			{
				name: 'United States',
				value: 41
			},
			{
				name: 'Germany',
				value: 5
			},
			{
				name: 'Netherlands',
				value: 4
			},
			{
				name: 'Italy',
				value: 1
			},
			{
				name: 'French',
				value: 1
			},
			{
				name: 'Austria',
				value: 1
			},
			{
				name: 'Korea',
				value: 10
			},

		]
	},

	//shell
	{
		name: 'Shell',
		barWidth: 30,
		type: 'map',
		mapType: 'world',
		// geoIndex:0,
		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		
			tooltip: { //显示悬浮窗口
			trigger: 'item',
			//使用这个函数返回悬浮内容
			formatter: function(params) {
				//定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
				// var res='随机数字'+'<br />';

				if(params.name == 'Japan') {
					var res = '<div class=lableContent1>Shell</div>' +
						'<div class=lableContent2>Japan : 2</div>'+
						'<div class=company><div class=circle3></div> Toyo Rikagaku Kenkyusho </div>'+
						'<div class=company-bottom><div class=circle3></div>Zeniya Aluminum Engineering </div>'
					
					return res;
				}
				if(params.name == 'China') {
					var res = '<div class=lableContent1>Shell</div>' +
						'<div class=lableContent2>China : 3</div>' +
						'<div class=mainland><span class=circle></span>Mainland : 1</div>' +
						'<div class=company-bottom><div class=circle3></div> LianFeng Company </div>'+
						'<div class=mainland><div class=circle2></div>Taiwan : 2</div>' +
						'<div class=company><div class=circle3></div> Catcher Technology </div>'+
						'<div class=company-bottom><div class=circle3></div>NANYA </div>'
					return res;
				}
				
				if(params.name == 'United States') {
					var res = '<div class=lableContent1>Shell</div>' +
						'<div class=lableContent2>United States : 1</div>' +
						'<div class=company-bottom><div class=circle3></div>Jabil Circuit </div>'
					return res;
				}
				
				if(params.name == 'Singapore') {
					var res = '<div class=lableContent1>Shell</div>' +
						'<div class=lableContent2>Singapore : 1</div>' +
						'<div class=company-bottom><div class=circle3></div>HI-P</div>'
					return res;
				}
				
			},

		},

		data: [{
				name: 'Japan',
				value: 2
			},
			{
				name: 'China',
				value: 3
			},
			{
				name: 'Singapore',
				value: 1
			},
			{
				name: 'United States',
				value: 1
			},

		],

	},

	//camera
	{
		name: 'Camera',
		barWidth: 30,
		type: 'map',
		mapType: 'world',

		//点
		// geoIndex:0,

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},

		data: [

			{
				name: 'Japan',
				value: 3
			},
			{
				name: 'China',
				value: 4
			},
			{
				name: 'Italy',
				value: 1
			},
			{
				name: 'French',
				value: 1
			},
			{
				name: 'Korea',
				value: 1
			},
			{
				name: 'Austria',
				value: 1
			},
		],

	},
	//battery / power
	{
		name: 'Battery / Power',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},

		data: [{
				name: 'China',
				value: 6
			},
			{
				name: 'Singapore',
				value: 1
			},
			{
				name: 'United States',
				value: 7
			},
			{
				name: 'Netherlands',
				value: 1
			},
			{
				name: 'Korea',
				value: 1
			},

		],

	},

	//Network speed
	{
		name: 'Network Speed',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
				name: 'United States',
				value: 3
			},

		],
	},

	//a11 chip
	{
		name: 'A11 Chip',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
				name: 'United States',
				value: 3
			},
			{
				name: 'Germany',
				value: 2
			},
			{
				name: 'China',
				value: 1
			},
			{
				name: 'Korea',
				value: 1
			},
		],
	},
	//Wifi/Bluetooth
	{
		name: 'Wifi / Bluetooth',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
				name: 'Japan',
				value: 1
			},
			{
				name: 'Singapore',
				value: 1
			},
			{
				name: 'China',
				value: 1
			},
		],
	},
	//Flash memory(ROM)
	{
		name: 'Flash memory(ROM)',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
			name: 'Japan',
			value: 1
		}, ],
	},
	//Hard disk(RAM)
	{
		name: 'Hard disk(RAM)',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
				name: 'United States',
				value: 3
			},
			{
				name: 'Korea',
				value: 1
			},
		],
	},
	//Heat dissipation
	{
		name: 'Heat dissipation',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
				name: 'United States',
				value: 1
			},
			{
				name: 'China',
				value: 3
			},
			{
				name: 'Japan',
				value: 1
			},
		],
	},
	//vibrator
	{
		name: 'Vibrator',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
			name: 'China',
			value: 2
		}, ],
	},
	//Headphone/Microphone
	{
		name: 'Headphone / Microphone',
		type: 'map',
		mapType: 'world',
		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
				name: 'China',
				value: 4
			},
			{
				name: 'United States',
				value: 4
			},
			{
				name: 'Korea',
				value: 1
			},
			{
				name: 'Netherlands',
				value: 1
			},
		],
	},
	//Screen
	{
		name: 'Screen',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
				name: 'China',
				value: 7
			},
			{
				name: 'United States',
				value: 3
			},
			{
				name: 'Korea',
				value: 5
			},
			{
				name: 'Japan',
				value: 10
			},
		],
	},
	//Mobile payment(NFC)
	{
		name: 'Mobile payment(NFC)',
		type: 'map',
		mapType: 'world',

		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
			name: 'Netherlands',
			value: 1
		}, ],
	},
	//Other
	{
		name: 'Other',
		type: 'map',
		mapType: 'world',
		itemStyle: {
			areaColor: 'rgba(45, 46, 51, 0.3)',
			borderColor: 'rgba(123, 123, 123, 0.6)',

			emphasis: {
				show: 'true',
				borderColor: "white",
				borderWidth: 1,

				areaColor: 'rgba(45,45,48,1)',
				label: {
					show: true,
					textStyle: {
						color: "white",
						fontSize: 15
						// fontFamily: "Arial"
					}

				}

			}
		},
		data: [{
				name: 'Japan',
				value: 22
			},
			{
				name: 'Netherlands',
				value: 1
			},
			{
				name: 'China',
				value: 31
			},
			{
				name: 'United States',
				value: 16
			},
			{
				name: 'Singapore',
				value: 3
			},
			{
				name: 'Germany',
				value: 3
			},
		],
	},

]

//map style
option = {

	tooltip: {
		trigger: 'item'

	},
	legend: {
		orient: 'vertical',
		left: '10%',
		bottom: '20%',
		data: legendData,
		selectedMode: 'single',
		textStyle: {
			color: "white" //actived
		}

	},

	//  itemStyle: {   //每个点的样式
	//          normal: {
	//            areaColor: 'transparent',  
	//            borderColor: '#3fdaff',
	//            borderWidth: 2,
	//            shadowColor: 'rgba(63, 218, 255, 0.5)',
	//            shadowBlur: 30  
	//          },
	//          emphasis: {
	//            areaColor: '#2B91B7',
	//          }
	//       },

	color: legendColor,

	//color verticle
	visualMap: {
		min: 0,
		max: 65,
		right: '10%',
		// left: 'left',
		bottom: '45%',
		// text: ['高','低'],           // 文本，默认为数值文本
		calculable: true,
		inRange: {
			color: ['#4479ff', '#c7ddff']
		},
		textStyle: {
			color: 'white'
		},
		// color:visColor
	},

	toolbox: {
		show: true,
		right: '5%',
		top: '5%',
		feature: {
			// dataView: {readOnly: false},
			// restore: {},
			saveAsImage: {}
		},
	},

	series: seriseData,
	nameMap: nameMap
};;

if(option && typeof option === "object") {
	myChart.setOption(option, true);

}

//bar chart
var dombar = document.getElementById("bar");
var bar = echarts.init(dombar);
var optionbar = {
	
		

	tooltip: {
		trigger: "axis",
			
		axisPointer: {
            
			label: {
				show: true
			}
		}
	},

	xAxis: {
		type: 'category',
		data: ["China(Taiwan)", "America", "Japan", "China(Mainland)", "Korea", "Singapore", "Germany", "Netherlands", "India", "France", "Austria"],
		axisLabel: {
			interval: 0,
			show: true,
			textStyle: {
				color: "#56627e" //X轴文字颜色
			}
		},

		axisLine: {
			lineStyle: {
				color: '#56627e'
			}
		}
		// minInterval: 1

	},
	yAxis: {
		type: 'value',
		name:'Number of companies',
		axisLabel: {
			color: '#56627e' //y轴颜色
		},

		axisLine: {
			lineStyle: {
				color: '#56627e'
			}
		},

		//background splitline
		splitLine: {
			show: false
		}
	},

	legend: {
		show: false
	},

	series: [{
		data: [44, 41, 40, 18, 10, 6, 5, 4, 1, 1, 1],
		name: 'All Category',
		type: 'bar',
		barWidth: 30,
		//bar style
		itemStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#86baff' // bottom color
				}, {
					offset: 1,
					color: '#2261ff' //  top color
				}], false),
				barBorderRadius: [0, 0, 0, 0],
				shadowColor: 'rgba(34,97,255,1)',
				shadowBlur: 18
			}
		}
	}]
};
bar.setOption(optionbar);

myChart.on('legendselectchanged', function(params) {
	console.log(params)
	if(params.name == 'All Category') {
		optionbar.xAxis.data = ["China(Taiwan)", "America", "Japan", "China(Mainland)", "Korea", "Singapore", "Germany", "Netherlands", "India", "France", "Austria"];
//		optionbar.series[0].name = All Category;
		optionbar.series[0].data = [44, 41, 40, 18, 10, 6, 5, 4, 1, 1, 1];
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Shell') {
		optionbar.xAxis.data = ["China(Taiwan)", "Japan", "China(Mainland)", "Singapore", "America"];
		optionbar.series[0].data = [2, 2, 1, 1, 1];
		optionbar.series[0].name = "Shell";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Camera') {
		optionbar.xAxis.data = ["China(Taiwan)", "Japan", "India", "France", "Korea", "Austria"];
		optionbar.series[0].data = [4, 3, 1, 1, 1, 1];
		optionbar.series[0].name = "Camera";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Battery / Power') {
		optionbar.xAxis.data = ["America", "China(Taiwan)", "China(Mainland)", "Korea", "Netherlands", "Singapore"];
		optionbar.series[0].data = [7, 4, 2, 1, 1, 1];
		optionbar.series[0].name = "Battery / Power";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Network Speed') {
		optionbar.xAxis.data = ["America"];
		optionbar.series[0].data = [3];
		optionbar.series[0].name = "Network Speed";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'A11 Chip') {
		optionbar.xAxis.data = ["America", "Germany", "China(Taiwan)", "Korea"];
		optionbar.series[0].data = [3, 2, 1, 1];
		optionbar.series[0].name = "A11 Chip";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Wifi / Bluetooth') {
		optionbar.xAxis.data = ["China(Taiwan)", "Japan", "Singapore"];
		optionbar.series[0].data = [1, 1, 1];
		optionbar.series[0].name = "Wifi / Bluetooth";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Flash memory(ROM)') {
		optionbar.xAxis.data = ["Japan"];
		optionbar.series[0].data = [1];
		optionbar.series[0].name = "Flash memory(ROM)";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Hard disk(RAM)') {
		optionbar.xAxis.data = ["America", "Korea"];
		optionbar.series[0].data = [3, 1];
		optionbar.series[0].name = "Hard disk(RAM)";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Heat dissipation') {
		optionbar.xAxis.data = ["China(Taiwan)", "America", "Japan"];
		optionbar.series[0].data = [3, 1, 1];
		optionbar.series[0].name = "Heat dissipation";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Vibrator') {
		optionbar.xAxis.data = ["China(Taiwan)", "China(Mainland)"];
		optionbar.series[0].data = [1, 1];
		optionbar.series[0].name = "Vibrator";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Headphone / Microphone') {
		optionbar.xAxis.data = ["America", "China(Taiwan)", "China(Mainland)", "Korea", "Netherlands"];
		optionbar.series[0].data = [4, 2, 2, 1, 1];
		optionbar.series[0].name = "Headphone / Microphone";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Screen') {
		optionbar.xAxis.data = ["Japan", "Korea", "China(Taiwan)", "America", "China(Mainland)"];
		optionbar.series[0].data = [10, 5, 5, 3, 2];
		optionbar.series[0].name = "Screen";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Mobile payment(NFC)') {
		optionbar.xAxis.data = ["Netherlands"];
		optionbar.series[0].data = [1];
		optionbar.series[0].name = "Mobile payment(NFC)";
		optionbar.series[0].barWidth = 30;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}
	if(params.name == 'Other') {
		optionbar.xAxis.data = ["Japan", "China(Taiwan)", "America", "China(Mainland)", "Singapore", "Germany", "Netherlands"];
		optionbar.series[0].data = [22, 21, 16, 10, 3, 3, 1];
		optionbar.series[0].name = "Other";
		optionbar.series[0].barWidth = 30;
		// optionbar.xAxis[0].axisLabel.interval=0;
		console.log(optionbar)
		bar.setOption(optionbar, true);
	}

});