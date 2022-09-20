import { DefaultButton } from '../../components/Button/Default/DefaultButton'
import { DefaultBox } from '../../components/Box/DefaultBox'
import { Grid } from '../../components/Grid/DefaultGrid'

function Home(){
    return (
        <Grid>
            <DefaultBox>
                <DefaultButton href="/signin" title="Teste" backgroundColor="#0E6BA8" />
            </DefaultBox>
        </Grid>
    )
}

export default Home