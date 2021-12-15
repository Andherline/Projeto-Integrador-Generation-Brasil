import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import './CadastroCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import { buscaId, post } from '../../../services/Service';


function CadastroCategoria() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: '',
        descricao: '',
        palavrachave: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria" + JSON.stringify(categoria))

        post(`/categorias`, categoria, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
        alert('Categoria cadastrada com sucesso');
        back()

    }

    function back() {
        history.push('/categorias')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro categoria</Typography>
                <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="tipo" label="Tipo" variant="outlined" name="tipo" margin="normal" fullWidth />
                <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <TextField value={categoria.palavrachave} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="palavrachave" label="Palavra Chave" variant="outlined" name="palavrachave" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='btn-cadastrar'>
                    Cadastrar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCategoria;