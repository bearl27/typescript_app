"use client";

import React, { useState } from 'react';
import { Memos } from '@/types';
import { editMemos } from '@/api';
import {
    Card,
    CardContent,
    CardActions,
    TextField,
    Button,
    Dialog,
    DialogContent
} from '@mui/material';

import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloseIcon from '@mui/icons-material/Close';

interface MemoPageProps {
    memo: Memos;
    onClose: () => void;
}

const MemoPage: React.FC<MemoPageProps> = ({ memo, onClose }) => {
    const [editedTitle, setEditedTitle] = useState(memo.title);
    const [editedContent, setEditedContent] = useState(memo.content || '');

    const handleSave = async () => {
        await editMemos(memo.id, editedTitle, editedContent);
        onClose();
    };

    return (
        <Dialog
            open={true}
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
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Content"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={8}
                        />
                    </CardContent>
                    <CardActions style={{ justifyContent: 'flex-end' }}>
                        <Button onClick={handleSave} color="primary" variant="contained">
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
};

export default MemoPage;