"use client";

import React, { useRef, useState } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { XYCoord } from 'dnd-core';
import { Memos } from '@/types';
import { deleteMemos } from '@/api';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Card, CardContent, Typography, IconButton } from '@mui/material';


import MemoPage from './MemoPage';

interface MemoProps {
    memo: Memos;
    index: number;
    moveMemo: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
    index: number;
    id: string;
    type: string;
}

const Memo = ({ memo, index, moveMemo }: MemoProps) => {
    const dragRef = useRef<HTMLLIElement>(null);
    const [isOpenMemoPage, setIsOpenMemoPage] = useState(false);


    const [, drop] = useDrop<DragItem, void, { handlerId: string | symbol | null }>({
        accept: 'memo',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item: DragItem, monitor: DropTargetMonitor) {
            if (!dragRef.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = dragRef.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveMemo(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'memo',
        item: () => {
            return { id: memo.id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(dragRef));

    const handleEdit = () => {
        setIsOpenMemoPage(true);
    };

    const handleDelete = async () => {
        await deleteMemos(memo.id);
        location.reload();
    };

    const handleCloseMemoPage = () => {
        setIsOpenMemoPage(false);
        location.reload();
    };

    const wordLimitedContent = memo.content
    ? memo.content.slice(0, 20) + (memo.content.length > 20 ? '...' : '')
    : '';

    return (
        <>
            <Card
                ref={dragRef}
                className={`mb-4 ${isDragging ? 'opacity-50' : ''}`}
            >
                <CardContent className={`flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow>`} >
                    <div>
                        <Typography variant="h6" component="h2">
                            {memo.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {wordLimitedContent}
                        </Typography>
                    </div>
                    <div>
                        <IconButton
                            color="primary"
                            onClick={handleEdit}
                            aria-label="edit"
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            color="error"
                            onClick={handleDelete}
                            aria-label="delete"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
            {isOpenMemoPage && (
                <MemoPage memo={memo} onClose={handleCloseMemoPage} />
            )}
        </>
    );
}

export default Memo;