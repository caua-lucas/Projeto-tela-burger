import styled from 'styled-components';

export const Container = styled.div`
    background-size: cover;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:0px;
    height: 100vh;`


export const H1 = styled.h1`
    color:#FFFFFF;
    font-size: 30px;
`;

export const Image = styled.img`
    width:100%;
    height:30%;`

export const Paragraph = styled.p`
    color:#FFFFFF;
    font-size: 20px;

`

export const InputPedido = styled.input`
    outline:none;
    color:#FFFFFF;
    padding:20px;
    width:75%;
    `

export const ButtonNew = styled.button`
    background-color:#FF0000;
    color:#FFFFFF;
    cursor:pointer;
    margin-top: 30px;
    width: 85%;
    height: 60px;


     &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    } 

    `
export const ContainerItens = styled.div`
    margin-top: 0px;
 `

 export const Pedidos = styled.li`
    display:flex;
    justify-content: space-around;
    align-items: center;
    outline:none;
    margin-left:0px ;
    background-color: rgba(255,255,255,0,0.25);
    border: 14px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    width: 342px;
    height: 58px;
  
    p{
        background-color: rgba(255,255,255,0,0.25);
        margin-left:0px ;
    }
 `