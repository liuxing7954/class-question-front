import requestSimpleForm from '../utils/requestSimpleForm';

export function listSubject(params) {
    return requestSimpleForm('/api/teacher/listSubject',params);
}
export function listQuestion(params) {
    return requestSimpleForm('/api/question/listQuestion',params);
}
export function addQuestion(params) {
    return requestSimpleForm('/api/question/question',params);
}
export function listClass(params) {
    return requestSimpleForm('/api/teacher/listClass',params);
}
export function listAnswer(params) {
    return requestSimpleForm('/api/question/listAnswer',params);
}
export function closeQuestion(params) {
    return requestSimpleForm('/api/question/close',params);
}