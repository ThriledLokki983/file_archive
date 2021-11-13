/** @format */

import {
	Main,
	Container,
	MainForm,
	FormInput,
	FormLabel,
	FormGroup,
	LoginButton,
} from "./upload.styles";

/**
 * It should be possible to upload a file with added metadata (such as
 * description
 * and name of the uploader). Allowed filetypes should be xml, pdf and jpeg.
 * @returns
 */

function Upload() {
	return (
		<Container>
			<Main>
				<MainForm>
					<FormGroup>
						<FormLabel> Choose file</FormLabel>
						<FormInput type="file" accept=".jpeg, .xml.,.pdf" />
					</FormGroup>
					<FormGroup>
						<FormLabel> Description</FormLabel>
						<FormInput type="text" placeholder="description" />
					</FormGroup>
					<FormGroup>
						<FormLabel> Author</FormLabel>
						<FormInput type="text" placeholder="author" />
					</FormGroup>
					<FormGroup>
						<LoginButton>Upload</LoginButton>
					</FormGroup>
				</MainForm>
			</Main>
		</Container>
	);
}

export default Upload;
