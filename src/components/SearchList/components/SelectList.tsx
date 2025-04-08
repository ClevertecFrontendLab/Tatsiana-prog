import { Select } from '@chakra-ui/react';

export const SelectList = () => (
    <Select
        placeholder='Выберите из списка...'
        fontSize='16px'
        lineHeight='24px'
        w='234px'
        h='40px'
        color='rgba(0, 0, 0, 0.64)'
        borderRadius='6px'
    >
        <option value='react'>Продукт1</option>
        <option value='vue'>Продукт2</option>
        <option value='angular'>Продукт3</option>
        <option value='svelte'>Продукт4</option>
    </Select>
);
