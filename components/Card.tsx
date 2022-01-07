import TinderCard from 'react-tinder-card'
import JobProfile from './JobProfile';

export default function Card() {
    const onSwipe = (direction: string) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier: string) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['down', 'up']}
        >
            <JobProfile></JobProfile>
        </TinderCard>
    )
}