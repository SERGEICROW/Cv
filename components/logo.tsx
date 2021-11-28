import Image from 'next/image'
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
    const doomguy = `/doomguy.gif`

    return (
                <LogoBox className="flex p-2">
                    <Image src={doomguy} width={35} height={1} alt="logo" />
                    <h5 className="text-white text-2xl">
                        Rodrigo Yanez
                    </h5>
                </LogoBox>
    )
}

export default Logo

export const LogoArrow = () => {
    const arrow = '/arrow.svg'

    return (
        <LogoBox>
            <Image src={arrow} width={15} height={15} alt='arrow'/>
        </LogoBox>
    )
}

