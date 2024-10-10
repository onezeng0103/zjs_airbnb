import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import HeaderLeft from './components/left/index.jsx'
import HeaderCenter from './components/center/index.jsx'
import HeaderRight from './components/right/index.jsx'
import { HeaderWrapper } from './style.js'
import classNames from 'classnames'
const searchList = [
    {
        name: '住宿',
        children: [
            { name: '地点', placeholder: '搜索目的地' },
            { name: '入住', placeholder: '添加日期' },
            { name: '退房', placeholder: '添加日期' },
            { name: '人员', placeholder: '添加人数' },
        ],
    },
    {
        name: '体验',
        children: [
            { name: '地点', placeholder: '搜索目的地' },
            { name: '日期', placeholder: '添加日期' },
            { name: '人员', placeholder: '添加人数' },
        ],
    },
]
const Header = memo(() => {
    const { fixed, isLucency } = useSelector(state => {
        return {
            fixed: state.main.fixed,
            isLucency: state.main.isLucency,
        }
    })
    const [current, setCurrent] = useState(0)
    return (
        <HeaderWrapper className={classNames({ fixed })}>
            <div className="center">
                <div className="top">
                    <HeaderLeft />
                    <div className="list">
                        {searchList.map((item, index) => {
                            return (
                                <div
                                    className={classNames('item', { active: index === current })}
                                    key={index}
                                    onClick={() => {
                                        setCurrent(index)
                                    }}
                                >
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                    {/* <HeaderCenter /> */}
                    <HeaderRight />
                </div>
                <div className="search">
                  <div className="center"></div>
                </div>
            </div>
        </HeaderWrapper>
    )
})

export default Header
