import { Container } from '@mui/material'
import Styles from './index.module.css'

type Props = {
  children: React.ReactNode
}

export const BodyContainer: React.VFC<Props> = ({ children }) => {
  return (
    <Container maxWidth="lg" className={Styles['container']}>
      {children}
    </Container>
  )
}
