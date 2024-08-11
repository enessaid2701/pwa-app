import React from 'react';
import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function MainContent() {
  const data = useSelector((state) => state.data.data);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Main Content
      </Typography>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Typography key={index} variant="body1">
            {item}
          </Typography>
        ))
      ) : (
        <Typography variant="body1">
          No data available
        </Typography>
      )}
    </Container>
  );
}

export default MainContent;
