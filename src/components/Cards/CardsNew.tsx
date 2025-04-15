import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
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
            name: 'Веганские блюда',
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

export const CardsNew = () => (
    <Flex gap='24px' m='24px 0 40px' position='relative'>
        {RecipesNew.map((recipe, index) => (
            <Box
                key={index}
                width='322px'
                height='414px'
                borderRadius='8px'
                border='1px rgba(0, 0, 0, 0.08) solid'
            >
                <Image
                    src={recipe.image}
                    alt={recipe.type}
                    borderTopLeftRadius='8px'
                    borderTopRightRadius='8px'
                />
                <Box p='16px 24px 20px 16px'>
                    <RecipeHeading type={recipe.type} />
                    <DescriptionBox description={recipe.description} />
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Flex gap='8px' p='3px 8px' bg='var( --primary-color7)' borderRadius='8px'>
                            <Box>
                                <Image src={recipe.category.icon} alt={recipe.category.name} />
                            </Box>
                            <Box fontSize='14px'>{recipe.category.name}</Box>
                        </Flex>
                        <Flex>
                            <CardsCounter />
                            <LikesCounter />
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        ))}
        <Box
            position='absolute'
            p='12px'
            width='48px'
            height='48px'
            borderRadius='8px'
            background='var(--black-color)'
            left='15px'
            top='50%'
            transform='translate(-50%, -50%)'
        >
            <Image as={ArrowBackIcon} alt='arrow' boxSize='100%' color='white' />
        </Box>
        <Box
            position='absolute'
            p='12px'
            width='48px'
            height='48px'
            borderRadius='8px'
            background='var(--black-color)'
            right='-35px'
            top='50%'
            transform='translate(-50%, -50%)'
        >
            <Image as={ArrowForwardIcon} alt='arrow' boxSize='100%' color='white' />
        </Box>
    </Flex>
);
const RecipeHeading: React.FC<{ type: string }> = ({ type }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Heading
            as='h3'
            fontSize='20px'
            lineHeight='28px'
            fontWeight='500'
            mb='8px'
            whiteSpace={isExpanded ? 'normal' : 'nowrap'}
            overflow='hidden'
            textOverflow='ellipsis'
            onClick={handleToggle}
            cursor='pointer'
        >
            {type}
        </Heading>
    );
};

const DescriptionBox: React.FC<{ description: string }> = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Box
            as='p'
            fontSize='14px'
            lineHeight='20px'
            mb='26px'
            textAlign='left'
            overflow='hidden'
            display={isExpanded ? 'block' : '-webkit-box'}
            sx={{
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: isExpanded ? 'unset' : 3,
            }}
            onClick={handleToggle}
            cursor='pointer'
        >
            {description}
        </Box>
    );
};
