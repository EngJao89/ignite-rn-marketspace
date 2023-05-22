import {
  Box,
  HStack,
  Heading,
  IPressableProps,
  Image,
  Pressable,
  Text,
} from 'native-base'

import { ProductDetailsDTO } from '@dtos/ProductDetailsDTO'

import { api } from '@services/api'

interface Props extends IPressableProps {
  data: ProductDetailsDTO
}

export function MyAdCard({ data, ...rest }: Props) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(data.price / 100)

  return (
    <Pressable alignItems="flex-start" pb={6} {...rest}>
      <HStack>
        <Image
          alt="Imagem do meu produto"
          source={{
            uri: `${api.defaults.baseURL}/images/${data.product_images[0].path}`,
          }}
          rounded="md"
          w={33}
          h={27}
        />

        <Box
          px={2}
          bg={data.is_new ? 'blue.normal' : 'gray.200'}
          rounded="full"
          position="absolute"
          right={1}
          top={1}
        >
          <Text
            color="white"
            fontFamily="bold"
            fontSize="xxs"
            textTransform="uppercase"
            textAlign="center"
          >
            {data.is_new ? 'novo' : 'usado'}
          </Text>
        </Box>

        {!data.is_active && (
          <Box
            rounded="md"
            w={33}
            h={27}
            position="absolute"
            bg="gray.100:alpha.40"
          >
            <Text
              position="absolute"
              bottom={1}
              left={2}
              textTransform="uppercase"
              fontFamily="bold"
              fontSize="xs"
              color="gray.700"
            >
              anúncio desativado
            </Text>
          </Box>
        )}
      </HStack>

      <Text
        color={data.is_active ? 'gray.200' : 'gray.400'}
        fontFamily="regular"
        fontSize="md"
        mt={1}
      >
        {data.name}
      </Text>
      <Heading
        color={data.is_active ? 'gray.100' : 'gray.400'}
        fontFamily="bold"
        fontSize="lg"
      >
        <Text
          color={data.is_active ? 'gray.100' : 'gray.400'}
          fontFamily="bold"
          fontSize="md"
        >
          R$
        </Text>{' '}
        {priceFormatted}
      </Heading>
    </Pressable>
  )
}
