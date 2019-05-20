import {Component} from 'react';
import {Layout, Menu, Icon, Card, Button} from 'antd';
import {connect} from "dva";
import styles from './QuestionList.less';
import Link from 'umi/link';
import router from 'umi/router';

@connect(({login, question, loading}) => ({
    login,
    question,
    loading,
}))
export default class QuestionList extends Component {

    componentDidMount() {
        const {dispatch, login: {teacherData}} = this.props;
        dispatch({
            type: 'question/listSubject',
            payload: {
                teacherId: teacherData.id,
            },
            callback:(res)=>{
                this.clickSubject(res.data[0].id);
            }
        });
    }

    clickSubject = (id) => {
        const {dispatch} = this.props;
        dispatch({
            type: 'question/listQuestion',
            payload: {
                teacherId: id,
                subjectId: id,
            }
        });
    };
    clickQuestion = (id) => {
        router.push({
            pathname: '/question/detail',
            query: {
                questionId: id,
            },
        });
    };

    renderSubjectGrid = () => {
        let arr = [];
        const {subjectList} = this.props.question;
        subjectList.map((item) => {
            arr.push(<Card.Grid className={styles.grid} onClick={() => {
                this.clickSubject(item.id)
            }}>{item.name}</Card.Grid>);
        });
        return arr;
    };
    renderQuestionGrid = () => {
        let arr = [];
        const {questionList} = this.props.question;
        questionList.map((item) => {
            const {close} = item;
            let style = close?{backgroundColor:'#ccc',color:'#333'}:{};
            arr.push(
                <Card.Grid className={styles.grid} style={style} onClick={() => {
                    this.clickQuestion(item.id, item.title, item.content)
                }}>
                    {item.title}
                </Card.Grid>
            );
        });
        return arr;
    };

    render() {
        return (
            <div>
                <Card title="科目列表">
                    {this.renderSubjectGrid()}
                </Card>
                <Card title="题目列表" style={{marginTop: 100}}>
                    {this.renderQuestionGrid()}
                </Card>
            </div>
        );
    }
}