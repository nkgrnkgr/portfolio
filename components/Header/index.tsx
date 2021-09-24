import { AppBar, Avatar, Toolbar, Typography, Link } from '@mui/material'
import { Box } from '@mui/system'

export const Header: React.VFC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Link href="https://www.nkgr.app">
            <Avatar src="images/logo.svg" alt="logo" sx={{ mr: 2 }} />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nokogiri
          </Typography>
          <Link
            href="https://github.com/nkgrnkgr"
            target="_blank"
            rel="noopener"
          >
            <Avatar src="images/github-logo.svg" alt="logo" sx={{ p: 1 }} />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}