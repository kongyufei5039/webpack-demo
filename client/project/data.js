window.DtStarData = function (sName) {
    var oData = {
        m1:function () {
            var data = {"code":200,"data":{"countTime":1527523200000,"dataCollection":533250,"dataExchange":524500,"sensitiveData":120},"message":"successful","success":true};
            data.data.dataCollection = $('#dataCollection').text()*1 + parseInt(Math.random()*10000);
            data.data.dataExchange = $('#dataExchange').text()*1 + parseInt(Math.random()*10000);
            data.data.sensitiveData = $('#sensitiveData').text()*1 + parseInt(Math.random()*15);
            return data;
        },
        m2: function () {
            var data = {
                "code": 200,
                "data": {
                    "exchangeCount": 0,
                    "managementCount": 0,
                    "tableCount": 1350,
                    "detail": {
                    "RDS": {
                        "tableCount": 51,
                        "dbCount": 10
                        },
                    "Mysql": {
                        "tableCount": 300,
                        "dbCount": 10
                        },
                    "SQLserver": {
                        "tableCount": 4105,
                        "dbCount": 5
                        },
                    "Oracle": {
                        "tableCount": 1203,
                        "dbCount": 15
                        }
                    },
                    "dbCount": 60
                },
                "message": "successful",
                "success": true
            };
            var de = ['RDS', 'Mysql', 'SQLserver', 'Oracle'];
            var r = parseInt(Math.random()*4);
            var der = de[r];
            data.data.detail[der].tableCount = $("#"+der+"tableCount").text()*1 > 99999 ? data.data.detail[der].tableCount : $("#"+der+"tableCount").text()*1 + parseInt(Math.random()*12);
            data.data.tableCount = $("#OracletableCount").text()*1+$("#MysqltableCount").text()*1+$("#SQLservertableCount").text()*1+$("#RDStableCount").text()*1;
            return data;
        },
        // m3:function () {
        //     var data = [
        //         {
        //             value: Mock.mock('@INT(30,60)'),
        //             name: '其他',
        //             itemStyle: {
        //                 normal: {
        //                     color: '#5b96f1',
        //                 }
        //             },
        //             selected: true
        //         },
        //         {
        //             value: Mock.mock('@INT(30,60)'),
        //             name: '上传漏洞',
        //             itemStyle: {
        //                 normal: {
        //                     color: '#a4ec92'
        //                 }
        //             },
        //             selected: true
        //         },
        //         {
        //             value: Mock.mock('@INT(30,60)'),
        //             name: '文件包含',
        //             itemStyle: {
        //                 normal: {
        //                     color: '#44a5b8'
        //                 }
        //             },
        //             selected: true
        //         },
        //         {
        //             value: Mock.mock('@INT(30,60)'),
        //             name: '代码/命令执行',
        //             itemStyle: {
        //                 normal: {
        //                     color: '#22f183'
        //                 }
        //             },
        //             selected: true
        //         },
        //         {
        //             value: Mock.mock('@INT(30,60)'),
        //             name: 'XSS攻击',
        //             itemStyle: {
        //                 normal: {
        //                     color: '#24b7df'
        //                 }
        //             },
        //             selected: true
        //         },
        //         {
        //             value: Mock.mock('@INT(30,60)'),
        //             name: 'SQL注入',
        //             itemStyle: {
        //                 normal: {
        //                     color: '#0baf8b'
        //                 }
        //             },
        //             selected: true
        //         }
        //     ];
        //     return data;
        // },
        m3:function () {
            var data = {
                "code": 200,
                "data": {
                    "list": [{
                        "content": "手机号码",
                        "dataCount": 3029,
                        "databaseName": "dtmail",
                        "levelName": "内部",
                        "requestCount": 16,
                        "tableName": "suer",
                        "type": "个人隐私"
                    }, {
                        "content": "身份证号",
                        "dataCount": 1245,
                        "databaseName": "uim",
                        "levelName": "机密",
                        "requestCount": 11,
                        "tableName": "user",
                        "type": "个人隐私"
                    }, {
                        "content": "电子邮箱",
                        "dataCount": 3872,
                        "databaseName": "dtmail",
                        "levelName": "内部",
                        "requestCount": 35,
                        "tableName": "user",
                        "type": "个人隐私"
                    }, {
                        "content": "银行卡号",
                        "dataCount": 1523,
                        "databaseName": "sas",
                        "levelName": "机密",
                        "requestCount": 11,
                        "tableName": "assets",
                        "type": "个人隐私"
                    }, {
                        "content": "登陆账号",
                        "dataCount": 1888,
                        "databaseName": "dtmail",
                        "levelName": "内部",
                        "requestCount": 12,
                        "tableName": "user",
                        "type": "个人隐私"
                    }],
                    "pageNum": 1,
                    "pageSize": 5,
                    "pages": 1,
                    "size": 4,
                    "total": 4
                },
                "message": "successful",
                "success": true
            };
            
            data.data.list.forEach(function (item,index) {
                item.dataCount = $("#dataAssert").find("tr").eq(index+1).find("td").eq(3).text()*1+parseInt(Math.random()*item.dataCount*0.05);
                item.requestCount = $("#dataAssert").find("tr").eq(index+1).find("td").eq(4).text()*1+parseInt(Math.random()*20);
            })
            return data;
        },
        m4:function () {
            var a1 = $('#businessMonitor').find("tr").eq(1).find("td").eq(2).text()*1 + Mock.mock('@INT(0,2)');
            var a2 = $('#businessMonitor').find("tr").eq(2).find("td").eq(2).text()*1 + Mock.mock('@INT(0,2)');
            var a3 = $('#businessMonitor').find("tr").eq(3).find("td").eq(2).text()*1 + Mock.mock('@INT(0,2)');
            var a4 = $('#businessMonitor').find("tr").eq(4).find("td").eq(2).text()*1 + Mock.mock('@INT(0,2)');
            var a5 = $('#businessMonitor').find("tr").eq(5).find("td").eq(2).text()*1 + Mock.mock('@INT(0,2)');
            if(a1>100 || a1<20){
                a1 = 20 ;
            };
            if(a2>80 || a2<10){
                a2 = 10 ;
            };
            if(a3>50 || a3<10){
                a3 = 10 ;
            };
            if(a4>30 || a4<15){
                a4 = 15 ;
            };
            if(a5>40 || a5<10){
                a5 = 20 ;
            };
            return {
                "code": 200,
                "data": {
                    "list": [{
                        "alarmContent": "手机号没有脱敏",
                        "alarmCount": a1,
                        "id": 1,
                        "interfaceCount": 34,
                        "operationSystem": "邮件系统",
                        "sensitiveInterface": "http://localhost:8088/resource/infos/311?pageNum=1&pageSize=10&phone=18622218600"
                    }, {
                        "alarmContent": "身份证没有脱敏",
                        "alarmCount": a2,
                        "id": 2,
                        "interfaceCount":89,
                        "operationSystem": "工单审批系统",
                        "sensitiveInterface": "resource/infos/311?pageNum=1&pageSize=10&cid=231084198502231712"
                    }, {
                        "alarmContent": "身份证没有脱敏",
                        "alarmCount": a3,
                        "id": 3,
                        "interfaceCount": 131,
                        "operationSystem": "财务报表系统",
                        "sensitiveInterface": "urce/infos/311?pageNum=1&pageSize=10&cid=231084198502231712"
                    },{
                        "alarmContent": "手机号没有脱敏",
                        "alarmCount": a4,
                        "id": 1,
                        "interfaceCount": 21,
                        "operationSystem": "人力资源系统",
                        "sensitiveInterface": "http://localhost:8088/resource/infos/311?pageNum=1&pageSize=10&phone=18622218600"
                    }, {
                        "alarmContent": "身份证没有脱敏",
                        "alarmCount": a5,
                        "id": 2,
                        "interfaceCount": 17,
                        "operationSystem": "ERP系统",
                        "sensitiveInterface": "resource/infos/311?pageNum=1&pageSize=10&cid=231084198502231712"
                    }],
                    "pageNum": 1,
                    "pageSize": 10,
                    "pages": 1,
                    "size": 3,
                    "total": 3
                },
                "message": "successful",
                "success": true
            }
        },
        // m5:function () {
        //     return Mock.Random.now();
        // },
        // m6:function () {
        //     var threatData = parseInt($("#threat").html())<99999949? (Mock.Random.integer(0, 50) + parseInt($("#threat").html())):0;
        //     var weakPointData = parseInt($("#weakPoint").html())<99999949? (Mock.Random.integer(0,100) + parseInt($("#weakPoint").html())):0;
        //     var attackData = parseInt($("#attack").html())<99999949? (Mock.Random.integer(0,100) + parseInt($("#attack").html())):0;
        //     var dataLeakData = parseInt($("#dataLeak").html())<99999949? (Mock.Random.integer(0,10) + parseInt($("#dataLeak").html())):0;
        //     var protectAttackData = parseInt($("#protectAttack").html())<9950? (Mock.Random.integer(0, 50) + parseInt($("#protectAttack").html())):0;
        //     var repairHoleData = parseInt($("#repairHole").html())<9950? (Mock.Random.integer(0, 50) + parseInt($("#repairHole").html())):0;
        //     var dealSafetyData = parseInt($("#dealSafety").html())<9950? (Mock.Random.integer(0, 50) + parseInt($("#dealSafety").html())):0;
        //     var syncInforData = parseInt($("#syncInfor").html())<9950? (Mock.Random.integer(0, 50) + parseInt($("#syncInfor").html())):0;
        //     return {
        //         'threat':threatData,
        //         'weakPoint':weakPointData,
        //         'attack':attackData,
        //         'dataLeak':dataLeakData,
        //         'protectAttack':protectAttackData,
        //         'repairHole':repairHoleData,
        //         'dealSafety':dealSafetyData,
        //         'syncInfor':syncInforData
        //     }
        // },
        m7: function () {
            return {
                "code": 200,
                "data": {
                    "riskAccountCount":  Mock.mock('@INT(1,10)'),
                    "riskAlarmCount": $("#todayAlarm").text(),
                    "score": 70,
                    "items": [{
                    "account": "zhangsan",
                    "content": "登陆账号",
                    "countTime": 1527736710000,
                    "destinationIp": "172.192.10.15",
                    "levelName": "一般",
                    "operationSystem": "邮件系统",
                    "sourceIp": "162.168.10.15"
                    }]
                },
                "message": "successful",
                "success": true
                };  
        },
        m8:function () {
            return {
                "code": 200,
                "data": {
                    "items": [{
                        "data": [Mock.mock('@INT(5000,10000)'), Mock.mock('@INT(5000,7000)'), Mock.mock('@INT(3000,5000)'), Mock.mock('@INT(2000,3000)'), Mock.mock('@INT(4000,5000)'), Mock.mock('@INT(5000,6000)'), Mock.mock('@INT(9000,10000)')],
                        "name": "正常数据"
                    }, {
                        "data": [Mock.mock('@INT(3000,4000)'), Mock.mock('@INT(1000,4000)'), Mock.mock('@INT(1000,2000)'), Mock.mock('@INT(110,1000)'), Mock.mock('@INT(500,1000)'), Mock.mock('@INT(500,1700)'), Mock.mock('@INT(500,4000)')],
                        "name": "敏感数据"
                    }],
                    "timeScope": {
                        "interval": 86400000,
                        "start": 1527177600000
                    }
                },
                "message": "successful",
                "success": true
            }
        },
        m9:function () {
            return {
                "code": 200,
                "data": {
                    "list": [{
                        "account": "admin",
                        "operationSystem": "邮件系统",
                        "requestCount": Mock.mock('@INT(100,1000)')
                    }, {
                        "account": "super",
                        "operationSystem": "工单审批系统",
                        "requestCount": Mock.mock('@INT(50,500)')
                    }, {
                        "account": "useradmin",
                        "operationSystem": "财务报表系统",
                        "requestCount": Mock.mock('@INT(10,100)')
                    }, {
                        "account": "yudun",
                        "operationSystem": "人力资源系统",
                        "requestCount": Mock.mock('@INT(10,100)')
                    }, {
                        "account": "emr",
                        "operationSystem": "ERP系统",
                        "requestCount": Mock.mock('@INT(10,100)')
                    }],
                    "pageNum": 1,
                    "pageSize": 5,
                    "pages": 2,
                    "size": 5,
                    "total": 6
                },
                "message": "successful",
                "success": true
            };
        },
        m10:function () {  
            return {
                "code": 200,
                "data": {
                    "list": [{
                        "account": "3429427896",
                        "content": "身份证号",
                        "countTime": 1527736710000,
                        "destinationIp": "172.192.10.15",
                        "levelName": "机密",
                        "operationSystem": "ERP系统",
                        "sourceIp": "162.168.10.15"
                    }, {
                        "account": "611287695",
                        "content": "银行卡号",
                        "countTime": 1527736710000,
                        "destinationIp": "172.192.10.15",
                        "levelName": "机密",
                        "operationSystem": "工单审批系统",
                        "sourceIp": "162.168.10.15"
                    }, {
                        "account": "18766666666",
                        "content": "手机号",
                        "countTime": 1527736567000,
                        "destinationIp": "172.192.10.14",
                        "levelName": "内部",
                        "operationSystem": "财务报表系统",
                        "sourceIp": "162.168.10.14"
                    }, {
                        "account": "lisi@qq.com",
                        "content": "电子邮箱",
                        "countTime": 1527736567000,
                        "destinationIp": "172.192.10.14",
                        "levelName": "内部",
                        "operationSystem": "邮件系统",
                        "sourceIp": "162.168.10.14"
                    }, {
                        "account": "beijing",
                        "content": "地址",
                        "countTime": 1527736498000,
                        "destinationIp": "172.192.10.13",
                        "levelName": "内部",
                        "operationSystem": "人力资源系统",
                        "sourceIp": "162.168.10.13"
                    }, {
                        "account": "234734",
                        "content": "登录账号",
                        "countTime": 1527736498000,
                        "destinationIp": "172.192.10.13",
                        "levelName": "内部",
                        "operationSystem": "工单审批系统",
                        "sourceIp": "162.168.10.13"
                    },{
                        "account": "18357892311",
                        "content": "身份证号",
                        "countTime": 1527736710000,
                        "destinationIp": "172.192.10.15",
                        "levelName": "机密",
                        "operationSystem": "ERP系统",
                        "sourceIp": "162.168.10.15"
                    }, {
                        "account": "haerbin",
                        "content": "银行卡号",
                        "countTime": 1527736710000,
                        "destinationIp": "172.192.10.15",
                        "levelName": "机密",
                        "operationSystem": "工单审批系统",
                        "sourceIp": "162.168.10.15"
                    }, {
                        "account": "13999999999",
                        "content": "手机号",
                        "countTime": 1527736567000,
                        "destinationIp": "172.192.10.14",
                        "levelName": "内部",
                        "operationSystem": "财务报表系统",
                        "sourceIp": "162.168.10.14"
                    }, {
                        "account": "zhangsan@qq.com",
                        "content": "电子邮箱",
                        "countTime": 1527736567000,
                        "destinationIp": "172.192.10.14",
                        "levelName": "内部",
                        "operationSystem": "邮件系统",
                        "sourceIp": "162.168.10.14"
                    }, {
                        "account": "wuhan",
                        "content": "地址",
                        "countTime": 1527736498000,
                        "destinationIp": "172.192.10.13",
                        "levelName": "内部",
                        "operationSystem": "人力资源系统",
                        "sourceIp": "162.168.10.13"
                    }, {
                        "account": "5861379",
                        "content": "登录账号",
                        "countTime": 1527736498000,
                        "destinationIp": "172.192.10.13",
                        "levelName": "内部",
                        "operationSystem": "工单审批系统",
                        "sourceIp": "162.168.10.13"
                    }],
                    "pageNum": 1,
                    "pageSize": 5,
                    "pages": 3,
                    "size": 5,
                    "total": 12
                },
                "message": "successful",
                "success": true
            };
        }
    };

    return oData[sName];
}
