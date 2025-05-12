import React, { useState, createContext } from "react";
import Product from "../Components/Product";

export const CartContext = createContext({});

function CartProvider({children}){
    const [cart, setCart] = useState([]);

    function addItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            let cartList = cart

            cartList[indexItem].amount = cartList[indexItem].amount + 1

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

            setCart(cartList)
            console.log(cartList)
            return;
        }

        let data = {
            ...newItem,
            amount:1,
            total:newItem.price
        }
        setCart(products => [...products, data])
        console.log([...cart, data])
    }

    function removeItemCart(product){
        // percorre a lista, assim retornando a posicao desse item
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1) {
            let cartList = cart;    

            // pega essa posicao da lista e diminui
            cartList[indexItem].amount = cartList[indexItem].amount - 1

            // recalcula o preco total desse produto
            cartList[indexItem].total = cartList[indexItem].amount - cartList[indexItem].price

            setCart(cartList)
            return;

        }
        // o filter vai retornar todos os itens e guardar nessa variavel
        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)

    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                removeItemCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;