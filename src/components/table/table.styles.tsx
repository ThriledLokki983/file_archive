/** @format */

import styled from "styled-components";

export const TableContainer = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-color: black;

	position: absolute;
	top: 8rem;
`;

export const TableHeader = styled.thead`
	width: 100%;
`;

export const TableBody = styled.tbody`
	width: 100%;
`;

export const TableHead = styled.th`
	width: 100%;
	padding: 1.5rem 2rem;
	text-transform: capitalize;
	text-align: center;
	border: solid 1px;
	border-left: none;

	font-size: 1.4rem;
	font-family: system-ui;
`;

export const TableRow = styled.tr`
	padding: 1rem 0;
	border-bottom: 1px solid black;
`;

export const TableData = styled.td`
	font-size: 1.3rem;
	font-family: system-ui;
	font-weight: 500;
	padding: 2.5rem 5rem;
	text-align: center;
	border: solid 1px;
	color: black;
`;

export const Container = styled.div`
	background-color: #fff;
	-webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	margin-bottom: 10rem;
	width: 75rem;

	border-radius: 0.5rem;
`;
