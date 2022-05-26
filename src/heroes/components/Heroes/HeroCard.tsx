import { Button, Card, Col, Grid, Row, Text, Spacer } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { Hero } from "../../../Interfaces/types"

interface Props {
   hero: Hero,
   showAs?: 'screen'
}
export const HeroCard = ({ hero, showAs }: Props) => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(`/hero/${ hero.id }`);
   }

   const handleReturn = () => {
      if(history.length <= 2){
         navigate('/')
      }else{
         history.back()
      }
   }

   if( showAs === 'screen' ){ 
      const border = {borderBottom: '1px solid rgba(0, 0, 0, 0.2)', marginBottom: 7 };
      return (
         <Card onClick={ handleClick }>
            <Grid.Container >
                  <Grid xs={4}>
                     <Card.Body css={{ p: 0 }} >
                        <Card.Image
                           objectFit="cover"
                           src={`../img/heroes/${hero.id}.jpg`}
                           width={`100%`}
                           height={`auto`}
                           alt={hero.superhero}
                           className='animate__animated animate__fadeInLeft'
                        />
                     </Card.Body>
                  </Grid>

                  <Grid xs={6}>
                     <Card.Footer className="animate__animated animate__fadeIn" >
                        <Col>
                           <Row >
                              <Text b size={`1.25rem`}>
                                 {hero.superhero}
                              </Text>
                           </Row>
                           <Row>
                              <Text size={`.86rem`} css={border}>
                                 <Text b >Alter Ego: </Text>{hero.alter_ego}
                              </Text>
                           </Row>
                           <Row>
                              <Text size={`.86rem`} css={border}>
                              <Text b >Publisher: </Text>{hero.publisher}
                              </Text>
                           </Row>
                           <Row>
                              <Text size={`.86rem`} css={border}>
                              <Text b >First appearance: </Text>{hero.first_appearance}
                              </Text>
                           </Row>
                           <Spacer/>
                           <Button onClick={ handleReturn } color={'success'}> Go to Back</Button>
                        </Col>
                     </Card.Footer>
                  </Grid>

            </Grid.Container>

         </Card>
      );
   }

   return (
      <Card hoverable clickable onClick={ handleClick }>
         <Card.Body css={{ p: 0 }}>
            <Card.Image
               objectFit="cover"
               src={`../img/heroes/${ hero.id }.jpg`}
               width={`100%`}
               height={`auto`}
               alt={ hero.superhero }
            />
         </Card.Body>

         <Card.Footer blur='true' >
            <Col css={{ textAlign: 'center' }}>
               <Row justify="center">
                  <Text b size={`1.25rem`}>{hero.superhero}</Text>
               </Row>
               <Row justify="center" >
                  <Text b size={`.86rem`}>{hero.alter_ego}</Text>
               </Row>
            </Col>
         </Card.Footer>
      </Card>
   )
}