import { Box, Button, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';

import { CardsCounter } from '../Buttons/Cardscounter';
import { LikesCounter } from '../Buttons/LikesCounter';
import data1 from './../../data/juciest.json';

const RecipesJuciest = data1;

interface CardsJuciestProps {
    cardCount: number; // Указываем тип для cardCount
}

export const CardsJuciest: React.FC<CardsJuciestProps> = ({ cardCount }) => {
    const displayedRecipes = RecipesJuciest.slice(0, cardCount); // Ограничиваем количество карточек

    return (
        <Grid mt='24px' templateColumns='repeat(2, 1fr)' gap='24px'>
            {displayedRecipes.map((recipe, index) => (
                <GridItem key={index}>
                    <Flex width='668px' height='244px' alignItems='center'>
                        <Box width='50%' height='244px'>
                            <Image
                                width='346px'
                                height='244px'
                                objectFit='cover'
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
                                lineHeight='20px'
                                mb='26px'
                                textAlign='left'
                            >
                                {recipe.description}
                            </Box>
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
