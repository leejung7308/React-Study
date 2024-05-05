import useFetch from '../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export default function CreateDay(){
    const days = useFetch('http://localhost:3001/days');
    const words = useFetch('http://localhost:3001/words');
    const navigate = useNavigate();

    function addDay(){
        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: String(days.length + 1),
                day: days.length + 1,
            }),
        })
        .then(res => {
            if(res.ok){
                alert('생성이 완료되었습니다.');
                navigate(`/`);
            }
        });
    }
    function deleteDay(){
        words.map(word => {
            if(word.day === Number(days.length)){
                fetch(`http://localhost:3001/words/${word.id}`, {
                    method: 'DELETE',
                })
            }
        })
        fetch(`http://localhost:3001/days/${days.length}`, {
            method: 'DELETE',
        })
        .then(res => {
            if(res.ok){
                alert('삭제가 완료되었습니다.');
                navigate(`/`);
            }
        });
    }
    return(
        <div>
            <h3>현재 일수 : {days.length}</h3>
            <button onClick={addDay}>Day 추가</button>
            <button onClick={deleteDay}>Day 삭제</button>
        </div>
    );
}