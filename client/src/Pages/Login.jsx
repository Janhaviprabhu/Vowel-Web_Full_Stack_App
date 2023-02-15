import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,

    Stack,
  
    Button,
    Heading,
    Text,
    useColorModeValue,
 
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logUser } from '../Redux/auth/actions';
  
  export default function Login() {
    const { loggedUser } = useSelector(
        (store) => store.auth
      );
      const dispatch = useDispatch();
      const [formData, setFormData] = useState({ email: "", password: "" });
   
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        dispatch(logUser(formData)).then(
        
          console.log(loggedUser)
      
        );
      }
    
      function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log In</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <Stack spacing={10}>
              
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={(e) => handleSubmit(e)}
                  >
               login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }