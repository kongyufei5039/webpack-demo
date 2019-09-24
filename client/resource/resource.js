
/**
 * 数据安全管理平台
 * 分块背景图
 * 2018.5.24
 */

/// ////////////////////////////////////////////////////////////////////////////
// 资源注册
window.DtScreen.reg('307', function (Util) {
    'use strict';
    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    const VERSION = '1.0.0';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var url = '307';

    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义

    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '数据安全管理平台',
        url: url,
        paras: {
            // title: {type: 'string', label:'标题', min: 1, max: 32}
        },

        loadHtml: function () {
            return '<div class="box left-box">' +
                '<div class="left-top"></div><div class="left-bottom">' +
                '<div class="left-1 block-width"><h2 style="top: 14px;">敏感数据资产管理</h2></div>' +
                '<div class="left-2 block-width"><h2>敏感数据资产分类分级</h2></div>' +
                '<div class="left-3 block-width"><h2 style="padding-right: 7px;">业务系统监控</h2></div>' +
                '</div></div>' +
                '<div class="box center-box"></div>' +
                '<div class="box right-box"><div class="right-top"></div><div class="right-bottom">' +
                '<div class="right-1 block-width bigOne"><h2>敏感数据访问趋势</h2></div>' +
                '<div class="right-2 block-width"><h2>账号风险</h2></div>' +
                '<div class="right-3 block-width"><h2 style="padding-right: 7px;">风险事件预警</h2></div>' +
                '</div></div>'
        },
        init: function (div, paras) {
        }
    };

    return Module;
});

/// ////////////////////////////////////////////////////////////////////////////
// 测试数据注册
// window.DtScreen.regTestData('301', function () {
// });

/**
 * 安全态势感知大屏 左上部文字部分
 * cmh
 * */

/// ////////////////////////////////////////////////////////////////////////////

window.DtScreen.reg('308', function (Util) {
    'use strict';

    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    const VERSION = '1.0.0';
    const RES_NAME = '308';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var url = RES_NAME;    //
    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义


    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '左上角',
        url: url,
        paras: {},
        loadHtml: function () {
            return '<div class="todayData">今日数据</div><ul class="clear">' +
                // '<li>数据采集: <span class="dataAcount" id="dataCollection">533250</span><span class="dataUnit">条</span></li>' +
                // '<li>数据交换: <span class="dataAcount" id="dataExchange">524500</span><span class="dataUnit">条</span></li>' +
                '<li>敏感数据访问: <span class="dataAcount" id="sensitiveData">120</span><span class="dataUnit">次</span></li>';
        },     
        processData: function (param) {
            var data = [];
            for(var k in param.data){
                data[k] = param.data[k];
            }
            return data;
        }
    };
    return Module;
});

/**
 * 数据安全管理平台
 * 数据资产管理
 * 2018.5.24
 * */

/// ////////////////////////////////////////////////////////////////////////////

window.DtScreen.reg('309', function (Util) {
    'use strict';

    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    const VERSION = '1.0.0';
    const RES_NAME = '309';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var url = RES_NAME;    //

    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义
    var ips = [Mock.mock('@ip'),Mock.mock('@ip'),Mock.mock('@ip'),Mock.mock('@ip'),Mock.mock('@ip')];





    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '数据资产管理',
        url: url,
        paras: {},

        loadHtml: function () {
            return '<div class="divData"><ul class="ulData1">'+
            '<li class="liData1 od">数据库总数：<span id="dbCount"></span></li>'+
            '<li class="liData1 ot">数据表总数：<span id="tableCount"></span></li>'+
            // '<li class="liData1 chp">交换平台：<span id="exchangeCount"></span></li>'+
            // '<li class="liData1 cp">治理平台：<span id="managementCount"></span></li>
                '</ul></div>'+
            '<ul class="dbUl">'+
            '<li class="liData2">Oracle<div><span class="showDb" id="oracledbCount">0</span><span class="showTable" id="oracletableCount">0</span></div></li>'+
            '<li class="liData2">Mysql<div><span class="showDb" id="mysqldbCount">0</span><span class="showTable" id="mysqltableCount">0</span></div></li>'+
            '<li class="liData2">SQL Server<div><span class="showDb" id="sqlserverdbCount">0</span><span class="showTable" id="sqlservertableCount">0</span></div></li>'+
            '<li class="liData2">RDS<div><span class="showDb" id="rdsdbCount">0</span><span class="showTable" id="rdstableCount">0</span></div></li></ul>';
        },
        processData: function (param) {
            var data = {};
            data.dbCount = param.data.dbAllCount || 0;
            data.tableCount = param.data.tableAllCount || 0;
            // data.exchangeCount = param.data.exchangeCount;
            // data.managementCount = param.data.managementCount;
            for(var item of param.data.detail) {
                data[item.dbType.toLowerCase() + 'dbCount'] = item.dbCount;
                data[item.dbType.toLowerCase() + 'tableCount'] = item.tableCount;
            }
            return data;

        }
    };
    return Module;
});



