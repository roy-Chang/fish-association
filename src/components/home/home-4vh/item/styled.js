import styled from '@emotion/styled';
import fish from '../../../../assets/img/fish.png'
import shrimp from '../../../../assets/img/shrimp.png'
import shell from '../../../../assets/img/shell.png'
import optopus from '../../../../assets/img/optopus.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px 30px 30px 30px;
  figure {
      margin: 0;
      width: 25%;
      height: 100%;
      padding: 20px 5px 10px 5px;
      position: relative;
  }
`

export const HoverBoard = styled.div`
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px 5px 10px 5px;
  div {
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.8;
    border-radius: 20px;
    transition: .5s ease;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
  }

`

export const FishCard = styled.div`
  background-image: url(${fish});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  :hover {
    .board {
      opacity: 1;
      cursor: pointer;
    }
  }
`


export const ShrimpCard = styled.div`
    background-image: url(${shrimp});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    :hover {
      .board {
        opacity: 1;
        cursor: pointer;
      }
    }
`
export const ShellCard = styled.div`
    background-image: url(${shell});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    :hover {
      .board {
        opacity: 1;
        cursor: pointer;
      }
    }
`
export const SquidCard = styled.div`
    background-image: url(${optopus});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    :hover {
      .board {
        opacity: 1;
        cursor: pointer;
      }
    }
`