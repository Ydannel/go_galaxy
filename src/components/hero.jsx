import {Section, Container, ColumnLeft, ColumnRight, Button} from './hero'
import {motion} from 'framer-motion'


const Hero = () => {
    return ( 
    <>
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>Wekcome to Galaxy</h1>
                    <p>Journey to the unknown</p>
                    <Button>Get Started</Button>
                </ColumnLeft>
            </Container>
        </Section>
    </> 
    );
}
 
export default Hero;