/// ////////////////////////////////////////////////////////////////////////////
// 资源注册
window.DtScreen.reg('310', function (Util) {
    'use strict';
    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    var VERSION = '1.0.0';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var $ = window.$;
    var url = '310';

    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义
    function creatData2(json) {
        $("#dataAssert").empty();
        var th;
        $.each(json.columns, function (colIndex, col) {
            th += "<th>" + col.Title + "</th>";
        });
        $("#dataAssert").append("<tr>" + th + "</tr>");

        //行遍历
        $.each(json.rows, function (rowIndex, row) {
            var tr;
            //列遍历
            $.each(json.columns, function (colIndex, col) {
                tr += '<td>' + row[col.FieldID] + '</td>'
            });

            $("#dataAssert").append('<tr>' + tr + '</tr>');
        });

    }


    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '业务安全',
        url: url,
        paras: {
            description: {type: 'string', label: '文本'},
            cssName: {type: 'string', label: '样式'},
            fontStyle: {type: 'string', label: '字体'}
        },
        loadHtml: function () {
            return '<table class="gridTable" id="dataAssert"></table>' ;
        },
        // init: function () {
        //     // $("#dataAssert").find("tr").eq(1).find("td").eq(3).text(5555);
        //     // $("#dataAssert").find("tr").eq(2).find("td").eq(3).text(1245);
        //     // $("#dataAssert").find("tr").eq(3).find("td").eq(3).text(3872);
        //     // $("#dataAssert").find("tr").eq(4).find("td").eq(3).text(1523);
        //     // $("#dataAssert").find("tr").eq(5).find("td").eq(3).text(1888);
        //     $("#dataAssert").find("tr").eq(1).find("td").eq(4).text(16);
        //     $("#dataAssert").find("tr").eq(2).find("td").eq(4).text(11);
        //     $("#dataAssert").find("tr").eq(3).find("td").eq(4).text(35);
        //     $("#dataAssert").find("tr").eq(4).find("td").eq(4).text(11);
        //     $("#dataAssert").find("tr").eq(5).find("td").eq(4).text(12);
        // },
        processData: function (param) {
            var data = param.data;
            if(data.length > 5){
                data.splice(5);
            };
            var json =
                {
                    'columns': [
                        {'FieldID': 'dataElement', 'Title': '数据元'},
                        {'FieldID': 'securityClassfication', 'Title': '类型'},
                        {'FieldID': 'securityLevel', 'Title': '级别'},
                        {'FieldID': 'dataScale', 'Title': '数量'}]
                };
                json.rows = data;
                creatData2(json);
        }
    };

    return Module;
});



