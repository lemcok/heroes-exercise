import { Card, Grid, Row, SimpleColors, Text } from "@nextui-org/react";

export const HomeScreen = () => {

   interface props { text: string, color: SimpleColors }
   const MockItem = ({ text, color }: props) => {
      return (
         <Card color={`${color}`} css={{ h: "$24" }}>
            <Text h6 size={15} color="white" css={{ mt: 0 }}>
               { text }
            </Text>
         </Card>
      )
   }
   
   return (
      <div>
         <h2>NextUI</h2>
         <hr />
         <Grid.Container gap={2}>
            <Grid xs={4}>
               <MockItem text="1 of 3" color='primary' />
            </Grid>
            <Grid xs={4}>
               <MockItem text="1 of 3" color='primary' />
            </Grid>
            <Grid xs={4}>
               <MockItem text="1 of 3" color='primary' />
            </Grid>

            <Grid xs>
               <MockItem text="1 of 3" color='secondary' />
            </Grid>
               <Card color={"success"}>
                  <Row justify="space-between" >
                     <Row gap={1} css={{ marginLeft: 'none' }}>
                        <Text>link1</Text>
                        <Text>link2</Text>
                        <Text>link3</Text>
                     </Row>
                     
                     <Text>Hola3</Text>
                  </Row>
               </Card>
         </Grid.Container>
      </div>
   );
}