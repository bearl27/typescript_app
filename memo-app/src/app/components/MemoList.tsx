import React, { useEffect } from 'react';
import { Memos } from '@/types';
import Memo from './Memo';

interface MemoListProps {
    memos: Memos[];
}

const MemoList = ({ memos }: MemoListProps) => {
    return (
        <ul className='space-y-3'>
            {memos.map((memo) => (
                <Memo key={memo.id} memo={memo} />
            ))}
        </ul>
    );
}

export default MemoList;