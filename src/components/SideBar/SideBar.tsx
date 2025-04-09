import {
    Accordion as ChakraAccordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Image,
    Link,
    Stack,
} from '@chakra-ui/react';

import data from './../../data/menu.json';

const items = data;
const SideBar = () => (
    <aside>
        <Stack>
            <ChakraAccordion
                defaultIndex={[0]}
                allowMultiple
                width='256px'
                height='644px'
                pt='46px'
                pl='10px'
                pb='10px'
                pr='16px'
            >
                {Object.entries(items).map(([key, item]) => (
                    <AccordionItem key={key} border='none'>
                        <AccordionButton
                            display='flex'
                            justifyContent='space-between'
                            fontSize='16px'
                            fontWeight='500'
                            pt='12px'
                            pl='8px'
                            pb='12px'
                            pr='16px'
                            _hover={{ bg: 'var( --primary-color2)' }}
                        >
                            <Flex>
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    boxSize='24px'
                                    marginRight='16px'
                                />
                                {item.name}
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel textAlign='left'>
                            {Object.entries(item.custom).map(([typeKey, type]) => (
                                <div key={typeKey}>
                                    <Link
                                        href='#'
                                        mt='16px'
                                        mb='16px'
                                        p='11px'
                                        display='block'
                                        borderLeft='2px solid var(--primary-color1)'
                                        transition='border-left 0.3s linear'
                                        _hover={{
                                            pl: '13px',
                                            borderLeft: '8px solid var(--primary-color1)',
                                        }}
                                    >
                                        {type.title}{' '}
                                    </Link>
                                </div>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </ChakraAccordion>
        </Stack>
    </aside>
);

export default SideBar;
