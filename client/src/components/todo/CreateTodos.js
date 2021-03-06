import React, { useState, useContext, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import API from '../../utils/todoAPI';
import Dropdown from '../layout/Dropdown';
import ErrorNotice from '../misc/ErrorNotice';
import SuccessNotice from '../misc/SuccessNotice';
import OptionButton from './OptionButton';

export default function CreateTodos() {

    const [title, setTitle] = useState('');
    const [youTubeUrl, setYouTubeUrl] = useState();
    const [description, setDescription] = useState();
    const [error, setError] = useState();
    const [category, setCategory] = useState();
    const [todoSuccess, setTodoSuccess] = useState();

    const { userData } = useContext(UserContext);
    const history = useHistory();

    localStorage.setItem('lastVisited', 'createtodos');

    useEffect(() => {
        if (!userData.user) {
            history.push('/login')
        }
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        try {
            const newTodo = { title, youTubeUrl, description, category }

            await API.createTodos(newTodo, userData.token)
                .then(res => {
                    setTodoSuccess(`Success, ${userData.user.displayName}!  Your Todo has been saved.`)
                    history.push('/gettodos')
                })
                .catch(err =>
                    (err.response.data.msg && setError(err.response.data.msg))
                )

        } catch (err) {
            console.log("Something when wrong")
        }
    }

    return (
        <div className='page'>
            <div className='container'>
                <h2>CreateTodos</h2>
                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}

                {todoSuccess && (
                    <SuccessNotice message={todoSuccess} clearSuccess={() => {
                        setTodoSuccess(undefined);
                        // setTitle('');
                    }
                    } />
                )}

                <form className='form' onSubmit={submit}>
                    <label htmlFor='categoryDropdown' >Category</label>
                    <select id='categoryDropdown' onChange={e => setCategory(e.target.value)}>
                        <option value='category'>Select Category</option>
                        <option value="Purchase">Purchase</option>
                        <option value="Repair">Repair</option>
                        <option value="Order">Order</option>
                        <option value="Clean">Clean</option>
                        <option value="Make">Make</option>
                        <option value="Exercise">Exercise</option>
                        <option value="Work">Work</option>
                    </select>
                    <label htmlFor='todo-title'>Title</label>
                    <input
                        id='todo-title'
                        type='text'
                        onChange={e => setTitle(e.target.value)}
                    />

                    <label htmlFor='todo-youtubeurl'>YouTube URL (e.g. https://www.youtube.com/watch?v=PkZNo7MFNFg)</label>
                    <input
                        id='todo-youtubeurl'
                        type='url'
                        onChange={e => setYouTubeUrl(e.target.value)}
                    />

                    <label htmlFor='todo-description'>Description</label>
                    <textarea
                        id='todo-description'
                        name='todo-description'
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div className='buttons-div'>
                        <input type='submit' value='Submit' />
                        <input type='reset' value='Clear' />
                    </div>
                </form>
                <OptionButton className='type-button' value='Home' name='Home' onClick={() => { history.push('/'); setTodoSuccess(undefined); }}></OptionButton>

            </div>
        </div>
    )
}
