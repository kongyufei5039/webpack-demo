// 各模块资源命名
// 整体布局：307
// 左边：
// 左上角今日数据：308
// 数据资产管理：309
// 数据资产分类分级：310
// 业务系统监控：311
// 中间：
// 中间上半部：312
// 最新数据风险及账号信息：313
// 右边：
// 敏感数据访问趋势：592
// 账号风险：314
// 数据风险预警：315

window.Config = {
    "name": "704",
    "type": "default",
    "description": "Template 704",
    "version": "1.0.0",
    "header": {"description": "敏感数据资产管理平台"},
    "layout": {"row": 36, "col": 36, "width": 1920, "height": 1080},
    "padding": 10,
    "modules": {
        "s1": {"left": 0, "top": 0, "height": 36, "width": 36, "res": "307", "description": "分块背景图"},
        "m1": {"left": 0.7, "top": 3.7, "height": 3, "width": 7.6, "no": 1, "res": "308", "description": "左上角今日数据", "refresh": 5},
        "m2": {"left": 0.5, "top": 9.2, "height": 7.3, "width": 7.7, "no": 2, "res": "309", "description": "数据资产管理", "refresh": 30},
        "m3": {"left": 0.5, "top":17.8, "height": 7.5, "width": 7.7, "no": 3, "res": "310", "description": "数据资产分类分级", "refresh": 30},
        "m4": {"left": 0.4, "top": 27.4, "height": 7, "width":8, "no": 4, "res": "311", "description": "业务系统监控", "refresh": 10},
        "m5": {"left": 28.4, "top": 3.7, "height": 3, "width": 6.9, "no": 5, "res": "564", "description": "右上角本地时间", "refresh": 1, "paras": {"title": "本地时间", "offset":"local"}},
        "m7": {"left": 8.6, "top": 3.7, "height": 31, "width": 19.3, "no": 7, "res": "313", "description": "最新数据风险及账号信息", "refresh": 60, "paras": {"title": "中间大图"}},
        "m8": {"left": 28.3, "top": 10, "height": 5.9, "width": 7, "no": 8, "res": "592", "description": "敏感数据访问趋势", "refresh": 86400},
        "m9": {"left": 28, "top": 17.8, "height": 7.3, "width": 7.2, "no": 9, "res": "314", "description": "账号风险", "refresh":60},
        "m10": {"left": 28.1, "top": 27.2, "height": 7, "width": 7.2, "no": 10, "res": "315", "description": "数据风险预警", "refresh": 6}

            }
}