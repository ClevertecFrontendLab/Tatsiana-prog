import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import Home from '~/components/Pages/Home/Home';

import theme from '../themes/responsive-theme';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Home />
        </ChakraProvider>
    );
}

export default App;
