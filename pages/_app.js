
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navbar from '../components/Navbar';



function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
