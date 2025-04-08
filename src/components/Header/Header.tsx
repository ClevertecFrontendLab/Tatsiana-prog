import { Flex } from '@chakra-ui/react';

import { HeaderMenuIcon } from '~/components/Header/components/HeaderMenuIcon/HeaderMenuIcon';
import { HeaderNav } from '~/components/Header/components/HeaderNav/NeaderNav';
import { HeaderUser } from '~/components/Header/components/HeaderUser/HeaderUser';
import { Logo } from '~/components/Logo/Logo';

export const Header = () => (
    <header>
        <Flex
            pt='16px'
            pr={{ base: '30px', md: '80px', sm: '30px', xl: '80px' }}
            pb='16px'
            pl='16px'
            h='80px'
            w='100%'
            bgColor='#FFFFD3'
            justify='space-between'
        >
            <Flex gap='128' align='center'>
                <Logo />
                <HeaderNav />
            </Flex>
            <Flex align='center'>
                <HeaderUser />
                <HeaderMenuIcon />
            </Flex>
        </Flex>
    </header>
);
