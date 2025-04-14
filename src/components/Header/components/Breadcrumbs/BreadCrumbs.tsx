import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const HeaderNav = () => (
    <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='../../../Pages/JuciePage/Juiciest.tsx'>
                Самое сочное
            </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='../../../Pages/JuciePage/Vegan.tsx'>
                Вегетарианские блюда
            </BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
);
