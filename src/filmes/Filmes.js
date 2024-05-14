import { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Filmes extends Component {
    render() {
        const { nome, foto, sinopse } = this.props.data;
        return (
            <View>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{nome}</Text>
                    <Text style={styles.sinopse}>{sinopse}</Text>
                    <Image
                        source={{ uri: foto }}
                        style={styles.capa}
                    />
                </View>

                <View style={styles.Areabotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
                        <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    card: {

        shadowColor: '#000',

        backgroundColor: '#FFF',

        shadowOffset: { width: 0, height: 1 },

        shadowOpacity: 0.8,

        margin: 15,

        shadowRadius: 5,

        borderRadius: 5,

        elevation: 3,

    },

    titulo: {

        fontSize: 18,

        padding: 15,

        backgroundColor: 'black',
        color: 'white',

    },

    sinopse: {
        padding: 15,
        backgroundColor: 'black',
        color: 'white',
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

export default Filmes;