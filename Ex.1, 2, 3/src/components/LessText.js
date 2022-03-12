import React from 'react'
import { useState } from 'react';
import './LessText.css';

export default function LessText(props) {
    const { text, maxLength } = props;
    const [hidden, setHidden] = useState(true);

    if (text.length <= maxLength) {
        return <span>{text}</span>;
    }

    return (
        <div className='bg-light p-4 text-center'>
            <span className='fs-4 p-0'>
                {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
                {hidden ? (
                    <a onClick={() => setHidden(false)} className='text-secondary'>
                        read more
                    </a>
                ) : (
                    <a onClick={() => setHidden(true)} className='text-secondary'>
                        read less
                    </a>
                )}
            </span>
        </div>
    );
}
