(function(root) {
  'use strict';

  root.ProjectsSection = React.createClass({

    getInitialState: function() {
      return({showProjects: false});
    },

    toggleProjects: function() {
      this.setState({showProjects: !this.state.showProjects});
    },

    render: function() {
      return (
        <div id="projects-section">
        <h2 onClick={this.toggleProjects}>Projects</h2>
          <div>
            {
              root.PROJECTS.map(function(project) {
                return <ProjectThumb project={project} key={project.title}/>;
              })
            }
          </div>
        </div>
      );
    }
  });
}(this));
