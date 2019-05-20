import {Component} from 'react';
import {Layout, Menu, Icon, message, Button, Input, Select} from 'antd';
import {connect} from "dva";
import styles from './QuestionList.less';
import Link from 'umi/link';
import router from "umi/router";
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
    };

    componentDidMount() {
        const {dispatch, login: {teacherData}} = this.props;
        dispatch({
            type: 'question/listSubject',
            payload: {
                teacherId: teacherData.id,
            }
        });
        dispatch({
            type: 'question/listClass',
            payload: {}
        });
    }

    submit=()=>{
        const {
            title,
            content,
            subjectId,
            classId,
        } = this.state;
        const {dispatch, login: {teacherData}} = this.props;
        if(title === '' || subjectId==='' || classId===''){
            message.error("选项要填完整",1);
            return;
        }
        dispatch({
            type: 'question/addQuestion',
            payload: {
                teacherId: teacherData.id,
                title,
                content,
                subjectId,
                classId,
            },
            callback:(res)=>{
                if(res.error_code === 0){
                    message.success("添加成功",1);
                    router.push('/question/list');
                }else{
                    message.error("网络错误",1);
                }
            }
        });
    };

    render() {
        const {
            title,
            content,
            subjectId,
            classId,
        } = this.state;
        const {question:{classList,subjectList}} = this.props;
        return (
            <div>
                <Input placeholder="标题" value={title} onChange={(e) => {
                    this.setState({title:e.target.value})
                }}/>
                <div style={{height:20}}/>
                <TextArea rows={4} placeholder='内容' value={content} onChange={(e) => {
                    this.setState({content:e.target.value})
                }}/>
                <div style={{height:20}}/>
                科目选择：<Select style={{ width: 120 }} onChange={(subjectId)=>{this.setState({subjectId})}}>
                    {
                        subjectList.map((item)=>{
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select>
                <div style={{display:"inline-block",width:20}}/>
                班级选择：<Select style={{ width: 120 }} onChange={(classId)=>{this.setState({classId})}}>
                    {
                        classList.map((item)=>{
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select>
                <div style={{display:"inline-block",width:20}}/>
                <Button type='primary' onClick={this.submit}>提交</Button>
            </div>
        );
    }
}