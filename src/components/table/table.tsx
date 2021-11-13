/** @format */
import { Main } from "../upload/upload.styles";
import {
	TableContainer,
	TableRow,
	TableHeader,
	TableHead,
	TableBody,
	Container,
	TableData,
} from "./table.styles";
function Table() {
	return (
		<Container>
			<TableHeader>
				<TableRow>
					<TableHead>Icon</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Author</TableHead>
					<TableHead>Date</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody></TableBody>
		</Container>
	);
}

export default Table;
