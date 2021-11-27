import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const footPrintImg = `/`

    return (
                <LogoBox className="flex p-2">
                    <Image src={footPrintImg} width={35} height={1} alt="logo" />
                    <h5 className="text-white text-2xl">
                        Roy's Cv
                    </h5>
                </LogoBox>
    )
}

export default Logo