/// ////////////////////////////////////////////////////////////////////////////
// 资源注册
window.DtScreen.reg('311', function (Util) {
    'use strict';
    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    var VERSION = '1.0.0';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var $ = window.$;
    var url = '311';

    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义
    function creatData2(json) {
        $("#businessMonitor").empty();
        var th;
        $.each(json.columns, function (colIndex, col) {
            th += "<td>" + col.Title + "</td>";
        });
        $("#businessMonitor").append("<tr>" + th + "</tr>");

        //行遍历
        $.each(json.rows, function (rowIndex, row) {
            var tr;
            //列遍历
            $.each(json.columns, function (colIndex, col) {
                tr += '<td>' + row[col.FieldID] + '</td>'
            });

            $("#businessMonitor").append('<tr>' + tr + '</tr>');
        });

    }


    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '业务安全',
        url: url,
        paras: {
            description: {type: 'string', label: '文本'},
            cssName: {type: 'string', label: '样式'},
            fontStyle: {type: 'string', label: '字体'}
        },
        loadHtml: function () {
            return '<table class="gridTable" id="businessMonitor"></table>' +
                '<img class="tableImg" src="./resource/307/right-bottom-icon.svg" style="margin: 2px 20px 0 0;">';
        },
        init: function () {
            $('#businessMonitor').find("tr").eq(1).find("td").eq(2).text(20);
            $('#businessMonitor').find("tr").eq(2).find("td").eq(2).text(10);
            $('#businessMonitor').find("tr").eq(3).find("td").eq(2).text(10);
            $('#businessMonitor').find("tr").eq(4).find("td").eq(2).text(15);
            $('#businessMonitor').find("tr").eq(5).find("td").eq(2).text(20);
        },
        processData: function (param) {
            var data = param.data.items;
            if(data.length > 5){
                data.splice(5);
            };
            var json =
                {
                    'columns': [
                        {'FieldID': 'appName', 'Title': '业务系统'},
                        {'FieldID': 'interfaceCount', 'Title': '敏感接口数'},
                        {'FieldID': 'visitCount', 'Title': '访问次数'}]
                };
            json.rows = data;
            creatData2(json);
        }
    };

    return Module;
});

/**
 * 安全态势感知大屏 右上角部分 本地时间展示
 * cmh
 * */

/// ////////////////////////////////////////////////////////////////////////////

window.DtScreen.reg('564', function (Util) {
    'use strict';

    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    const VERSION = '1.0.0';
    const RES_NAME = '564';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var url = RES_NAME;    //

    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义
    var getNow = function(){
        $("#localDate2").text(Mock.Random.now());
    };

    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '租户总数',
        url: url,
        paras: {
            // title: {type: 'string', label:'标题', min: 1, max: 32}
        },

        loadHtml: function () {
            return '<span id="localDate2"></span>';
        },
        init: function (div, paras) {
            getNow();
            setInterval(getNow, 1000); //设置过1000毫秒就是1秒，调用show方法
        }
    };
    return Module;
});

/**
 * 数据安全管理平台
 * 中间动图
 * 2018.5.24
 * */

/// ////////////////////////////////////////////////////////////////////////////

