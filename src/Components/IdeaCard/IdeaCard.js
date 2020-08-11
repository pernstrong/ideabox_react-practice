import React from 'react'
import { connect } from 'react-redux'
import { deleteIdea } from '../../actions'

const IdeaCard = (props) => {

    const handleClick = () => {
        // should this just be direclty from redux????
        console.log(props)
        props.deleteIdea(props.id)
    }

    return (
        <section className="idea-card">
            <h3>{props.idea.title}</h3>
            <p>{props.idea.body}</p>
            <button onClick={handleClick}>X</button>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteIdea: id => dispatch(deleteIdea(id))
})

export default connect(null, mapDispatchToProps)(IdeaCard)