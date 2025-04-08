import { Heading } from '@chakra-ui/react';

import { Header } from '../../Header/Header';
import { SearchList } from '../../SearchList/SearchList';

const Home = () => (
    <>
        <Header></Header>
        <section>
            <Heading as='h1' size='48px' color='0000' mt='32px' mb='32px' fontWeight='bold'>
                Приятного аппетита!
            </Heading>
            <SearchList></SearchList>
        </section>
    </>
);
export default Home;
