import React, { useState } from 'react'
import { addIdea } from '../../actions'
import { connect } from 'react-redux'

const Form = (props) => {
    const [ title, updateTitle ] = useState('')
    const [ body, updateBody ] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        props.addIdea({id: Date.now(), title, body})
        clearInputs()
    }

    const clearInputs = () => {
        updateTitle('')
        updateBody('')
    }

    return (
        <form>

            <input
                type="text" 
                name="title"
                value={title}
                placeholder="idea title"
                onChange={e => updateTitle(e.target.value)}
            />

            <input
                type="text" 
                name="body"
                value={body}
                placeholder="idea info"
                onChange={e => updateBody(e.target.value)}
            />

            <button onClick={handleClick}>
                Add Idea
            </button>

        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    addIdea: idea => dispatch(addIdea(idea))
})

export default connect(null, mapDispatchToProps)(Form)