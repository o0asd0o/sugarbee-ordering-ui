import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    width: 100%;
`

export const CenteredContainer = styled(Container)`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const LogoImage = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
`

export const TextInput = styled.input`
    width: 100%;
    padding: 10px 12px;
    margin-bottom: 5px;
    border: 1px #ccc solid;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
`

export const SubmitButton = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px #f1c40f solid;
    border-radius: 4px;
    color: white;
    background: #f1c40f;
    font-weight: bold;
    margin-top: 20px;
`
