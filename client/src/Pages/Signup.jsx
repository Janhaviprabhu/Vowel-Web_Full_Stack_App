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
 
  
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import { signUser } from '../Redux/auth/actions';

  
  export default function Signup() {

    const {loading,iserror}=useSelector((store)=>store.auth)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name:"",
      email: "",
      password: "",
    });
   
  
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formData);
        try {
          dispatch(signUser(formData));
        } catch (err) {
          console.log(err);
        }
    
    }
  
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   
    }

    if(loading){
        return <Box>...Loding</Box>
    }
    else if(iserror){
        return <Box>...Error</Box>
    } 
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign Up</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
           
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id="name">
                <FormLabel>Enter Name</FormLabel>
                <Input   type="text"
                value={formData.name}
                name="name"
                onChange={(e) => handleChange(e)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input   type="email"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input    type="password"
                value={formData.password}
                name="password"
                onChange={(e) => handleChange(e)} />
              </FormControl>
             
              <Stack spacing={10}>
              
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  loadingText="Submitting"
                  >
                 Register
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }