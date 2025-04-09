import { Box, Flex, Heading } from '@chakra-ui/react';

import { Header } from '../../Header/Header';
import { SearchList } from '../../SearchList/SearchList';
import Sidebar from '../../SideBar/SideBar';

const Home = () => (
    <>
        <Header></Header>
        <main>
            <section>
                <Flex justifyContent='space-between'>
                    <Sidebar />
                    <Box>
                        <Heading
                            as='h1'
                            size='48px'
                            color='0000'
                            mt='32px'
                            mb='32px'
                            fontWeight='bold'
                        >
                            Приятного аппетита!
                        </Heading>
                        <SearchList></SearchList>
                    </Box>
                </Flex>
            </section>
        </main>
    </>
);
export default Home;
