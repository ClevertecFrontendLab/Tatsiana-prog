import { Box, Button, Flex, Heading, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import IconArrow from '../../../assets/icons/icon-arrow.png';
import { CardsJuciest } from '../../Cards/CardsJuciest';
import { CardsNew } from '../../Cards/CardsNew';
import { Header } from '../../Header/Header';
import { SearchList } from '../../SearchList/SearchList';
import { SideBar } from '../../Sidebar/SideBar';
import { UserMetrics } from '../../UserMetrics/UserMetrics';
import { CulinarBlog } from './CulinarBlog';
import { VeganBlock } from './VeganBlock';

const Home = () => (
    <>
        <Header></Header>
        <main>
            <>
                <Flex justifyContent='space-between' height='1040px'>
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
                                Приятного аппетита!
                            </Heading>
                            <SearchList></SearchList>
                            <Box>
                                <Heading as='h2' textAlign='left'>
                                    Новые рецепты
                                </Heading>
                                <CardsNew />
                            </Box>
                            <Box mb='40px'>
                                <Flex justifyContent='space-between' alignItems='center'>
                                    <Heading as='h2' textAlign='left'>
                                        Самое сочное
                                    </Heading>
                                    <Link
                                        as={RouterLink}
                                        to='/samoe-sochnoe'
                                        p='10px 24px'
                                        mr='0'
                                        ml='auto'
                                        fontWeight='700'
                                        display='Flex'
                                        alignItems='center'
                                        borderRadius='8px'
                                        bg='var(--primary-color5)'
                                        color='var(--black-color)'
                                        _hover={{
                                            bg: 'var(--primary-color4)',
                                        }}
                                    >
                                        {' '}
                                        вся подборка
                                        <Box as='span' ml='9px'>
                                            <Image src={IconArrow} alt='icon'></Image>
                                        </Box>
                                    </Link>
                                </Flex>
                                <CardsJuciest cardCount={4} />
                            </Box>
                            <Box p='24px' bg='var(--primary-color1)' mb='40px'>
                                <Flex justifyContent='space-between'>
                                    <Heading as='h2' textAlign='left'>
                                        Кулинарные блоги
                                    </Heading>
                                    <Box>
                                        <Button color='var(--black-color)' bg='none'>
                                            <Box
                                                as='span'
                                                fontSize='18px'
                                                fontWeight='600'
                                                mr='9px'
                                            >
                                                Все авторы
                                            </Box>
                                            <Box as='span'>
                                                <Image src={IconArrow} alt='icon'></Image>
                                            </Box>
                                        </Button>
                                    </Box>
                                </Flex>
                                <CulinarBlog />
                            </Box>
                            <VeganBlock />
                        </Box>
                    </Box>
                    <UserMetrics />
                </Flex>
            </>
        </main>
    </>
);
export default Home;
