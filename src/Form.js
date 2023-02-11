import React, { useState } from 'react'
import './Form.css'

function Form() {

    const [inputTitle, setInputTitle] = useState("");
    const [inputAuthor, setInputAuthor] = useState("");
    const [inputIsbn, setInputIsbn] = useState("");

    const handleChangeTitle = event => {
        setInputTitle(event.target.value);
    };
    const handleChangeAuthor = event => {
        setInputAuthor(event.target.value);
    };
    const handleChangeIsbn = event => {
        setInputIsbn(event.target.value);
    };

    return (
        <div className='form'>
            <div className='form_left'>
                <h5>Title</h5>
                <input type='text' value={inputTitle} onChange={handleChangeTitle} />
                <h5>Author</h5>
                <input type='text' value={inputAuthor} onChange={handleChangeAuthor} />
                <h5>ISBN</h5>
                <input type='text' value={inputIsbn} onChange={handleChangeIsbn} />
                <button>Add</button>
            </div>
            <div className='form__right'>
                <div className='headings'>
                    <h5>ISBN</h5>
                    <h5>TITLE</h5>
                    <h5>AUTHOR</h5>
                    <h5>DELETE</h5>
                </div>
                <div className='items-component'>
                    <div className='items1'>
                        <span>{inputValue}</span>
                        <span>{inputValue}</span>
                        <span>{inputValue}</span>
                        <span></span>
                    </div>
                    <div className='items2'>
                        <span>{inputValue}</span>
                        <span>{inputValue}</span>
                        <span>{inputValue}</span>
                        <span>{inputValue}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form