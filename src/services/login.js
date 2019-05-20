import requestSimpleForm from '../utils/requestSimpleForm';

export function login(params) {
    return requestSimpleForm('/api/teacher/login',params);
}