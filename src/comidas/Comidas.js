import { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Comidas extends Component {
    render() {
        const { nome, marca, preco, tipo, imagem } = this.props.data;
        return (
            <View style={styles.fundo}>
                <Text style={styles.titulo}>Produto</Text>
                <View style={styles.card}>

                <Image
                        source={{ uri: imagem }}
                        style={styles.capa}
                    />
                    <Text style={styles.nome}>{nome}</Text>
                    <Text style={styles.marca}>{marca}</Text>
                    <Text style={styles.preco}>R$ {preco}</Text>
                    <Text style={styles.tipo}>{tipo}</Text>
                    
                </View>

                {/* <View style={styles.Areabotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
                        <Text style={styles.botaoTexto}>SAIBA MAIS</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }
}


const styles = StyleSheet.create({

    card: {

        shadowColor: '#000',

        backgroundColor: 'black',

        shadowOffset: { width: 0, height: 1 },

        shadowOpacity: 0.8,

        margin: 15,

        shadowRadius: 5,

        borderRadius: 5,

        elevation: 3,

    },

    fundo: {
        shadowColor: '#000',

        backgroundColor: 'black',

        shadowOffset: { width: 0, height: 1 },

        shadowOpacity: 0.8,

        margin: 15,

        shadowRadius: 5,

        borderRadius: 5,

        elevation: 3,
    },

    nome: {

        fontSize: 20,
        padding: 15,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold'

    },

    marca: {
        fontSize: 20,
        padding: 15,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold'
    },
    preco: {
        fontSize: 20,
        padding: 15,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold'
    },
    tipo: {
        fontSize: 20,
        padding: 15,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold'
    },
    capa: {

        height: 250,

        zIndex: 2,
        backgroundColor: 'black',
        color: 'white',

    },

    Areabotao: {

        alignItems: 'flex-end',
        marginTop: -40,
        paddingEnd: 15,

        zIndex: 9,
        backgroundColor: 'black',
        color: 'white',
        
        

    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 15,
        backgroundColor: '#bfbbbb',
    },

    botao: {

        width: 100,

        backgroundColor: 'red',

        opacity: 1,

        padding: 8,

        borderTopLeftRadius: 5,

        borderBottomLeftRadius: 5,

        




    },

    botaoTexto: {

        textAlign: 'center',

        color: '#FFF'

    }

});

export default Comidas;