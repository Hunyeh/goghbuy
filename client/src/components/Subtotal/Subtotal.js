import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { Link } from 'react-router-dom';
import {
    Button,
    Box,
    Flex,
    Heading
} from '@chakra-ui/react';
 import { ArrowRightIcon } from '@chakra-ui/icons';
 import { useStateValue } from "../../StateProvider";
import { getCartTotal} from '../../reducer';
function Subtotal() {

  const [{ cart }, dispatch] = useStateValue();

    return (
      <>
        <Flex direction ='column' align='end' pr={10}>
         <Box  bg='white' w="20%" borderWidth="1px" borderRadius="lg" my="10%" p={4} align='center'>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  {/* Part of the homework */}
                  Subtotal ({cart.length}): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          <Link to='/login'>
          <Button colorScheme="orange" size="sm" type="submit" mt={2}>
          Proceed to Checkout<div className='icon'><ArrowRightIcon /></div>
          </Button>
          </Link>
        </Box>
        </Flex>
        </>
      );
    }
export default Subtotal;