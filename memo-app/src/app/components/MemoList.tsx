"use client";

import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Memos } from '@/types';
import Memo from './Memo';

interface MemoListProps {
    memos: Memos[];
}

const MemoList = ({ memos: initialMemos }: MemoListProps) => {
    const [memos, setMemos] = useState(initialMemos);

    const moveMemo = useCallback((dragIndex: number, hoverIndex: number) => {
        setMemos((prevMemos) => {
            const newMemos = [...prevMemos];
            const [reorderedItem] = newMemos.splice(dragIndex, 1);
            newMemos.splice(hoverIndex, 0, reorderedItem);
            return newMemos;
        });
    }, []);

    return (
        <DndProvider backend={HTML5Backend}>
            <ul className='space-y-3'>
                {memos.map((memo, index) => (
                    <Memo
                        key={memo.id}
                        memo={memo}
                        index={index}
                        moveMemo={moveMemo}
                    />
                ))}
            </ul>
        </DndProvider>
    );
}

export default MemoList;