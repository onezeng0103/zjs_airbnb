import React, { memo } from 'react'
import { LeftWrapper } from './style/index.js'
import IconLogo from '@/assets/svg/iconLogo.jsx'
const HeaderLeft = memo(() => {
    return (
        <LeftWrapper>
            <IconLogo />
        </LeftWrapper>
    )
})

export default HeaderLeft
