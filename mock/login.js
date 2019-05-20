export default {
    'post /api/teacher/login': function (req, res) {
        const responseObj = {
            "error_code": 0,
            "msg": "成功",
            "data": {"id": 1, "username": "admin", "pass": "bd**123", "nickName": "帅哥季"}
        };
        res.json(responseObj);
    },
    'post /api/teacher/listSubject': function (req, res) {
        const responseObj = {
            "error_code": 0,
            "msg": "成功",
            "data": [{"id": 1, "teacherId": 1, "name": "计算机原理"}, {"id": 2, "teacherId": 1, "name": "C++程序设计"}]
        };
        res.json(responseObj);
    },
    'post /api/teacher/listClass': function (req, res) {
        const responseObj = {
            "error_code": 0,
            "msg": "成功",
            "data": [{"id": 1, "name": "软工1班"}, {"id": 2, "name": "软工2班"}, {"id": 3, "name": "数媒1班"}, {
                "id": 4,
                "name": "数媒2班"
            }, {"id": 5, "name": "数媒3班"}]
        };
        res.json(responseObj);
    },
    'post /api/question/listQuestion': function (req, res) {
        const responseObj = {
            "error_code": 0,
            "msg": "成功",
            "data": [{
                "id": 31,
                "subject": {"id": 1, "teacherId": 1, "name": "计算机原理"},
                "clazz": {"id": 1, "name": "软工1班"},
                "teacherId": 1,
                "title": "单元测试题目",
                "content": "单元测试内容",
                "close": true
            }, {
                "id": 33,
                "subject": {"id": 1, "teacherId": 1, "name": "计算机原理"},
                "clazz": {"id": 1, "name": "软工1班"},
                "teacherId": 1,
                "title": "单元测试题目",
                "content": "单元测试内容",
                "close": true
            }, {
                "id": 34,
                "subject": {"id": 1, "teacherId": 1, "name": "计算机原理"},
                "clazz": {"id": 1, "name": "软工1班"},
                "teacherId": 1,
                "title": "单元测试题目",
                "content": "单元测试内容",
                "close": true
            }, {
                "id": 35,
                "subject": {"id": 1, "teacherId": 1, "name": "计算机原理"},
                "clazz": {"id": 1, "name": "软工1班"},
                "teacherId": 1,
                "title": "111",
                "content": "222222222222",
                "close": false
            }]
        };
        res.json(responseObj);
    },
    'post /api/question/question': function (req, res) {
        const responseObj = {
            "error_code": 0,
            "msg": "成功",
            "data": {
                "id": 35,
                "subjectId": 1,
                "classId": 1,
                "teacherId": 1,
                "title": "111",
                "content": "222222222222",
                "close": false
            }
        };
        res.json(responseObj);
    },
};