import { Box, Flex, Heading } from '@chakra-ui/react';

import { ButttonMore } from '../../Buttons/ButtonMore';
import { CardsJuciest } from '../../Cards/CardsJuciest';
import { Header } from '../../Header/Header';
import { SearchList } from '../../SearchList/SearchList';
import { SideBar } from '../../Sidebar/SideBar';
import { UserMetrics } from '../../UserMetrics/UserMetrics';

const Vegan = () => (
    <>
        <Header></Header>
        <main>
            <>
                <Flex justifyContent='space-between'>
                    <SideBar />
                    <Box as='section'>
                        <Box>
                            <Heading
                                as='h1'
                                size='48px'
                                color='0000'
                                mt='32px'
                                mb='32px'
                                fontWeight='bold'
                            >
                                Веганская кухня!
                            </Heading>
                            <Box as='p' fontSize='16px' color='var(--dark-light-color1)'>
                                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                                попробовать вегетарианскую диету и готовить вкусные вегетарианские
                                блюда.
                            </Box>
                            <SearchList></SearchList>
                            <CardsJuciest cardCount={8} />
                            <ButttonMore />
                        </Box>
                    </Box>
                    <UserMetrics />
                </Flex>
            </>
        </main>
    </>
);

export default Vegan;
