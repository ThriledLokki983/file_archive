/** @format */

import styled from "styled-components";

export const Main = styled.main`
	padding-top: 5rem;
	background-color: #1e2749;
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
	position: relative;
	height: 100vh;
	display: flex;
	justify-content: flex;
	align-items: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const Container = styled.div`
	background-color: #fff;
	-webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
`;

export const H2Heading = styled.h2`
	font-size: 2.25rem;
	text-transform: uppercase;
	font-weight: 700;
	background-image: -webkit-gradient(
		linear,
		left top,
		right top,
		from(#7dd56f),
		to(#28b487)
	);
	background-image: linear-gradient(to right, #1e2749, #1e2749);
	-webkit-background-clip: text;
	color: transparent;
	letter-spacing: 0.1rem;
	line-height: 1.3;
	display: inline-block;

	margin-bottom: 3.5rem !important;
`;

export const MainForm = styled.form`
	margin: 0 auto;
	max-width: 55rem;
	width: 100%;
	background-color: #fff;
	-webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	padding: 5rem 7rem;
	border-radius: 5px;
`;

export const FormGroup = styled.div`
	margin-bottom: 2.5rem;
`;

export const FormLabel = styled.label`
	display: block;
	font-size: 1.6rem;
	font-weight: 350;
	margin-bottom: 0.75rem;
	text-align: left;
	padding-left: 5px;
`;

export const FormInput = styled.input`
	display: block;
	font-family: inherit;
	font-size: 1.5rem;
	color: inherit;
	padding: 1.25rem 1.75rem;
	border: none;
	width: 100%;
	background-color: #fff;
	background-color: #f2f2f2;
	border-top: 3px solid transparent;
	border-bottom: 3px solid transparent;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	border-radius: 4px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-bottom: 3px solid rgba(30, 39, 73, 1);
	}

	&:focus:invalid {
		border-bottom: 3px solid #ff7730;
	}

	&::-webkit-input-placeholder {
		color: #bbb;
		font-size: 1.3rem;
	}
`;

export const LoginButton = styled.button`
	width: 100%;
	font-size: 1.6rem;
	padding: 1.4rem 3rem;
	border-radius: 5px;
	text-transform: uppercase;
	display: inline-block;
	text-decoration: none;
	position: relative;
	-webkit-transition: all 0.4s;
	transition: all 0.4s;
	font-weight: 600;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border: none;
	cursor: pointer;
	background-color: rgba(30, 39, 73, 0.9);
	color: #fff;

	&:hover {
		background-color: rgba(30, 39, 73, 1);
		-webkit-transform: translateY(-3px);
		transform: translateY(-3px);
		-webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
	}
`;

export const LoginFooter = styled.p`
	margin-top: 1rem;
	color: #1e2749;
	font-size: 13px;
`;

export const SpanStyle = styled.span`
	font-weight: 600;
`;

export const SpanItalic = styled.span`
	font-style: italic;
	font-size: 8px;
`;

export const ImageContainer = styled.div`
	width: 25rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HeaderImageContainer = styled.div`
	grid-column: 1 / 2;
	width: 9rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	width: 100%;
	object-fir: cover;
`;

export const SpanStyle1 = styled.span`
	padding-top: 2rem;
	font-weight: 400;
	text-align: ;
`;

export const Link = styled.a`
	padding-top: 2rem;
	font-weight: 600;
	text-decoration: none;
	color: #1e2749;

	&:hover {
		cursor: pointer;
		color: #f15025;
	}
`;
