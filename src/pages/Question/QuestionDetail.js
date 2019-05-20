import {Component} from 'react';
import {Layout, Menu, Icon, message, Button, Input, Select, Card, Table} from 'antd';
import {connect} from "dva";
import styles from './QuestionList.less';
import router from 'umi/router';


const columns = [
    {
        title: '学号',
        dataIndex: 'studentId',
    },
    {
        title: '姓名',
        dataIndex: 'nickName',
    },
    {
        title: '回答',
        dataIndex: 'content',
    },
    {
        title: '评分',
        dataIndex: 'score',
        editable: true,
    },
];

const Option = Select.Option;
const {TextArea} = Input;
@connect(({login, question, loading}) => ({
    login,
    question,
    loading,
}))
export default class QuestionAsk extends Component {
    state = {
        title: '',
        content: '',
        subjectId: '',
        classId: '',
        currentQuestion: {},
    };

    componentDidMount() {
        const {dispatch, login: {teacherData}, location, question} = this.props;
        const {query: {questionId = '', title, content}} = location;
        const {questionList} = question;
        if (questionId === '') {
            router.push("/");
        } else {
            questionList.map(item => {
                if (item.id == questionId) {
                    this.setState({currentQuestion: item});
                }
            });
            dispatch({
                type: 'question/listAnswer',
                payload: {
                    questionId: questionId,
                },
            });
        }
    }

    closeQuestion = () => {
        const {dispatch, login: {teacherData}, location, question} = this.props;
        const {query: {questionId = '', title, content}} = location;
        const {subjectList} = question;
        dispatch({
            type: 'question/closeQuestion',
            payload: {
                questionId: questionId,
            },
            callback:()=>{
                router.push("/");
            }
        });

    };

    render() {
        const {dispatch, login: {teacherData}, location, question} = this.props;
        const {query: {questionId = '', title, content}} = location;
        const {currentQuestion} = this.state;
        const {answerList = []} = question;
        const {subject = {}, clazz = {},close} = currentQuestion;
        return (
            <div>
                <Card>
                    <p>题目：{currentQuestion.title}</p>
                    <p>内容：{currentQuestion.content}</p>
                    <p>所属科目：{subject.name}</p>
                    <p>目标班级：{clazz.name}</p>
                    <p>回答列表：</p>
                    <Table columns={columns} dataSource={answerList}/>
                    <Button type={close?"primary":"danger"} onClick={this.closeQuestion}>{close?"打开问题":"关闭问题"}</Button>
                </Card>
            </div>
        );
    }
}