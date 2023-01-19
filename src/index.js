import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { theme } from 'constans/theme';
import { App } from 'components/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/redux-persist">
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <App />
          </Provider>
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
