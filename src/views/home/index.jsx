import { memo, useEffect } from 'react'
import { getHotrecommenddest } from '@/api/home'
const Home = memo(() => {
    useEffect(() => {
        getHotrecommenddest().then(res => {
            console.log(res)
        })
        return () => {
            console.log('卸载')
        }
    }, [])
    return <div>Home</div>
})

export default Home
