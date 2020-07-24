import React from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
/*
 * Simple editor component that takes placeholder text as a prop
 */
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     };
  }

  handleChange(html) {
    this.props.handleChange(html);
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.props.handleThemeChange(newTheme);
  }

  render() {
    return (
      <div>
        <ReactQuill
          theme={this.props.theme}
          onChange={this.handleChange.bind(this)}
          value={this.props.value}
          modules={this.props.modules}
          formats={this.props.formats}
          bounds={".app"}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  toolbar: PropTypes.any,
  formats: PropTypes.any,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  handleThemeChange: PropTypes.func,
  handleChange: PropTypes.func,
  modules: PropTypes.any,
  theme:PropTypes.string
};
Editor.defaultProps = {
  theme:'snow',
  handleThemeChange: function () {},
  handleChange: function () {},
  value: "",
  placeholder: "Type Something",
  modules: {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  },
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  formats: [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ],
};

export default Editor;
