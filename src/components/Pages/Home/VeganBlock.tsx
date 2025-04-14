import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

// Интерфейсы для данных
interface VeganBlockCard {
    category: {
        name: string;
        icon: string;
    };
    type: string;
    description: string;
}

interface FoodDish {
    title: string;
    image: string;
}

// Массивы данных
const VeganBlockCards: VeganBlockCard[] = [
    {
        category: {
            name: 'Вторые блюда',
            icon: '/src/assets/icons/sidebar/icon3.svg',
        },
        type: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день...',
    },
    {
        category: {
            name: 'Вторые блюда',
            icon: '/src/assets/icons/sidebar/icon3.svg',
        },
        type: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными...',
    },
];

const fooddish: FoodDish[] = [
    {
        title: 'Домашние сырные палочки',
        image: '/src/assets/icons/sidebar/icon10.svg',
    },
    {
        title: 'Панкейки',
        image: '/src/assets/icons/sidebar/icon8.svg',
    },
    {
        title: 'Воздушное банановое печенье на сковороде',
        image: '/src/assets/icons/sidebar/icon5.svg',
    },
];

export const VeganBlock: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // Тип для состояния

    const toggleDescription = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Box>
            <Flex justifyContent='space-between' mb='24px'>
                <Heading as='h2'>Веганская кухня</Heading>
                <Box width='668px' textAlign='left'>
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету...
                </Box>
            </Flex>
            <Flex gap='24px'>
                <Flex gap='24px'>
                    {VeganBlockCards.map((VeganBlockCardItem, index) => (
                        <Box
                            key={index}
                            width='322px'
                            height='100%'
                            p='24px'
                            background='white'
                            borderRadius='8px'
                            border='1px solid rgba(0, 0, 0, 0.08)'
                        >
                            <Heading
                                as='h3'
                                fontSize='20px'
                                lineHeight='28px'
                                fontWeight='500'
                                mb='8px'
                            >
                                {VeganBlockCardItem.type}
                            </Heading>
                            <Box
                                as='p'
                                fontSize='14px'
                                lineHeight='2'
                                mb='23px'
                                textAlign='left'
                                className={expandedIndex === index ? '' : 'limit-text'} // Применяем класс в зависимости от состояния
                                onClick={() => toggleDescription(index)} // Обработчик клика
                                style={{ cursor: 'pointer' }} // Курсор указателя при наведении
                            >
                                {VeganBlockCardItem.description}
                            </Box>
                            <Flex gap='8px'>
                                <Box>
                                    <Image
                                        src={VeganBlockCardItem.category.icon}
                                        alt={VeganBlockCardItem.category.name}
                                    />
                                </Box>
                                <Box>{VeganBlockCardItem.category.name}</Box>
                            </Flex>
                        </Box>
                    ))}
                </Flex>
                <Flex flexDirection='column' gap='12px' w='668px'>
                    {fooddish.map((fooddishItem, index) => (
                        <Flex
                            key={index}
                            p='16px 24px'
                            justifyContent='space-between'
                            borderRadius='8px'
                            border='1px rgba(0, 0, 0, 0.08) solid'
                        >
                            <Flex gap='12px' alignItems='center'>
                                <Image src={fooddishItem.image} alt={fooddishItem.title} />
                                <Box as='span' fontSize='20px' fontWeight='500'>
                                    {fooddishItem.title}
                                </Box>
                            </Flex>
                            <Button
                                p='6px 12px'
                                color='var(--primary-color3)'
                                background='none'
                                borderRadius='8px'
                                border='1px solid var(--primary-color3)'
                            >
                                Готовить
                            </Button>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};
