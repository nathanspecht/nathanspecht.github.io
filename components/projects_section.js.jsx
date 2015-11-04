(function(root) {
  'use strict';

  root.ProjectsSection = React.createClass({
    render: function() {
      return (
        <div id="projects-section">
        <h2>Projects</h2>
        {
          root.PROJECTS.map(function(project) {
            return <ProjectThumb project={project} />;
          })
        }
        </div>
      );
    }
  });
}(this));
