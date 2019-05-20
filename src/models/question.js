import {
    listSubject,
    listQuestion,
    addQuestion,
    listClass,
    listAnswer,
    closeQuestion,
} from '../services/question';

import {routerRedux} from 'dva/router'

export default {
    namespace: 'question',
    state: {
        subjectList: [],
        questionList: [],
        classList: [],
        answerList: [],
    },

    effects: {
        * listSubject({payload, callback}, {call, put}) {  // eslint-disable-line
            let response = yield call(listSubject, payload);
            yield put({
                type: 'saveSubjectList',
                payload: response
            });
            if (callback)
                callback(response);
        },
        * listQuestion({payload, callback}, {call, put}) {  // eslint-disable-line
            let response = yield call(listQuestion, payload);
            yield put({
                type: 'saveQuestionList',
                payload: response
            });
            if (callback)
                callback(response);
        },
        * listClass({payload, callback}, {call, put}) {  // eslint-disable-line
            let response = yield call(listClass, payload);
            yield put({
                type: 'saveClassList',
                payload: response
            });
            if (callback)
                callback(response);
        },
        * listAnswer({payload, callback}, {call, put}) {  // eslint-disable-line
            let response = yield call(listAnswer, payload);
            yield put({
                type: 'saveAnswerList',
                payload: response
            });
            if (callback)
                callback(response);
        },
        * addQuestion({payload, callback}, {call, put}) {  // eslint-disable-line
            payload.title = encodeURIComponent(payload.title);
            payload.content = encodeURIComponent(payload.content);
            let response = yield call(addQuestion, payload);
            if (callback)
                callback(response);
        },
        * closeQuestion({payload, callback}, {call, put}) {  // eslint-disable-line
            let response = yield call(closeQuestion, payload);
            if (callback)
                callback(response);
        },
    },
    reducers: {
        saveSubjectList(state, {payload: {data}}) {
            state.subjectList = data;
            return {...state};
        },
        saveQuestionList(state, {payload: {data}}) {
            state.questionList = data;
            return {...state};
        },
        saveClassList(state, {payload: {data}}) {
            state.classList = data;
            return {...state};
        },
        saveAnswerList(state, {payload: {data}}) {
            state.answerList = [];
            data.map(item=>{
                const {student={}} = item;
                state.answerList.push({
                    studentId:student.id,
                    nickName:student.nickName,
                    content:item.content,
                    score:parseInt(Math.random()*20+80),
                });
            });
            return {...state};
        },
    },
};