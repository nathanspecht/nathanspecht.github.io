(function(root) {
  'use strict';
  root.ProjectThumb = React.createClass({
    render: function() {
      var divStyle = {
        backgroundImage: "url(" + this.props.project.imageUrl + ")"
      };

      return(
        <div id="project-thumb">
          <a href={this.props.project.liveLink}>
            <div style={divStyle} id="project-image"></div>
          </a>
          <h3>{this.props.project.name}</h3>
          <div id="project-description">
            {this.props.project.description}
          </div>
        </div>
      );
    }
  });
}(this));
