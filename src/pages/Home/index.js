import { useState, useContext } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native"

import {Feather} from '@expo/vector-icons'
import Product from "../../Components/Product"
import { CartContext } from "../../Contexts/cartContext"


export default function Home(){

    const {cart, addItemCart} = useContext(CartContext)
    const navigation = useNavigation();

    const [products, setProducts] = useState([
        {
            id:'1',
            name: 'coca',
            price: 19.9
        },
        {
            id:'2',
            name: 'chocolate',
            price: 6.5
        },
        {
            id:'3',
            name: 'queijo',
            price: 15.0
        },
        {
            id:'4',
            name: 'batata frita',
            price: 23.9
        },
        {
            id:'5',
            name: 'quarana',
            price: 6.0
        },
        {
            id:'6',
            name: 'presunto',
            price: 8.2
        }

    ])

    function handleAddCart(item){
        addItemCart(item)
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de produtos</Text>

                <TouchableOpacity style={styles.cartButton} onPress={()=> navigation.navigate("Cart")}>
                <View style={styles.dot}>
                    <Text style={styles.dotText}>
                        {cart?.length}
                    </Text>
                </View>
                <Feather name="shopping-cart" size={30} color='#000'/>
                </TouchableOpacity>
            </View>

            <FlatList
                styles={styles.list}
                data={products}
                keyExtractor={ (item) => String(item.id)}
                renderItem={({item}) => <Product data={item} addToCart={() => handleAddCart(item)}/> }
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa',
        paddingInline:14
    },
    cartContent:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:24,
        marginBottom:24,
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    cartButton:{
        
    },
    dot:{
        backgroundColor:"red",
        justifyContent:'center',
        alignItems:'center',
        width:20,
        height:20,
        borderRadius: 12,
        position:'absolute',
        zIndex:99,
        bottom:-4,
        left:-5
    },
    dotText:{
        fontSize:12,

    }

})