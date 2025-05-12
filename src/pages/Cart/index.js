import { useContext } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

import { CartContext } from "../../Contexts/cartContext"
import CardItem from "../../Components/CardItem";

export default function Cart(){

    const {cart, addItemCart, removeItemCart} = useContext(CartContext);

    return(
        <View style={styles.container}>
            <FlatList
            data={cart}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ () => <Text>Nenhum item no carrinho..</Text>}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
                <CardItem
                    data={item}
                    addAmount={ ()=> addItemCart(item)}
                    removeAmount = { () => removeItemCart(item)}
                />
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa',
        paddingStart:14,
        paddingEnd:14,
        paddingTop:14
    }
})