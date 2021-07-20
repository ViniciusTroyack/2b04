import styled from "styled-components";

export const CardLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: 50vh;
    

    input{
        height: 5vh;
        width: 160px;
        display:block;
        margin: 10px;
        background: #FFFCFC;
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px  
    }

    form{
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        border: 2px solid white;
    }

    button{  
	    color: #494949;
	    text-transform: uppercase;
	    background: #ffffff;
        margin: 8px;
	    padding: 20px;
	    border: 4px solid #494949;
	    display: block;
        transition: all 0.4s ease 0s;
    }
    button:hover {
	color: #ffffff;
	background: #f6b93b;
	border-color: #f6b93b;
	transition: all 0.4s ease 0s;
    cursor: pointer;
}
`

