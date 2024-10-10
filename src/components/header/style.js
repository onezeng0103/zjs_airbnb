import styled from 'styled-components'
export const HeaderWrapper = styled.div`
    box-sizing: border-box;
    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
    .center {
        background-color: #fff;
        border: 1px solid #eee;
        .top {
            height: 80px;

            display: flex;
            text-align: center;
            align-items: center;
            .list {
                display: flex;
                .item {
                    color: #6a6a6a;
                    height: 40px;
                    font-size: 16px;
                    line-height: 40px;
                    cursor: pointer;
                    padding: 0 16px;
                    border-radius: 22px;
                    &:hover {
                        background-color: #f5f5f5;
                    }
                    &.active {
                        color: #000;
                    }
                }
            }
        }
        .search {
            max-width: 850px;
            margin: 0 auto;
            height: 100px;

            .center {
                height: 66px;
                border: 1px solid #eee;
                border-radius: 32px;
                box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
            }
        }
    }
`
