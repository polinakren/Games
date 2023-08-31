import React from 'react';
import styled from '@emotion/styled';
import { AppRouter } from '~services/router/AppRouter';
import { QueryProvider } from '~services/api';

function App() {
  return (
    <StyledApp>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