window.DtScreen.reg('313', function (Util) {
    'use strict';

    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    const VERSION = '1.0.0';
    const RES_NAME = '313';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var url = RES_NAME;    //

    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义


    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '数据安全管理平台中间动图',
        url: url,
        paras: {
            // title: {type: 'string', label:'标题', min: 1, max: 32}flowDirectArrow.svg
        },

        loadHtml: function () {
            return '<div class="centerBox">' +
                '<div class="todayData1"><h1>今日数据风险预警</h1><p id="todayAlarm"></p></div>' +
                '<div class="todayData2"><h1>今日风险账号</h1><p id="todayAccount"></p></div>' +
                '<div id="safetyScore"><span class="score"></span><img src="./resource/313/safetyScore.svg"/></div>' +
                '<img id="centerMainSvg" src="./resource/313/center-mainc.svg"/>' +
                '<img id="dataSafetyBrain" src="./resource/313/dataSafetyBrain.svg"/>' +
                '<img id="brain" src="./resource/313/brainc.svg"/>' +
                '<img class="exchange" id="exchange1" src="./resource/313/exchange1.svg"/>' +
                '<img class="exchange" id="exchange2" src="./resource/313/exchange2.svg"/>' +
                '<div class="toolTipLeft content313">'+
                '<p>敏感内容：<span id="scontentLeft"></span></p>'+
                '<p>源IP：<span id="sourceipLeft"></span></p>'+
                '<p>目的IP：<span id="aimipLeft"></span></p>'+
                '<img class="lineLeft" src="./resource/307/line.svg"/></div>'+
                '<div class="toolTipCenter content313">'+
                '<p>敏感内容：<span id="scontentCenter"></span></p>'+
                '<p>源IP：<span id="sourceipCenter"></span></p>'+
                '<p>目的IP：<span id="aimipCenter"></span></p>'+
                '<p>账号：<span id="accountCenter"></span></p>'+
                '<p>系统：<span id="osCenter"></span></p>'+
                '<img class="lineCenter" src="./resource/307/lineC.svg"/></div>'+
                '<div class="toolTipRight content313">'+
                '<p>敏感内容：<span id="scontentRight"></span></p>'+
                '<p>源IP：<span id="sourceipRight"></span></p>'+
                '<p>目的IP：<span id="aimipRight"></span></p>'+
                '<img class="lineRight" src="./resource/307/lineR.svg"/></div>' +
                '<img class="imgSrc" src="./resource/313/dun.svg"/>' +
                '<img class="yuanSrc" src="./resource/313/yuan.svg">'+
                '</div>'
        },
        processData: function (param) {
            $("#todayAccount").text(param.data.newRiskAccountCount+'个');
            var oneData=10;
            $("#todayAlarm").text(param.data.newRiskEventCount+'个');

            if(param.data.safeScore>60){
                $(".score").css("color","#00e1ff");
                if(param.data.safeScore == 100){
                    $(".score").css("left","36px");
                }
            }else if(param.data.safeScore>30){
                $(".score").css("color","#edea4b");
            }else {
                $(".score").css("color","#ff395f");
                if(param.data.safeScore < 10){
                    $(".score").css("left","75px");
                }
            }
            var dataScore=param.data.safeScore;
            $(".score").text(dataScore);
            if (param.data.riskInfo) {
                var leftTimeout;
                var rightTimeout;
                var rightTimeout2;
                var centerTimeout;
                var timeout;
                // 赋值
                $("#scontentLeft").text(param.data.riskInfo['事件']);
                $("#sourceipLeft").text(param.data.riskInfo['源Ip']);
                $("#aimipLeft").text(param.data.riskInfo['目的IP']);
                $("#scontentRight").text(param.data.riskInfo['事件']);
                $("#sourceipRight").text(param.data.riskInfo['源Ip']);
                $("#aimipRight").text(param.data.riskInfo['目的IP']);
                $("#scontentCenter").text(param.data.riskInfo['事件']);
                $("#sourceipCenter").text(param.data.riskInfo['源Ip']);
                $("#aimipCenter").text(param.data.riskInfo['目的IP']);
                $("#accountCenter").text(param.data.riskInfo.account);
                $("#osCenter").text(param.data.riskInfo.operationSystem);

                // 动画显示
                $(".toolTipLeft").animate({opacity: 1},2000,function () {
                    oneData += 1;
                    $("#todayAlarm").text(oneData+'个');
                    leftTimeout = setTimeout(function () {
                        $(".toolTipLeft").animate({opacity:0},1000,function () {
                            rightTimeout = setTimeout(function () {
                                $(".toolTipRight").animate({opacity: 1},2000,function () {
                                    oneData += 1;
                                    $("#todayAlarm").text(oneData+'个');
                                    rightTimeout2 = setTimeout(function () {
                                        $(".toolTipRight").animate({opacity: 0},1000,function () {
                                            centerTimeout = setTimeout(function () {
                                                $(".toolTipCenter").animate({opacity: 1},2000,function () {
                                                    oneData += 1;
                                                    dataScore -=1;
                                                    $(".score").text(dataScore);
                                                    $("#todayAlarm").text(oneData+'个');
                                                    timeout = setTimeout(function () {
                                                        $(".toolTipCenter").animate({opacity: 0},1000,function () {
                                                            clearTimeout(leftTimeout);
                                                            clearTimeout(rightTimeout);
                                                            clearTimeout(rightTimeout2);
                                                            clearTimeout(centerTimeout);
                                                        });
                                                    },2000);
                                                });
                                            },2000);
                                        });
                                    },2000);
                                });
                            },2000);
                        });
                    },2000);
                });
// if( $(".toolTipCenter").css("opacity")=='1' ||$(".toolTipRight").css("opacity")=='1' ||$(".toolTipLeft").css("opacity")=='1'){
//     alert("ok")
// }
                clearTimeout(timeout);
            }else {
                $(".toolTipLeft").css('opacity', 0);
                $(".toolTipCenter").css('opacity', 0);
                $(".toolTipRight").css('opacity', 0);
            }
            if( $(".toolTipCenter").css("opacity")==1 ||$(".toolTipRight").css("opacity")==1 ||$(".toolTipLeft").css("opacity")==1){
                alert("ok")
            }

        }
    };
    return Module;
});

