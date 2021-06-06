import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";

const LogoContainter = styled.div`
   ${tw`
   flex
   items-center
   `}
`;

const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `}
`;

const Image = styled.div`
    ${tw`h-6 md:h-9`};

    img {
        width: auto;
        heiight: 100%
    }
`;

export function Logo() {
    return <LogoContainter>
        <Image>
            <img src={CarLogoImg} alt="Logo" />
        </Image>
        <LogoText>Yourcar.</LogoText>
    </LogoContainter>
}