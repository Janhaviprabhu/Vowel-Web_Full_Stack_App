import { Box, Button, ButtonGroup, Grid, Img, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCartData } from '../Redux/cart/actions';
import { getAllProducts } from '../Redux/product/actions';

const Products = () => {
     const {data} = useSelector(state => state.product);
     const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())

    },[])

  return (
    <div>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={2} m='3'>
              {
                data && data?.map((item,index) => {
                     console.log(item.images[0],index)
                  return (
                   
                    <Box key={index} borderRadius='7' boxShadow='xs' p='3' _hover={{ border: 'green', cursor: 'pointer', boxShadow: 'outline' }} maxWidth='250px' >
                      <Stack p='3'>
                        <Img boxSize="16rem" src={item.images[0]} h={'200px'}  />
                        <Text> {item.title}</Text>
                        <Text> {item.category} </Text>
                        <Text>Price: ₹ {item.price} </Text>
                       <ButtonGroup justifyContent={'center'}>
                        <Button mt='6'  background={"#10847e"} _hover={{ background: "#14918b" }} color="white" p='5'>
                                        Add To Cart
                                    </Button>
                       </ButtonGroup>
                      </Stack>
                    </Box>
                  );
                })}
            </Grid>
      
    </div>
  )
}

export default Products
