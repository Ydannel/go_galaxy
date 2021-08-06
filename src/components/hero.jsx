import {Section, Container, ColumnLeft, ColumnRight, Button, Image} from './style'
import {motion} from 'framer-motion'
import PlanetOne from '../images/planet.svg'
import PlanetTwo from '../images/planet-2.svg'
import PlanetThree from '../images/planet-3.svg'
import PlanetFour from '../images/planet-4.svg'

const Hero = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
      };
    
    return ( 
    <>
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Inside to Galaxy
                    </motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >
                        Journey to the unknown
                    </motion.p>
                    <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: 0.95,
                            backgroundColor: '#67F6E7',
                            border: 'none',
                            color: '#000'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    >Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image
                        src={PlanetOne}
                        alt='planet'
                        whileTap={{ scale: 0.9 }}
                        drag={true} // you can move the image
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }} //limits for drag
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src={PlanetTwo}
                        alt='planet'
                        whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src={PlanetThree}
                        alt='planet'
                        whileTap={{ scale: 0.8 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src={PlanetFour}
                        alt='planet'
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                </ColumnRight>
            </Container>
        </Section>
    </> 
    );
}
 
export default  Hero;