/**
 * 安全态势感知大屏 敏感数访问趋势图表
 * gy
 * */

/// ////////////////////////////////////////////////////////////////////////////

window.DtScreen.reg('592', function (Util) {
    'use strict';

    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    const VERSION = '1.0.0';
    const RES_NAME = '592';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var url = RES_NAME;    //
    var date=[];
    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义
    function getDay(day){
        var today = new Date();
        var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        var tYear = today.getFullYear();
        var tMonth = today.getMonth();
        var tDate = today.getDate();
        tMonth = tMonth + 1;
        return tYear+"-"+tMonth+"-"+tDate;
    }
            
        var option = {
            title : {},
            tooltip : {
                trigger: 'axis',
                textStyle: {
                    color: '#44a5b8',
                    fontSize: '12',
                    fontFamily: 'Microsoft YaHei'
                }
            },
            color: ['#24b7df','#22f183'],
            legend: {
                data: [
                    {
                        name: ' 正常数据',
                        icon: 'rect',
                        textStyle: {
                            color: '#24b7df'
                        }
                    },
                    {
                        name: ' 敏感数据',
                        icon: 'rect',
                        textStyle: {
                            color: '#22f183'
                        }
                    }
                ],
                y: 'top',
                right:'5%',
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 18
            },
            calculable : true,
            xAxis :
                {
                    type : 'category',
                    boundaryGap : false,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#44a5b8'
                        }
                    },
                    data : date,
                    axisLabel:{
                        textStyle:{
                            color:"#44a5b8",
                            fontSize:'12'
                        }
                    }
                }
            ,
            yAxis :
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            type:'dash',
                            color:'#44a5b8',
                            width:'1',
                            opacity:0.5
                        }
                        },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true
                        ,
                        lineStyle: {
                            color: '#1e4d56'
                        }
                    },
                    axisLabel:{
                        textStyle:{
                            color:"#44a5b8",
                            fontSize:'12'
                        }
                    }
                },
            grid: {
                top: '17%',
                left: '5%',
                right:'5%',
                bottom: '9%',
                containLabel: true
            },
            series : [
                {
                    name:' 正常数据',
                    type:'line',
                    smooth:true,
                    areaStyle:{
                        normal:{
                            type: 'default',
                            color:new echarts.graphic.LinearGradient(0,0,0,1,
                                [{offset:0,color:'#24b7df'},{offset:1,color:'#000'}])
                        }
                    },
                    data:[]
                },
                {
                    name:' 敏感数据',
                    type:'line',
                    smooth:true,
                    areaStyle:{
                        normal:{
                            type: 'default',
                            color:new echarts.graphic.LinearGradient(0,0,0,1,
                                [{offset:0,color:'#22f183'},{offset:1,color:'#000'}])
                        }
                    },
                    data:[]
                }
            ]
        };
        
    

    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '敏感数据访问趋势',
        url: url,
        paras: {},

        loadHtml: function () {
            return '<div id="EChartBoxTrend"></div>';
        },
        init: function (div, paras) {
            // for(var i=0;i<7;i++){
            //     date.push(getDay(-i).replace(/-/g,'/').slice(5));
            // }
            // date.reverse();
            option.xAxis.data = date;
            var myChart = echarts.init(document.getElementById('EChartBoxTrend'));
            myChart.setOption(option);
        },
        processData: function (param) {
            var Data = [];
            for(var j=0;j<param.data.items.length;j++){
                Data[0] = param.data.items[j].normalCount;
                Data[1] = param.data.items[j].sensitiveCount;
            }
            for(var i=0;i<option.series.length;i++) {
                option.series[i].data = [];
                option.series[i].data = Data[i];
            }
            date = param.data.items[0] ? param.data.items[0].createTime : [];
            this.init();
        }
    };
    return Module;
});



