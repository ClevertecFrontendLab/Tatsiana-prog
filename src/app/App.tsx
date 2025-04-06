import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import Header from '~/components/Header/Header';

import theme from '../themes/responsive-theme';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Header />
        </ChakraProvider>
    );
}

export default App;
