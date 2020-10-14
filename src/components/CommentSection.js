import React, {useRef,  useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import '../App.css';

function CommentSection() {
    const [comments, setComments] = useState([])
    const titleElement = useRef();
    const nameElement = useRef();
    const contentElement = useRef();



    const addComment = (e) => {
        setComments([{title: titleElement.current.value, name: nameElement.current.value, content: contentElement.current.value}, ...comments])
        contentElement.current.value ='';
        nameElement.current.value = '';
        titleElement.current.value = '';
    }

    const handleOnKeyUp = (e, string) => {
        if (e.keyCode === 13) {
            switch (string){
                case "titleElement":
                    titleElement.current.focus()
                    addComment();
                    break;
                case "nameElement":
                    nameElement.current.focus()
                    break;
                case "contentElement":
                    contentElement.current.focus()
                    break;
            }
        }
    }

  return (
    <div>
        <ErrorBoundary>
            <div>
                <input ref={titleElement} onKeyUp={(e) => handleOnKeyUp(e, "nameElement")} placeholder='Title'/>
                <br/>
                <input ref={nameElement} onKeyUp={(e) => handleOnKeyUp(e, "contentElement")} placeholder='Name'/>
                <br/>
                <input ref={contentElement} onKeyUp={(e) => handleOnKeyUp(e, "titleElement")} placeholder='Comment'/>
                <br/>
                <button type='submit' onClick={addComment}>Submit</button>
                <br/>
            </div>
        </ErrorBoundary>
        <div className="comment-section">
            {comments.map(comment => {
                return (
                    <div className='comment'>
                        <h2>Title: {comment.title}</h2>
                        <span>Name: {comment.name}</span>
                        <p>{comment.content}</p>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default CommentSection;
