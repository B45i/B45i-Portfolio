import ListCard from './components/ListCard';
import Profile from './components/Profile';
import TimeLine from './components/TimeLine';
import {
    techTalks,
    projects,
    articles,
    experience,
    education,
    profile,
} from './data';

import './style';

export default function App() {
    return (
        <div className="resume">
            <Profile {...profile} />
            <div className="cards">
                <TimeLine {...experience} />
                <ListCard {...projects} />
                <ListCard {...techTalks} />
                <ListCard {...articles} />
                <TimeLine {...education} />
            </div>
        </div>
    );
}
