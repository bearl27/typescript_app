import { Container, Typography, Paper, Box, Fab } from '@mui/material';
import AddMemoButton from "./components/AddMemoButton";
import MemoList from "./components/MemoList";
import { getAllMemos } from "@/api";
import { Add } from '@mui/icons-material';

export default async function Home() {
  const memos = await getAllMemos();

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        py: 2,
        bgcolor: 'grey.200',
        position: 'relative',  // この行を追加
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold',
          color: 'text.secondary',
          mt: 4,
          mb: 4,
        }}
      >
        memoApp
      </Typography>

      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            p: 3,
            bgcolor: 'background.paper',
          }}
        >
          <MemoList memos={memos} />
        </Paper>
      </Container>

      <AddMemoButton />
    </Box>
  );
}