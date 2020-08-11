import React from 'react'
import { connect } from 'react-redux'
import IdeaCard from '../IdeaCard/IdeaCard'

const IdeasContainer = ({ideas}) => {

    const allIdeaCards = ideas.map(idea => {
        return (
            <IdeaCard
                key={idea.id}
                {...idea}
            />
        )
    })

    return (
        <section className="ideas-container">
            {allIdeaCards}
        </section>
    )
}

const mapStateToProps = state => ({
    ideas: state.ideas
})
export default connect(mapStateToProps)(IdeasContainer)