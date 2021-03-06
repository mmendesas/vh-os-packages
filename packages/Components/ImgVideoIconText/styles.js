import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.div`
    width: 600px;
    height: 470px;
    position: relative;

    ${({ responsive }) => responsive && `
    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 250px;
        position: relative;
    }
`}
` 

export const ImgItem = styled.div`
    width: 100%;
    height: 100%;
    background-size: contain;
    background-image: url(${props => props.image && props.image});
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
` 

export const ImgOverlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    border-radius: 0 0 7px 7px;
    background-image: linear-gradient(to top, #080809, rgba(88, 90, 90, 0));
    -webkit-transition: all ease .5s;
    -moz-transition: all ease .5s;
    transition: all ease .5s;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    z-index: 0;
` 

export const ItemsWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    z-index: 3;
` 