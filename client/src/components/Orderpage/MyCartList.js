import styled from "styled-components";
import Item from './MyCartItem'


const MyCartList = () => {
    return (
        <OrderWrapper>
            <OrderContainer>
                <Text>내 쇼핑카트</Text>
                <Item />
            </OrderContainer>
        </OrderWrapper>
    )
}

const OrderWrapper = styled.div`
    width: 100%;
    display: grid;
    margin-top: 64px;
`
const OrderContainer = styled.div`
    /* width: 80%; */
    width: 524px;
    @media ${(props)=> props.theme.tablet}{
        width: 456px;
    }
    @media ${(props)=> props.theme.mobile}{
        width: 100%;
    }
`
const Text = styled.div`
    font-size: 28px;
    padding: 0 0 17px 15px;
    border-bottom: 1px solid ${(props)=> props.theme.grayColor};
    @media ${(props)=> props.theme.tablet} {
        font-size : 24px;
    }
    @media ${(props)=> props.theme.mobile} {
        font-size : 20px;
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 0 0 17px 0;
    }
`

export default MyCartList;