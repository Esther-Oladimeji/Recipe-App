import styled from 'styled-components';

const Card = styled.div `

border-radius: .5rem;
overflow: hidden;
img{
    border-radius: .5rem;
    cursor: pointer;
 
    transition: transform .5s;
    object-fit:cover;
    width: 100%;
    height:100%;
}
img:hover{
    transform: scale(1.1);
}

`

const Margin = styled.div `
margin: 4rem 5rem;
@media (max-width: 900px) {
  margin: 4rem 4rem;
  }
@media (max-width: 576px) {
  margin: 4rem 1.4rem;
  }
`

const Grid = styled.div `
display:grid;
grid-template-columns: auto auto auto auto;//repeat(auto-fit, minmax(15rem, 1fr));
grid-gap: 4rem 1.5rem;


@media (max-width: 768px) {
  grid-gap: 3rem 1.5rem;
grid-template-columns: auto auto auto;
}
@media (max-width: 576px) {
  grid-gap: 2.5rem .8rem;
  grid-template-columns: auto auto;
  }
`

const Title= styled.div`
h1{
  font-family: "Playfair Display", serif;
 font-size: 36px;
 line-height: 43px;
 margin: 6rem 0 4rem;
}
hr{
  margin-bottom: 3rem;
}
`
export {Margin, Grid, Card, Title};