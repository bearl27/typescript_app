"use client";

import React, { useState } from 'react';
import { addMemos } from '@/api';
import { v4 as uuidv4 } from 'uuid';
import {
    Button,
    Dialog,
    DialogContent,
    Card,
    CardContent,
    CardActions,
    TextField,
} from '@mui/material';

import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloseIcon from '@mui/icons-material/Close';

interface AddMemoProps {
    open: boolean;
    onClose: () => void;
}

const AddMemo: React.FC<AddMemoProps> = ({ open, onClose }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addMemos({ id: uuidv4(), title: title, content: content });
        setTitle('');
        setContent('');
        onClose();
        location.reload();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >
            <DialogContent>
                <Card>
                    <CardContent>
                        <TextField
                            fullWidth
                            label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={8}
                        />
                    </CardContent>
                    <CardActions style={{ justifyContent: 'flex-end' }}>
                        <Button onClick={handleSubmit} color="primary" variant="contained">
                            <SaveAltIcon />
                        </Button>
                        <Button onClick={onClose} color="secondary">
                            <CloseIcon />
                        </Button>
                    </CardActions>
                </Card>
            </DialogContent>
        </Dialog>
    );
}

export default AddMemo;