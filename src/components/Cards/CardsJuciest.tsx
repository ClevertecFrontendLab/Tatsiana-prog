import { Box, Button, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import { useState } from 'react';

import { CardsCounter } from '../Buttons/Cardscounter';
import { LikesCounter } from '../Buttons/LikesCounter';
import data1 from './../../data/juciest.json';

const RecipesJuciest = data1;

interface CardsJuciestProps {
    cardCount: number;
}

export const CardsJuciest: React.FC<CardsJuciestProps> = ({ cardCount }) => {
    const displayedRecipes = RecipesJuciest.slice(0, cardCount);

    return (
        <Grid
            mt='24px'
            mb='16px'
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 2fr)',
                md: 'repeat(1, 1fr)',
                xl: 'repeat(1, 1fr)',
                xxl: 'repeat(2, 2fr)',
            }}
            gap='24px'
        >
            {displayedRecipes.map((recipe, index) => (
                <GridItem key={index}>
                    <Flex
                        width={{ xxl: '668px', xl: '100%', md: '50%' }}
                        height={{ md: '244px', sm: '128px' }}
                        alignItems='center'
                        borderRadius='6px'
                        border='1px rgba(0, 0, 0, 0.08) solid'
                    >
                        <Box width='50%' height='244px'>
                            <Image
                                width={{ xxl: '244px', xl: '100%' }}
                                height={{ md: '244px', sm: '128px' }}
                                objectFit='cover'
                                borderTopLeftRadius='8px'
                                borderBottomLeftRadius='8px'
                                src={recipe.image}
                                alt={recipe.image}
                            />
                        </Box>
                        <Box as='div' width='50%' padding='20px 24px' boxSizing='border-box'>
                            <Flex justifyContent='space-between' mb='24px'>
                                <Flex gap='8px' bg='var(--primary-color4)' p='4px 8px'>
                                    <Image
                                        width='16px'
                                        height='16px'
                                        src={recipe.category.icon}
                                        alt={recipe.category.name}
                                    />
                                    <Box fontSize='14px'>{recipe.category.name}</Box>
                                </Flex>
                                <Flex>
                                    <CardsCounter />
                                    <LikesCounter />
                                </Flex>
                            </Flex>
                            <RecipeHeading type={recipe.type} />
                            <DescriptionBox description={recipe.description} />
                            <Flex gap='8px' justifyContent='flex-end'>
                                <Button
                                    padding='6px 12px'
                                    borderRadius='6px'
                                    border='1px rgba(0, 0, 0, 0.48) solid'
                                    background='rgba(255, 255, 255, 0.06)'
                                    color='black'
                                >
                                    Сохранить
                                </Button>
                                <Button
                                    padding='6px 12px'
                                    borderRadius='6px'
                                    border='1px rgba(0, 0, 0, 0) solid'
                                    background='black'
                                    color='white'
                                >
                                    Готовить
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </GridItem>
            ))}
        </Grid>
    );
};

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
