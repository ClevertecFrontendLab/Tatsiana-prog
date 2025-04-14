import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { useState } from 'react';

import { CardsCounter } from '../Buttons/Cardscounter';
import { LikesCounter } from '../Buttons/LikesCounter';

const RecipesNew = [
    {
        category: {
            name: 'Первые блюда',
            icon: './src/assets/icons/sidebar/icon3.svg',
        },

        type: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: '/src/assets/image/recipe/new/first/1.png',
    },

    {
        category: {
            name: 'Вегетарианские блюда',
            icon: '/src/assets/icons/sidebar/icon7.svg',
        },

        type: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        image: '/src/assets/image/recipe/new/vegan/1.png',
    },
    {
        category: {
            name: 'Дессерты, выпечка',
            icon: '/src/assets/icons/sidebar/icon3.svg',
        },
        type: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        image: '/src/assets/image/recipe/new/dessert/1.png',
    },
    {
        category: {
            name: 'Салаты',
            icon: '/src/assets/icons/sidebar/icon1.svg',
        },
        type: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        image: '/src/assets/image/recipe/new/salat/1.png',
    },
];

export const CardsNew = () => {
    const [isExpanded, setIsExpanded] = useState(false); // Перенесите useState сюда

    return (
        <Flex gap='24px' mt='24px'>
            {RecipesNew.map((recipe, index) => (
                <Box key={index} width='322px' height='414px'>
                    <Image src={recipe.image} alt={recipe.type} />
                    <Box p='16px 24px 20px 16px'>
                        <Heading
                            as='h3'
                            fontSize='20px'
                            lineHeight='28px'
                            fontWeight='500'
                            mb='8px'
                        >
                            {recipe.type}
                        </Heading>
                        <Box
                            as='p'
                            fontSize='14px'
                            lineHeight='2'
                            mb='26px'
                            textAlign='left'
                            overflow='hidden'
                            whiteSpace={isExpanded ? 'normal' : 'nowrap'}
                            textOverflow={isExpanded ? 'clip' : 'ellipsis'}
                            maxHeight={isExpanded ? 'none' : '80px'} // Замените на 60px для 3 строк
                            cursor={isExpanded ? 'default' : 'pointer'}
                            onClick={() => setIsExpanded(!isExpanded)} // переключение состояния
                        >
                            {recipe.description}
                        </Box>
                        <Flex justifyContent='space-between' alignItems='center'>
                            <Flex gap='8px'>
                                <Box>
                                    <Image src={recipe.category.icon} alt={recipe.category.name} />
                                </Box>
                                <Box>{recipe.category.name}</Box>
                            </Flex>
                            <Flex>
                                <CardsCounter />
                                <LikesCounter />
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            ))}
        </Flex>
    );
};
