import { memo } from 'react'
import HeaderLeft from './components/left/index.jsx'
import HeaderCenter from './components/center/index.jsx'
import HeaderRight from './components/right/index.jsx'
import { HeaderWrapper } from './style/index.js'
const Header = memo(() => {
    return (
        <HeaderWrapper>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </HeaderWrapper>
    )
})

export default Header
