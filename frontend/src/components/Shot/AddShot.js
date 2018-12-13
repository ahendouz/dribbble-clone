import React from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import axios from "axios";
import { ColorExtractor } from "react-color-extractor";

import { CREATE_SHOT } from "../../queries/Mutations";
import { SHOTS } from "../../queries/Queries";

import withAuth from "../../lib/withAuth";
import { PinkBtn } from "../../styles/Buttons";
import { Form } from "../../styles/Form";
import { HeadingPrimary } from "../../styles/Heading";
import SVGicon from "../../icons/SVGicon";
import isValidImage from "../../utils/isValidImage";
import { imageTypes, imageMaxSize } from "../../utils/imageSizeAndType";
import { Shots } from "../../styles/Shots";

class AddShot extends React.Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    tags: "",
    colors: [],
    imagePreview: "",
    progress: 0,
    uploading: true
  };

  handleChange = event => {
    const { name, value } = event.target;
    if (name === "tags") {
      // being unable to do more than one space
      const trim = value.replace(/\s+/gi, " ");
      this.setState({
        tags: trim
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleSubmit = (event, addShot) => {
    event.preventDefault();
    addShot().then(({ data }) => {
      this.props.history.push("/");
    });
  };
  getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }));

  validateForm = () => {
    const { title, image } = this.state;
    const isInvalid = !title || !image;
    return isInvalid;
  };

  updateCache = (cache, { data: { createShot } }) => {
    const { shots } = cache.readQuery({ query: SHOTS });
    cache.writeQuery({
      query: SHOTS,
      data: {
        shots: [createShot, ...shots]
      }
    });
  };

  handleFileUpload = async file => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "dribble-clone");
    const res = await axios({
      method: "POST",
      url: "https://api.cloudinary.com/v1_1/ahendouz/image/upload",
      data,
      // ahrbil => getting upload progress from axios
      onUploadProgress: prog => {
        // ahrbil => progress with range of 0 and 100
        const progress = Math.round((prog.loaded * 100) / prog.total);
        this.setState({ progress });
      }
    });
    const shot = res.data;
    this.setState({
      image: shot.secure_url,
      largeImage: shot.secure_url,
      uploading: !this.state.uploading
    });
  };

  handleOnDrop = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      this.setState({
        imagePreview: ""
      });
    }
    if (acceptedFiles && acceptedFiles.length > 0) {
      if (isValidImage(acceptedFiles[0])) {
        // ahrbil => reading the file from input with FileReader() API
        // updating the state to display it
        const reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.addEventListener("load", () =>
          this.setState({ imagePreview: reader.result })
        );
        // ahrbil => passing the file to be uploaded to cloudinary
        this.handleFileUpload(acceptedFiles[0]);
      }
    }
  };

  render() {
    const {
      title,
      description,
      image,
      largeImage,
      colors,
      imagePreview,
      progress,
      uploading
    } = this.state;
    const tags = this.state.tags.split(" ").filter(tag => tag !== "");
    return (
      <Mutation
        mutation={CREATE_SHOT}
        variables={{
          title,
          description,
          image,
          largeImage,
          tags,
          colors
        }}
        update={this.updateCache}
      >
        {(addShot, { loading }) => {
          return (
            <AddShotContainer>
              <AddShotHeading>What are you working on?</AddShotHeading>
              {imagePreview ? (
                <ImagePreview uploading={uploading}>
                  <ColorExtractor getColors={this.getColors}>
                    <img src={this.state.imagePreview} alt="Preview" />
                  </ColorExtractor>
                  <ProgressBar progress={progress} uploading={uploading} />
                </ImagePreview>
              ) : (
                <Dropzone
                  className="dropzone"
                  acceptClassName="fileover"
                  rejectClassName="invalid"
                  onDrop={this.handleOnDrop}
                  accept={imageTypes}
                  multiple={false}
                  maxSize={imageMaxSize}
                >
                  <DropContainer>
                    <div>
                      <FileTypeCard>
                        <SVGicon name="image" />
                        <span>
                          <h3>High resolution images</h3>
                          <p>PNG, JPG, JPEG, GIF</p>
                        </span>
                      </FileTypeCard>
                      <FileTypeCard>
                        <SVGicon name="gif" />
                        <span>
                          <h3>Animated GIFs</h3>
                          <p>800x600 or 400x300</p>
                        </span>
                      </FileTypeCard>
                    </div>
                    <SVGicon
                      name="upload"
                      fill="#3a8abb"
                      style={{ width: "160px" }}
                    />
                    <h2>Click or Drag an image. (up to 9MB)</h2>
                  </DropContainer>
                </Dropzone>
              )}
              <AddShotForm
                onSubmit={event => this.handleSubmit(event, addShot)}
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Add Name"
                  onChange={this.handleChange}
                  value={title}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Add Description"
                  onChange={this.handleChange}
                  value={description}
                />
                <input
                  type="tags"
                  name="tags"
                  placeholder="Add Tags"
                  onChange={this.handleChange}
                  value={this.state.tags}
                />
                <PinkBtn
                  disabled={loading || this.validateForm()}
                  type="submit"
                >
                  Add Shot
                </PinkBtn>

                {/* {error && <Error error={error} />} */}
              </AddShotForm>
            </AddShotContainer>
          );
        }}
      </Mutation>
    );
  }
}

export default withAuth(session => session && session.getCurrentUser)(
  withRouter(AddShot)
);

const AddShotHeading = styled(HeadingPrimary)`
  padding: 5.2rem 0 2rem 0;
`;
const AddShotContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem 0 2rem;
  position: relative;
  .dropzone {
    width: 100%;
    height: 400px;
    border: dashed 2px #3a8abb;
  }
  .fileover {
    background-color: #d5cdcd80;
    border: dashed 4px #3a8abb;
  }
  .invalid {
    background-color: #d5cdcd80;
    border: dashed 4px #ef6b6b;
    cursor: no-drop;
  }
  h2 {
    color: #504f4f;
  }
`;

const AddShotForm = styled(Form)`
  width: 55rem;
`;
const DropContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const FileTypeCard = styled.div`
  display: flex;
  margin: 1rem;
  align-items: end;
  svg {
    width: 60px;
  }
  span {
    color: #504f4f;
    text-align: left;
    margin-left: 8px;
    font-size: 12px;
    p {
      color: #c4c6c6;
      line-height: 0.5;
    }
  }
`;
const ImagePreview = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 5px solid white;
  border-radius: 4px;
  position: relative;
  transition: all 1s cubic-bezier(0.65, 0.05, 0.36, 1);
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${props =>
      props.uploading ? "#525252b3" : "transparent"};
    border-radius: 50%;
    transform: ${props => (props.uploading ? "scale(2)" : "scale(0)")};
    transition: all 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  img {
    object-fit: cover;
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
`;
const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6px;
  z-index: 10;
  width: ${props => (props.uploading ? props.progress + "%" : 0)};
  background-color: #ea4c89;
  transition: all 0.4ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
