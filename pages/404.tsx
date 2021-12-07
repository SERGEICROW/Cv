import NextLink from 'next/link'
import {
    Box,
    Container,
    Button, Image
} from '@chakra-ui/react'
import {SuperLogo, SuperLogo3} from '../components/logo'

const NotFound = () => {
    return (
        <Container className="relative z-40 py-16 flex flex-col items-center justify-center
    border border-red-700 min-h-screen select-none bg-black">

            <SuperLogo/>
            <Box>
                <div className="text-red-700 text-2xl">Pag3 not f0und...</div>
                <NextLink href="/">
                    <Button
                        className="border border-green-200 rounded-lg text-4xl sm:text-6xl
                        text-green-200 hover:animate-ping animate-pulse"
                    >
                        Return to home
                    </Button>
                </NextLink>
            </Box>
            <SuperLogo3/>
        </Container>
    )
}

export default NotFound