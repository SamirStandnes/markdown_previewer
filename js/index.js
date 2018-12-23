var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      text: PLACEHOLDER,
      expandedE: true,
      expandedP: true };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.expandMinPreview = _this.expandMinPreview.bind(_this);
    _this.expandMinEditor = _this.expandMinEditor.bind(_this);return _this;
  }_createClass(App, [{ key: "handleChange", value: function handleChange(

    event) {
      this.setState({
        text: event.target.value });

    } }, { key: "expandMinPreview", value: function expandMinPreview()

    {
      this.setState({
        expandedP: !this.state.expandedP });

    } }, { key: "expandMinEditor", value: function expandMinEditor()

    {
      this.setState({
        expandedE: !this.state.expandedE });

    } }, { key: "rawMarkup", value: function rawMarkup(

    content) {
      var markedUp = marked(content, { sanitize: true });
      console.log(markedUp);
      return { __html: markedUp };
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "app" },
          this.state.expandedE && React.createElement("div", { id: "info" }, " ", React.createElement("i", { "class": "far fa-hand-point-left" }), " when the editor is expanded, try increasing the heigth of it!"),
          React.createElement(Editor, {
            value: this.state.text,
            handleChange: this.handleChange,
            size: this.state.expandedE,
            expand: this.expandMinEditor }),

          React.createElement(Preview, {
            text: this.state.text,
            rawMarkup: this.rawMarkup,
            size: this.state.expandedP,
            expand: this.expandMinPreview })));



    } }]);return App;}(React.Component);


var Editor = function Editor(props) {
  return (
    React.createElement("div", { id: "editor-parent" },
      React.createElement("div", { id: props.size ? "editor-child" : "big" },
        React.createElement(Navbar, { componentName: "EDITOR", expand: props.expand }),
        React.createElement("textarea", {
          id: "editor",
          style:
          props.size ?
          { height: 145 } :
          { height: 200, width: "99.5%", resize: "vertical" },

          value: props.value,
          onChange: props.handleChange }))));




};

var Preview = function Preview(props) {
  return (
    React.createElement("div", { id: "preview-parent" },
      React.createElement("div", {
          id: props.size ? "preview-child" : "big",
          style: { backgroundColor: "#efbbff" } },

        React.createElement(Navbar, { componentName: "PREVIEW", expand: props.expand }),
        React.createElement("div", {
          id: "preview",
          dangerouslySetInnerHTML: props.rawMarkup(props.text) }))));




};

var Navbar = function Navbar(props) {
  return (
    React.createElement("nav", null,
      React.createElement("ul", { id: "navbar" },
        React.createElement("li", { style: { paddingRight: 15 } },
          React.createElement("i", { className: "fab fa-free-code-camp" })),

        React.createElement("li", null, props.componentName),
        React.createElement("li", { style: { marginLeft: "auto", paddingRight: 5 } },
          React.createElement("i", {
            id: "expandButton",
            onClick: props.expand,
            className: "fas fa-expand-arrows-alt" })))));





};

var ExpandLogo = function ExpandLogo(props) {
  return (
    React.createElement("li", { style: { marginLeft: "auto", paddingRight: 5 } },
      " ",
      React.createElement("img", { id: "logo", src: EXPAND_LOGO }), " "));


};

// placeholder text is copied from the Project Example
var PLACEHOLDER = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n ```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)";











































var FREECODECAMP_LOGO =
"https://cdn.rawgit.com/Deftwun/e3756a8b518cbb354425/raw/6584db8babd6cbc4ecb35ed36f0d184a506b979e/free-code-camp-logo.svg";

var EXPAND_LOGO = ReactDOM.render(React.createElement(App, null), document.getElementById("root"));