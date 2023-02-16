import React, { useState } from 'react';

export default function Counter({total, onClick}) {
    //로컬변수를 만든다 
    //[배열에는 두개의 인자가 전달된다]
    //count : 상태값에 접근할 수 있는 변수
    //setCount : 업데이트할 수 있는 함수
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p className='number'>{count} <span className='total'>/{total}</span></p>
            <button className='button' 
                onClick={() => {
                setCount((prev)=> prev + 1);
                onClick();
            }}>Add +</button>
        </div>
    );
}

