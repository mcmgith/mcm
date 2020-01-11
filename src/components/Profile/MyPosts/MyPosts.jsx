import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import { required, maxLengthCreator } from '../../../Utilits/Validators/validators';
import { Textarea } from '../../common/FormControls/FormsControls';

const maxLength10 = maxLengthCreator(10);


let AddNewPostForm = (props) => {
    return<form onSubmit={props.handleSubmit}>
                <div>
                    <Field name='newPostText' placeholder={'Post message'} component={Textarea} validate={[required, maxLength10]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm'})(AddNewPostForm);


const MyPosts = React.memo(props => {
    
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return  <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/> 
                <div className={s.posts}>
                    { postsElements }
                </div>
            </div>
});



export default MyPosts;