/// ////////////////////////////////////////////////////////////////////////////
// 资源注册
window.DtScreen.reg('314', function (Util) {
    'use strict';
    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    var VERSION = '1.0.0';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var $ = window.$;
    var url = '314';

    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义
    function creatData2(json) {
        $("#accountRisk").empty();
        var th;
        $.each(json.columns, function (colIndex, col) {
            th += "<th>" + col.Title + "</th>";
        });
        $("#accountRisk").append("<tr>" + th + "</tr>");

        //行遍历
        $.each(json.rows, function (rowIndex, row) {
            var tr;
            //列遍历
            $.each(json.columns, function (colIndex, col) {
                tr += '<td>' + row[col.FieldID] + '</td>'
            });

            $("#accountRisk").append('<tr>' + tr + '</tr>');
        });

    }


    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '业务安全',
        url: url,
        paras: {
            description: {type: 'string', label: '文本'},
            cssName: {type: 'string', label: '样式'},
            fontStyle: {type: 'string', label: '字体'}
        },
        loadHtml: function () {
            return '<table class="gridTable" id="accountRisk"></table>' ;
        },
        processData: function (param) {
            var data = param.data.items;
            if(data.length > 5){
                data.splice(5);
            };
            var json =
                {
                    'columns': [
                        {'FieldID': 'accountName', 'Title': '账号'},
                        {'FieldID': 'appName', 'Title': '应用'},
                        {'FieldID': 'riskEventCount', 'Title': '风险事件个数'}]
                };
            json.rows=data;
            creatData2(json);
        }
    };

    return Module;
});



/// ////////////////////////////////////////////////////////////////////////////
// 资源注册
window.DtScreen.reg('315', function (Util) {
    'use strict';
    /// ////////////////////////////////////////////////////////////////////////
    // 常量定义
    var VERSION = '1.0.0';

    /// ////////////////////////////////////////////////////////////////////////
    // 变量定义
    var $ = window.$;
    var url = '315';

    /// ////////////////////////////////////////////////////////////////////////
    // 内部函数定义
    function creatData2(json) {
        $("#dataRisk").empty();
        var th;
        $.each(json.columns, function (colIndex, col) {
            th += "<td>" + col.Title + "</td>";
        });
        $("#dataRisk").append("<tr>" + th + "</tr>");

        //行遍历
        $.each(json.rows, function (rowIndex, row) {
            var tr;
            //列遍历
            $.each(json.columns, function (colIndex, col) {
                tr += '<td>' + row[col.FieldID] + '</td>'
            });

            $("#dataRisk").append('<tr>' + tr + '</tr>');
        });

    }


    /// ////////////////////////////////////////////////////////////////////////
    // 实例定义
    var Module = {
        version: VERSION,
        description: '业务安全',
        url: url,
        paras: {
            description: {type: 'string', label: '文本'},
            cssName: {type: 'string', label: '样式'},
            fontStyle: {type: 'string', label: '字体'}
        },
        loadHtml: function () {
            return '<table class="gridTable" id="dataRisk"></table>' +
               '<img class="tableImg" src="./resource/307/right-bottom-icon.svg">' ;
        },
        processData: function (param) {
            var data = param.data.items;
            // if(data.length > 5){
            //     data.splice(5);
            // };
            //从获取到的数据中随机展示五个，
            if(data.length > 5){
                data.sort(function(){
                    return Math.random() - 0.5;
                })
                data.splice(5);
            };
            var json =
                {
                    'columns': [
                        {'FieldID': 'eventName', 'Title': '事件名称'},
                        {'FieldID': 'riskLevelName', 'Title': '风险级别'},
                        {'FieldID': 'accountName', 'Title': '访问账号'},
                        {'FieldID': 'appName', 'Title': '应用'}]
                };
            json.rows=data;
            creatData2(json);
        }
    };

    return Module;
});
