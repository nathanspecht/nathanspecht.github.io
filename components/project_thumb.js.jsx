(function(root) {
  'use strict';
  root.ProjectThumb = React.createClass({
    getInitialState: function() {
      return {linksHidden: " hidden"};
    },

    showLinks: function() {
      this.setState({linksHidden: ""});
    },

    hideLinks: function() {
      this.setState({linksHidden: " hidden"});
    },

    render: function() {
      var divStyle = {
        backgroundImage: "url(" + this.props.project.imageUrl + ")"
      };

      return(
        <div id="project-thumb"
             onMouseEnter={this.showLinks}
             onMouseLeave={this.hideLinks}>
          <a href={this.props.project.liveLink}>
            <div style={divStyle} id="project-image"></div>
          </a>
          <h3>{this.props.project.name}</h3>
          <div id="project-description">
            {this.props.project.description}
            <br></br>
            <br></br>
            <div className={"links" + this.state.linksHidden}>
              <a href={this.props.project.liveLink}>live </a>
               |
              <a href={this.props.project.github}> git</a>
            </div>
          </div>
        </div>
      );
    }
  });
}(this));
