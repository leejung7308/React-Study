import Word from './Word';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Day(){
    const day = useParams().day;
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const days = useFetch('http://localhost:3001/days');
    return (
        <>
            <div className="day_header">
                <h2>Day {day}</h2>
                <div className="day_menu">
                    <Link 
                        className='link' 
                        to={`/day/${Number(day) === 1 ? day : Number(day) - 1}`}
                        style={
                            Number(day) === 1 ? {opacity: 0.3} : {opacity: 1}
                        }
                    >
                        Prev
                    </Link>
                    <Link 
                        className='link' 
                        to={`/day/${Number(day) === days.length ? day : Number(day) + 1}`}
                        style={
                            Number(day) === days.length ? {opacity: 0.3} : {opacity: 1}
                        }
                    >
                        Next
                    </Link>
                </div>
            </div>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                {words.map(word=>(
                    <Word word = {word} key = {word.id}/>
                ))}
                </tbody>
            </table>
        </>
    );
}