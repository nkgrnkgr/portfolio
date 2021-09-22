import { Button } from '@mui/material'
import Styles from './index.module.css'

export const Chat: React.VFC = () => {
  return (
    <>
      <Button variant="contained">Hello world</Button>
      <p className={Styles['chat-color']}>chat-color</p>
    </>
  )
}
