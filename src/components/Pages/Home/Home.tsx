import { Box, Flex, Heading } from '@chakra-ui/react';

import { Header } from '../../Header/Header';
import { SearchList } from '../../SearchList/SearchList';
import Sidebar from '../../SideBar/SideBar';
import { UserMetrics } from '../../UserMetrics/UserMetrics';

const Home = () => (
    <>
        <Header></Header>
        <main>
            <>
                <Flex justifyContent='space-between' height='1040px'>
                    <Sidebar />
                    <Box>
                        <section>
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
                        </section>
                    </Box>
                    <UserMetrics />
                </Flex>
            </>
        </main>
    </>
);
export default Home;
