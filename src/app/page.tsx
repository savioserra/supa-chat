'use client';

import { Button, Center, Flex, Input } from '@chakra-ui/react';

export default function Home() {
  return (
    <Center as="main" bg="blue.900" h="100%">
      <Flex
        px="5"
        py="10"
        gap="4"
        bg="white"
        boxShadow="xl"
        flexDir="column"
        overflow="hidden"
        justifyContent="center"
        width={{ base: '100%', sm: 'auto' }}
        height={{ base: '100%', sm: 'auto' }}
        borderRadius={{ base: '0', sm: 'md' }}
      >
        <Flex flexDirection={{ base: 'column', lg: 'row' }} gap="4">
          <Input color="black" placeholder="Username" width={{ base: '100%', sm: 'sm' }} />
          <Input color="black" placeholder="Password" type="password" width={{ base: '100%', sm: 'sm' }} />
        </Flex>

        <Button bg="blue.900">Login</Button>
      </Flex>
    </Center>
  );
}
